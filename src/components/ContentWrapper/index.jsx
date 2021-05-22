import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styled'

const ContentWrapper = ({ children, title }) => {
  return (
    <div>
      <S.ContentTitle>{title}</S.ContentTitle>
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </div>
  )
}

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default ContentWrapper
