/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, useColorMode, Styled, Header } from 'theme-ui'

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Styled.h1>
        <Styled.a as={Link} to={`/`}>
          {children}
        </Styled.a>
      </Styled.h1>
    )
  } else {
    return (
      <Styled.h3 as="p">
        <Styled.a as={Link} to={`/`}>
          {children}
        </Styled.a>
      </Styled.h3>
    )
  }
}

export default ({ children, title, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <Header>
      <Title {...props}>{title}</Title>

      <nav>
        {children}
        <button
          sx={{
            ml: 2,
            backgroundColor: 'text',
            color: 'background',
            fontFamily: 'body',
            lineHeight: 1,
            p: 2,
            verticalAlign: 'middle',
            textTransform: 'uppercase',
            border: '4px solid'
          }}
          aria-label="Toggle dark mode"
          onClick={() => {
            setColorMode(isDark ? `light` : `dark`)
          }}
        >
          {colorMode}
        </button>
      </nav>
    </Header>
  )
}
