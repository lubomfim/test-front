import React from 'react'
import { useProductsContext } from 'contexts/checkout'

import { CardValues } from 'components/CardValues'
import { ContentWrapper } from 'components/ContentWrapper'
import { Loader } from 'components/Loader'
import { PaymentForm } from 'components/PaymentForm'
import { Wrapper } from 'components/Wrapper'
import { paymentData } from 'constants/data/pages/payment'
import { Button } from 'components/Buttons'
import { Header } from 'components/Header'

const Payment = () => {
  const { isLoading, prices } = useProductsContext()

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <Header step={1} />
      {!isLoading && (
        <Wrapper>
          <React.Fragment>
            <ContentWrapper title={paymentData.title}>
              <PaymentForm />
            </ContentWrapper>

            <CardValues prices={prices} />
            <Button text={paymentData.buttonText} step="2" path="paid" />
          </React.Fragment>
        </Wrapper>
      )}
    </React.Fragment>
  )
}

export default Payment
