import React from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import CardValues from './index'

const props = {
  prices: { shippingTotal: 50, subTotal: 20, total: 30, discount: 10 }
}

it('should render correctly', () => {
  const { container } = render(<CardValues {...props} />)

  expect(container).toBeInTheDocument()
})

it('should render orange if discount is on props', () => {
  render(<CardValues {...props} />)

  const discountItem = screen.getByText('Desconto')

  expect(discountItem).toHaveStyle('color: #FF7800')
})
