import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Wrapper from './index'

const Children = () => {
  return <div>Children</div>
}

it('should render correctly', () => {
  const { container } = render(
    <Wrapper>
      <Children />
    </Wrapper>
  )

  expect(container).toMatchInlineSnapshot(`
    .c0 {
      width: 800px;
      max-width: 100%;
      margin: 0 auto;
      padding: 0px 10px 20px;
    }

    <div>
      <div
        class="c0"
      >
        <div>
          Children
        </div>
      </div>
    </div>
  `)
})
