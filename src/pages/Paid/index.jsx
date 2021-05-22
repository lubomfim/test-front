import React, { useEffect } from 'react'

import Header from 'components/Header'
import CardProduct from 'components/ProductItem'
import CardValues from 'components/CardValues'
import ContentWrapper from 'components/ContentWrapper'
import Loader from 'components/Loader'
import Wrapper from 'components/Wrapper'
import StatusPayment from 'components/PaymentStatus'

import { useCheckoutContext } from 'contexts/CheckoutContext/checkout'
import { paidData } from 'constants/data/pages/paid'
import { useHistory } from 'react-router'
import { maskNumber } from 'utils/maskNumber'

import * as S from './styled'

const Paid = () => {
  const { isLoading, prices, products, isValidated, paymentInfo } = useCheckoutContext()
  const { cardName, cardNumber, cardDate } = paymentInfo
  const history = useHistory()

  useEffect(() => {
    console.log(isValidated)
    if (!isValidated) {
      history.push(`/checkout/cart`)
    }
  }, [history, isValidated])

  return (
    isValidated && (
      <React.Fragment>
        <Header step={2} />
        <Wrapper>
          {isLoading && <Loader />}
          {products.length > 0 && (
            <React.Fragment>
              <StatusPayment status={'success'} />
              <ContentWrapper title={paidData.titlePayment}>
                <S.PaymentInfoText>{maskNumber(cardNumber)}</S.PaymentInfoText>
                <S.PaymentInfoText>{cardName}</S.PaymentInfoText>
                <S.PaymentInfoText>{cardDate}</S.PaymentInfoText>
              </ContentWrapper>

              <ContentWrapper title={paidData.titleProducts}>
                {products.map((el, index) => (
                  <CardProduct key={index} product={el.product} hidePrice={true} />
                ))}
              </ContentWrapper>

              <div>
                <CardValues prices={prices} />
              </div>
            </React.Fragment>
          )}
        </Wrapper>
      </React.Fragment>
    )
  )
}

export default Paid
