import React from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import ProductItem from './index'

const props = {
  product: {
    name: 'My product',
    imageObjects: [
      {
        thumbnail: 'thumbnail.png',
        medium: 'medium.png'
      }
    ],
    priceSpecification: {
      price: 250
    }
  }
}

const ProductItemElement = ({ hide }) => {
  return <ProductItem {...props} hidePrice={hide ? true : false} />
}

it('should render correctly', () => {
  const { container } = render(<ProductItemElement />)

  const source = document.querySelector('source')
  const image = screen.getByRole('img')
  const name = screen.queryByText(props.product.name)
  const price = screen.queryByText(new RegExp(props.product.priceSpecification.price))

  expect(source.srcset).toContain(props.product.imageObjects[0].medium)
  expect(image.src).toContain(props.product.imageObjects[0].thumbnail)
  expect(name).toBeInTheDocument()
  expect(price).toBeInTheDocument()
})

it('should not show price if hide props is true', () => {
  render(<ProductItemElement hide={true} />)

  const price = screen.queryByText(new RegExp(props.product.priceSpecification.price))

  expect(price).not.toBeInTheDocument()
})
