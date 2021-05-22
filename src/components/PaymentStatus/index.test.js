import React from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import StatusPayment from './index'
import { paymentStatus } from 'constants/data/components/paymentStatus'

const status = 'success'

it('should render correctly', () => {
  const { container } = render(<StatusPayment status={status} />)

  const { icon, text, color } = paymentStatus[status]

  const image = screen.getByRole('img')
  const paragraph = screen.getByText(text)

  expect(image.src).toContain(icon)
  expect(paragraph).toHaveTextContent(text)
  expect(paragraph).toHaveStyle(`color: ${color}`)
})
