import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'
import { useHistory } from 'react-router'

const Button = ({ text, path, disabled }) => {
  const history = useHistory()

  return (
    <S.Button onClick={() => history.push(`/checkout/${path}`)} disabled={disabled}>
      {text}
    </S.Button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default Button
