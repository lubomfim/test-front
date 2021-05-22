import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Loader from './index'

it('should render correctly', () => {
  const { container } = render(<Loader />)

  expect(container).toMatchInlineSnapshot(`
    .c0 {
      cursor: wait;
      width: 30px;
      height: 30px;
      border: solid 3px transparent;
      border-left-color: #FF7800;
      border-right-color: #FF7800;
      border-top-color: #FF7800;
      -webkit-animation: rotating 0.5s 0.25s linear infinite;
      animation: rotating 0.5s 0.25s linear infinite;
      border-radius: 50%;
      margin: 0 auto;
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
    }

    <div>
      <div
        class="c0"
      />
    </div>
  `)
})
