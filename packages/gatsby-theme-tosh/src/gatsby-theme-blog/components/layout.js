/** @jsx jsx */
import { Global } from '@emotion/core'
import { useThemeUI, Styled, jsx } from 'theme-ui'

import Header from './header'

export default ({ children, ...props }) => {
  const {
    theme: { colors = {} }
  } = useThemeUI()

  const bodyStyles = {
    body: {
      margin: 0,
      background: `linear-gradient(
        to right top,
        ${colors.backgroundImageDark} 33%,
        ${colors.backgroundImageLight} 33%,
        ${colors.backgroundImageLight} 66%,
        ${colors.backgroundImageDark} 66%
      )`,
      backgroundSize: '3px 3px'
    }
  }

  return (
    <Styled.root>
      <Global styles={bodyStyles} />
      <Header {...props} />
      {children}
    </Styled.root>
  )
}
