import styled from 'styled-components'

import * as C from 'constants/styles/colors'
import * as T from 'constants/styles/typography'

export const ContentWrapper = styled.main`
  background-color: ${C.WHITE};
  padding: 12px;
  box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);
  margin: 5px 0px 20px;
`
export const ContentTitle = styled.p`
  text-transform: uppercase;
  ${T.TITLE_EXTRA_LARGE};
  padding-left: 10px;
  color: ${C.GREY_DARK};
`
