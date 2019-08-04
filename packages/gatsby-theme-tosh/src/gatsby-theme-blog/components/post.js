import React from 'react'
import { Container, Styled, css } from 'theme-ui'

import PostFooter from 'gatsby-theme-blog/src/components/post-footer'
import SEO from 'gatsby-theme-blog/src/components/seo'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from './layout'

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title }
    }
  },
  location,
  previous,
  next
}) => (
  <Layout location={location} title={title}>
    <SEO title={post.title} description={post.excerpt} />
    <Container>
      <main>
        <Styled.h1>{post.title}</Styled.h1>
        <Styled.p
          css={css({
            fontSize: 1,
            mt: -3,
            mb: 3
          })}
        >
          {post.date}
        </Styled.p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </main>
      <PostFooter {...{ previous, next }} />
    </Container>
  </Layout>
)

export default Post
