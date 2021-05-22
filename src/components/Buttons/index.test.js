import React from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Button from './index'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'
import { useLocation } from 'react-router'

const props = {
  path: 'cart',
  text: 'Clique aqui'
}

const ButtonElement = ({ disabled }) => {
  return <Button {...props} disabled={disabled ? true : false} />
}

const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

it('should render correctly', () => {
  render(<ButtonElement />)

  const button = screen.getByText('Clique aqui')

  expect(button).toBeInTheDocument()
  expect(button).toHaveStyle('pointer-events: auto')
})

it('should be change url when button is clicked and enabled', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <ButtonElement />
      <LocationDisplay />
    </Router>
  )

  const button = screen.getByText('Clique aqui')

  userEvent.click(button)

  expect(screen.getByTestId('location-display')).toHaveTextContent(props.path)
})

it('should be disabled and with pointer-events:none and dont push url', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <ButtonElement disabled={true} />
      <LocationDisplay />
    </Router>
  )

  const button = screen.getByText('Clique aqui')

  userEvent.click(button)

  expect(button).toBeDisabled()
  expect(button).toHaveStyle('pointer-events: none')
  expect(screen.getByTestId('location-display')).not.toHaveTextContent(props.path)
})
