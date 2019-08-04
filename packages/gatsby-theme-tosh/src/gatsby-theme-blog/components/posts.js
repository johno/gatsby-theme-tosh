import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Styled, css, Container } from 'theme-ui'

import Layout from '../components/layout'
import Bio from '../components/bio'
import SEO from 'gatsby-theme-blog/src/components/seo'
import Footer from 'gatsby-theme-blog/src/components/home-footer'

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <Container css={css({ backgroundColor: 'transparent', border: 'none' })}>
      <Bio css={css({ ml: -4 })} />
    </Container>
    <Container css={css({ pb: 4 })}>
      <main>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          const keywords = node.keywords || []
          return (
            <Fragment key={node.slug}>
              <SEO title="Home" keywords={keywords} />
              <div>
                <Styled.h2
                  css={css({
                    mb: 1
                  })}
                >
                  <Styled.a
                    as={Link}
                    css={{
                      textDecoration: `none`
                    }}
                    to={node.slug}
                  >
                    {title}
                  </Styled.a>
                </Styled.h2>
                <small>{node.date}</small>
                <Styled.p>{node.excerpt}</Styled.p>
              </div>
            </Fragment>
          )
        })}
      </main>
      <Footer socialLinks={socialLinks} />
    </Container>
  </Layout>
)

export default Posts
