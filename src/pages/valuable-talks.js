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
        This is a collection of valuable talks on a variety of topics.
<h3>Interesting / Useful Concepts</h3>
<h4>The principle of explosion</h4>
There is a concept called the principle of explosion in mathematics. The principle of explosion says that if you can get 1 contradiction through airport security you can blow up the universe. As soon as you allow a single contradiction in the unity of knowledge, everything can be proven -- so everything becomes meaningless. So the game, in some sense, in mathematics, becomes: let's take all those beautiful things that you believe. So you just enunciated some, I enunciated some -- throw them all in. <strong>Instead of saying what's true and what isn't true -- you say: are these compatible? </strong>

https://youtu.be/Oa-CKVTfg80?t=3m30s
<h2>Startups / Digital Products</h2>
https://www.youtube.com/watch?v=gRxsGpJ0kas&amp;t

<img class="alignnone size-large wp-image-161" src="http://jessems.com/wp-content/uploads/2018/11/Screenshot-2018-11-21-at-15.43.15-1024x255.png" alt="" width="525" height="131" />

"Making something becomes the most important thing, even if that thing is nothing, because it starts this process of forward momentum"
<h3>Language Acquisition is about Comprehensible Input</h3>
https://www.youtube.com/watch?v=NiTsduRreug

In this short talk Stephen Krashen explains the results of his research, arguing that language acquisition is, principally, about ingesting <em>messages </em>-- that is, information that you understand. Repeating words, learning rules, none of it matters compared to exposing yourself to, what Krashen calls: comprehensible input. We don't need to learn the rules. Child's don't learn the rules when they learn a language. We simply need to feed our Language Activation Devices and keep our anxiety at 0 while doing so. Paradoxically, when we do this, it doesn't necessarily feel like anything is happening. The language acquisition happens unconsciously.
<h2>Using Cognitive Resources</h2>
https://www.youtube.com/watch?v=FKTxC9pl-WM&amp;feature=youtu.be

Our cognitive resources are like a tank that runs dry throughout the day. When we've mastered a concept, however, it no longer drains our cognitive resources. We should strive to bring tasks from consuming cognitive resources to where they don't. The way to do this is to break down tasks into smaller components that we can master. Also, our brains can master things without us being consciously aware of the learning process <em>or </em>the processing part. We just need to feed it labeled data and let the pattern recognition mechanism of the brain do its work.
<h3>Iterative Drawing (The fastest way to develop your creative intuition)</h3>
https://youtu.be/k0ufz75UvHs

If you're analytically inclined (as opposed to creative intuitively) the best way to practice your intuition is by iterative drawing. Instead of drawing an entire character and carefully thinking about the best practices and frameworks, draw 20 heads and play around by putting the eyes and noses in slightly different places. See what the effect is. This is how you can develop intuition for this type of work.

<img class="alignnone size-large wp-image-164" src="http://jessems.com/wp-content/uploads/2018/11/Screenshot-2018-11-21-at-15.50.41-1024x500.png" alt="" width="525" height="256" />

<a href="https://www.youtube.com/watch?v=id1WShzzMCQ">How to invent the future I</a> - Michael Kay

<a href="https://www.youtube.com/watch?v=1e8VZlPBx_0">How to invent the future II</a> - Michael Kay
<h3>How to stop sucking and be awesome instead</h3>
https://www.youtube.com/watch?v=L7EGIt3-WUQ

A great presentation by one of the founders of Stackoverflow where he distills his life philosophy into 3 lessons.

Firstly, Jeff says to embrace the fact that whatever you create is going to suck initially. This is simply how it works. He also introduces Boyd's law which states that:

Speed of iteration always beats quality of iteration.

Secondly, Jeff advises to work in public. He says: "once something is in public, people will look at it and work on it with you." He also says that public actions lead to better behaviors. You have the freedom to continue to suck in private, whereas in public you are trying to be awesome.

He mentions that people would figure out the solution to their problem just by the process of thinking deeply about their problem while formulating the question.

Others benefit from the little things you figure out.

Lastly, Jeff advises us to pick stuff that matters.
<h3>The human representation of thought</h3>
https://vimeo.com/115154289

In this talk Bret Victor lays out the argument that technology currently leverages only one of our modalities of understanding things (visual), and that this is both wasteful and inhumane. He talks about what technology could look like if it were able to use more modalities. Worth noting, however, is that he doesn't think technological progress is by definition headed in that direction. According to Bret, it would require conscious effort to develop these humane technologies.
<h2>Wardley Mapping</h2>
https://www.youtube.com/watch?v=vR3yIarGvz4

A great presentation and a fascinating technique: Wardley Mapping. As a CEO for an early tech startup Simon Wardley grew dissatisfied with his ability to create a meaningful strategy. Techniques for coming up with strategies are rarely context specific. By first carefully defining what qualities a true map has he came up with his own strategic mapping technique: Wardley Mapping.

Wardley Mapping maps the value chain vertically and the evolution of the different components (from custom-built to commodity) on the x-axis. This gives you a map to orient your business / product in whatever environment you're in.

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
