/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { Styled, jsx, useThemeUI } from 'theme-ui'

const Bio = props => {
  const data = useStaticQuery(bioQuery)
  const {
    theme: { colors = {} }
  } = useThemeUI()

  const {
    site: {
      siteMetadata: { author, description }
    }
  } = data

  return (
    <section
      sx={{
        my: 4,
        py: 2,
        color: 'accent',
        backgroundColor: 'background',
        maxWidth: '36em',
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 8,
        borderBottomWidth: 8
      }}
      {...props}
    >
      <div
        sx={{
          background: `linear-gradient(
          to bottom,
          ${colors.text},
          ${colors.text} 50%,
          ${colors.background} 50%,
          ${colors.background}
        )`,
          backgroundSize: '.25rem .25rem',
          textAlign: 'center'
        }}
      >
        <Styled.p
          sx={{
            margin: 0,
            py: 1,
            px: 3,
            display: 'inline',
            backgroundColor: 'background'
          }}
        >
          Author
        </Styled.p>
      </div>
      <Styled.p
        sx={{
          py: 2,
          px: 3,
          mt: 2,
          borderTop: '1px solid',
          borderBottom: '1px solid'
        }}
      >
        {author || 'Unknown'}
      </Styled.p>
      <Styled.p
        sx={{
          py: 1,
          px: 3
        }}
      >
        {description}
      </Styled.p>
    </section>
  )
}

const bioQuery = graphql`
  query CustomBioQuery {
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`

export default Bio
