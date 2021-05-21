import React from 'react'

import ContentWrapper from 'components/ContentWrapper'
import CardProduct from 'components/ProductItem'
import CardValues from 'components/CardValues'
import Header from 'components/Header'
import Wrapper from 'components/Wrapper'
import Loader from 'components/Loader'
import Button from 'components/Buttons'

import { useProductsContext } from 'contexts/checkout'
import { bagData } from 'constants/data/pages/cart'

const Cart = () => {
  const { isLoading, prices, products } = useProductsContext()

  return (
    <React.Fragment>
      <Header step={0} />
      <Wrapper>
        {isLoading && <Loader />}
        {products.length > 0 && (
          <React.Fragment>
            <ContentWrapper title={bagData.title}>
              {products.map((el, index) => (
                <CardProduct key={index} product={el.product} />
              ))}
            </ContentWrapper>

            <div>
              <CardValues prices={prices} />
              <Button text={bagData.buttonText} step="1" path={`payment`} />
            </div>
          </React.Fragment>
        )}
      </Wrapper>
    </React.Fragment>
  )
}

export default Cart
