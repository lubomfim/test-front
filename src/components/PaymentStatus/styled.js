import styled from 'styled-components'

import * as T from 'constants/styles/typography'

export const PaymentStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20.43px;
`

export const PaymentStatusWrapperImg = styled.div`
  width: 39.51px;
`

export const PaymentStatusImg = styled.img`
  margin-bottom: 11px;
`

export const PaymentStatusText = styled.p`
  color: ${({ color }) => color};
  text-transform: uppercase;
  ${T.TITLE_EXTRA_LARGE};
`
