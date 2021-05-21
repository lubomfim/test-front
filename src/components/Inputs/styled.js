import styled from 'styled-components'

import * as C from 'constants/styles/colors'
import * as T from 'constants/styles/typography'

export const InputWrapper = styled.div`
  margin-bottom: 25px;
  position: relative;

  & > input {
    border: 1px solid ${({ valid }) => (valid ? C.GREY_MID_LIGHT : C.INPUT_ERROR_COLOR)};
    transition: all 0.4s ease;
    padding: 14px 13px;
    ${T.BODY_TEXT_EXTRA_LARGE}
    box-shadow: inset 0px 1px 2px rgba(0,0,0,0.2);
    width: 100%;
    border-radius: 3px;
    display: block;
    outline: none;

    &::placeholder {
      color: ${C.GREY_LIGHT};
    }
    &:focus {
      border-color: ${({ valid }) => (valid ? C.INPUT_FOCUS_COLOR : C.INPUT_ERROR_COLOR)};
    }
  }
`

export const Label = styled.label`
  ${T.LABEL_TEXT}
  display: block;
  margin-bottom: 5px;
  color: ${C.TEXT_SECONDARY_COLOR};
`
export const Input = styled.input``

export const InputError = styled.p`
  color: ${C.INPUT_ERROR_COLOR};
  ${T.BODY_TEXT_SMALL};
  position: absolute;
  bottom: -19px;
`
