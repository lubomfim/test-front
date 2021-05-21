import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'
import { useHistory } from 'react-router'

export const Button = ({ text, path, disabled }) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/checkout/${path}`)
  }

  return (
    <S.Button onClick={handleClick} disabled={disabled}>
      {text}
    </S.Button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}
