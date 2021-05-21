import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'
import { convertMoney } from 'utils/convertMoney'
import { splitString } from 'utils/splitString'

const CardProduct = ({
  product: {
    name,
    imageObjects,
    priceSpecification: { price }
  },
  hidePrice
}) => {
  return (
    <S.CardProductItem>
      <S.CardProductImgWrapper hidePrice={hidePrice}>
        <S.CardProductSource
          media="(min-width: 650px)"
          srcSet={imageObjects[0].medium}
          alt={name}
        />
        <S.CardProductImg src={imageObjects[0].thumbnail} alt={name} />
      </S.CardProductImgWrapper>
      <S.CardProductText>
        <S.CardProductName>{splitString(name, 65, 0)}</S.CardProductName>
        {!hidePrice && <S.CardProductPrice>{convertMoney(price)}</S.CardProductPrice>}
      </S.CardProductText>
    </S.CardProductItem>
  )
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageObjects: PropTypes.array.isRequired,
    priceSpecification: PropTypes.shape({
      price: PropTypes.number.isRequired
    })
  }),
  hidePrice: PropTypes.bool
}

export default CardProduct
