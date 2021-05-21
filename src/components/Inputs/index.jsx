import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'

import * as S from './styled'

export const Inputs = ({
  placeholder,
  onFocus,
  onChange,
  value,
  name,
  type,
  label,
  mask,
  valid
}) => {
  return (
    <S.InputWrapper valid={valid}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <InputMask
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        name={name}
        type={type}
        id={name}
        mask={mask}
      />
      {!valid && <S.InputError>Inválido</S.InputError>}
    </S.InputWrapper>
  )
}

Inputs.defaultProps = {
  valid: true
}

Inputs.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  mark: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  valid: PropTypes.bool
}
