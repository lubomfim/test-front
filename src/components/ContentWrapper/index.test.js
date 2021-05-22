import React from 'react'
import { render, screen } from '@testing-library/react'
import { convertMoney } from 'utils/convertMoney'
import 'jest-styled-components'

import ContentWrapper from './index'

const props = {
  title: 'Pagamento'
}

const Children = () => {
  return <div>Children</div>
}

it('should render correctly', () => {
  const { container } = render(
    <ContentWrapper {...props}>
      <Children />
    </ContentWrapper>
  )

  const children = screen.getByText('Children')
  const text = screen.getByText('Pagamento')

  expect(children).toBeInTheDocument()
  expect(text).toBeInTheDocument()
})
