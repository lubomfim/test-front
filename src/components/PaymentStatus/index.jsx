import React from 'react'
import PropTypes from 'prop-types'
import { paymentStatus } from 'constants/data/components/paymentStatus'

import * as S from './styled'

export const StatusPayment = ({ status }) => {
  const { icon, text, color } = paymentStatus[status]
  return (
    <S.PaymentStatusWrapper>
      <S.PaymentStatusWrapperImg>
        <S.PaymentStatusImg src={icon} />
      </S.PaymentStatusWrapperImg>
      <S.PaymentStatusText color={color}>{text}</S.PaymentStatusText>
    </S.PaymentStatusWrapper>
  )
}

StatusPayment.propTypes = {
  status: PropTypes.string.isRequired
}
