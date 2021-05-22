import React from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Input from './index'

const props = {
  placeholder: 'The placeholder',
  onChange: () => {},
  value: 'The value',
  name: 'input',
  type: 'text',
  id: 'input',
  mask: '',
  label: 'The label'
}

const ProductItemElement = ({ valid }) => {
  return <Input {...props} valid={valid ? true : false} />
}

it('should render correctly', () => {
  const { container } = render(<ProductItemElement valid={true} />)

  const input = screen.getByRole('textbox')
  const label = screen.getByText(props.label)
  const error = screen.queryByText('Inválido')

  expect(error).not.toBeInTheDocument()
  expect(label).toBeInTheDocument()
  expect(input.value).toBe(props.value)
})

it('should show invalid label if valid props is false', () => {
  render(<Input valid={false} />)

  const error = screen.queryByText('Inválido')

  expect(error).toBeInTheDocument()
})
