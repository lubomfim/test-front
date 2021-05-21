import styled, { css } from 'styled-components'

import * as C from 'constants/styles/colors'
import * as T from 'constants/styles/typography'

export const CardProductItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid ${C.SECONDARY_COLOR};
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 0px;
  }
`

/*
IMAGE ITEmS
*/

export const CardProductImgWrapper = styled.picture`
  min-width: 65px;
  min-height: 65px;
  margin-right: 11px;

  @media (max-width: 600px) {
    ${({ hidePrice }) =>
      hidePrice
        ? css`
            min-width: 45px;
            min-height: 45px;
            width: 45px;
            height: 45px;
          `
        : ''}
  }
`

export const CardProductImg = styled.img`
  width: 100%;
`

export const CardProductSource = styled.source`
  width: 100%;
`

/*
TEXT ITEMS
*/

export const CardProductText = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardProductName = styled.p`
  ${T.BODY_TEXT_MEDIUM};
`

export const CardProductPrice = styled.p`
  ${T.TITLE_EXTRA_LARGE}
  align-self: flex-end;
  margin-top: 15px;
`
