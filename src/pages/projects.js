import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: ${theme.colors.primary};
        padding: 20px 0 30px 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h1
          css={css`
            color: ${theme.colors.white};
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
          `}
        >
          JesseMS
        </h1>
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
}

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <h2>Rapid Breakup Recovery</h2>
Rapid Breakup Recovery is my ongoing attempt at creating a better solution for guys that find themselves in the throes of a breakup. I post regularly on the blog, there's currently an active Facebook community  and I sell <a href="https://rapidbreakuprecovery.com/breakup-coaching/">coaching</a> and an ebook called the <a href="https://rapidbreakuprecovery.com/breakup-recovery-manual-for-men/">Breakup Recovery Manual for Men</a>.

MRR: ~$200
<h2>Pingcoin</h2>
<a href="http://pingcoin.com">Pingcoin</a> is an ongoing passion project. It is an Android app for sound-based counterfeit coin detection.

MRR: $0
<h2>Mute Politics</h2>
<a href="https://github.com/jessems/mute-politics-twitter">Mute Politics</a> is collection of scripts that make it easier to block politicians and political topics on Twitter. It was borne from my frustration with people who I follow for their industry-expertise polluting my timeline with petty politics.

MRR: $0

&nbsp;
         </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
