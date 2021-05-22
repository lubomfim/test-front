import React from 'react'
import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import Header from './index'
import { headerData } from 'constants/data/components/header/'

import * as C from 'constants/styles/colors'

it('should render correctly', () => {
  const { container } = render(<Header step={1} />)

  const lengthMenu = headerData.length
  const items = screen.getAllByRole('listitem')

  expect(items).toHaveLength(lengthMenu)
})

it('should have the right color depends on step', () => {
  render(<Header step={2} />)

  const selectStep = screen.getByText(headerData[2])
  const notSelectStep = screen.getByText(headerData[1])

  expect(selectStep).toHaveStyle(`color: ${C.PRIMARY_COLOR}`)
  expect(notSelectStep).toHaveStyle(`color: ${C.TEXT_SECONDARY_COLOR}`)
})
