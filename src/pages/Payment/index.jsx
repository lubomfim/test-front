import React, { useCallback, useEffect, useState } from 'react'
import { useProductsContext } from 'contexts/checkout'

import Header from 'components/Header'
import CardValues from 'components/CardValues'
import ContentWrapper from 'components/ContentWrapper'
import Loader from 'components/Loader'
import Wrapper from 'components/Wrapper'
import Button from 'components/Buttons'
import Inputs from 'components/Inputs'

import { paymentData } from 'constants/data/pages/payment'
import { valCardNumber, valCardName, valCardDate, valCvv } from 'utils/validationCard'

import * as S from './styled'
const Payment = () => {
  const { isLoading, prices, isValidated, setIsValidated, setPaymentInfo, paymentInfo } =
    useProductsContext()

  const { cardNumber, cvv, cardName, cardDate } = paymentData

  const [data, setData] = useState({
    cardNumber: {
      value: '',
      valid: true
    },
    cardName: {
      value: '',
      valid: true
    },
    cardDate: {
      value: '',
      valid: true
    },
    cvv: {
      value: '',
      valid: true
    }
  })

  const switchValidation = useCallback((type, value, bol) => {
    setData((data) => ({
      ...data,
      [type]: {
        value: value,
        valid: bol
      }
    }))
  }, [])

  const handleChange = useCallback(
    (type, value) => {
      const targetValue = value.target.value
      const newValue = targetValue.replaceAll('.', '')

      switch (type) {
        case 'cardNumber':
          switchValidation(type, targetValue, valCardNumber(newValue))
          break
        case 'cardName':
          switchValidation(type, targetValue, valCardName(targetValue))
          break
        case 'cardDate':
          switchValidation(type, targetValue, valCardDate(targetValue))
          break
        case 'cvv':
          switchValidation(type, targetValue, valCvv(targetValue))
          break
        default:
          return
      }

      setPaymentInfo({
        ...paymentInfo,
        [type]: targetValue
      })
    },
    [paymentInfo, setPaymentInfo, switchValidation]
  )

  useEffect(() => {
    const { cardNumber, cardDate, cardName, cvv } = data
    const items = [cardNumber, cardDate, cardName, cvv]

    const checkout = items.every((el) => el.value !== '' && el.valid)
    if (checkout) {
      setIsValidated(true)
    } else {
      setIsValidated(false)
    }
  })

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <Header step={1} />
      {!isLoading && (
        <Wrapper>
          <React.Fragment>
            <ContentWrapper title={paymentData.title}>
              <S.PaymentForm autoComplete="off">
                <Inputs
                  {...cardNumber}
                  value={data.cardNumber.value}
                  onChange={(e) => handleChange('cardNumber', e)}
                  valid={data.cardNumber.valid}
                />
                <Inputs
                  {...cardName}
                  value={data.cardName.value}
                  onChange={(e) => handleChange('cardName', e)}
                  valid={data.cardName.valid}
                />
                <S.PaymentFormHalf>
                  <Inputs
                    {...cardDate}
                    value={data.cardDate.value}
                    onChange={(e) => handleChange('cardDate', e)}
                    valid={data.cardDate.valid}
                  />
                  <Inputs
                    {...cvv}
                    value={data.cvv.value}
                    onChange={(e) => handleChange('cvv', e)}
                    valid={data.cvv.valid}
                  />
                </S.PaymentFormHalf>
              </S.PaymentForm>
            </ContentWrapper>

            <CardValues prices={prices} />
            <Button text={paymentData.buttonText} step="2" path={`paid`} disabled={!isValidated} />
          </React.Fragment>
        </Wrapper>
      )}
    </React.Fragment>
  )
}

export default Payment
