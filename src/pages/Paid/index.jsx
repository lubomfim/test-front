import React from 'react'

import { Header } from 'components/Header'
import { Wrapper } from 'components/Wrapper'
import { ContentWrapper } from 'components/ContentWrapper'
import { Loader } from 'components/Loader'
import { CardProduct } from 'components/ProductItem'
import { CardValues } from 'components/CardValues'
import { useProductsContext } from 'contexts/checkout'

import { paidData } from 'constants/data/pages/paid'
import { StatusPayment } from 'components/PaymentStatus'

const Paid = () => {
  const { isLoading, prices, products } = useProductsContext()

  return (
    <React.Fragment>
      <Header step={2} />
      <Wrapper>
        {isLoading && <Loader />}
        {products.length > 0 && (
          <React.Fragment>
            <StatusPayment status={'success'} />
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
}

export default Paid
