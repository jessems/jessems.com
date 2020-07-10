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
        This is a collection of "techniques" for the mind that I've found useful to find answers or to explore possibilities.
<h3>The 10/10/10 rule</h3>

<p>Supposedly this rule was inventend or popularized by <a href="http://www.suzywelch101010.com/">Suzy Welch</a>.
</p>

<p>
<strong>Problem</strong>: You're faced with a difficult decision, but you're finding it difficult to navigate making the right call.
</p>

<p>
<strong>Solution</strong>: Imagine making one of the possible decisions and ask yourself:
</p>
<ol>
 	<li>How will this make me feel in 10 minutes?</li>
 	<li>How will this make me feel in 10 months?</li>
 	<li>How will this make me feel in 10 years?</li>
</ol>
Often times you will get different answers for each time scale. Decisions that give you anxiety in the short-term will often become meaningless on a longer time scale.
<h3>The worst case scenario</h3>
<p><strong>Problem</strong>: You're worried about something.</p>

<p><strong>Solution</strong>: Imagine the worst case scenario for whatever you're worrying about.</p>

If you're worried you might not be able to pay your bills this month, ask yourself what would the worst case scenario look like? Go to the extreme. You run out of money, then what? You die in the gutter? You're an embarrassment to your family? You have to beg for money? What's feels like the worst possible scenario you can imagine? Then try to make it worse.

Identifying your worst possible scenario helps you figure out what you're afraid of. Understanding your fears helps you overcome them and helps you understand what drives your behavior.
<h3>The one thing</h3>
Popularized in "The One Thing" by Gary Keller, this question helps focus your mind on what is most important.

<p><strong>Problem</strong>: You do not know what to work on next.</p>

<p><strong>Solution</strong>: Ask yourself: What is the one thing that I can do such that by doing it everything else will be easier or unnecessary? The answer that bubbles up is what you should work on next.</p>

<h3>The airport test</h3>
First read this in Pat Flynn's "Will it fly?".

<p><strong>Problem</strong>: You want to determine what drives you and makes you happy.</p>

<p><strong>Solution</strong>: Imagine that you are 5 years in the future and you're at the airport. Then, you see a familiar face, an old friend from your childhood who you have warm memories with. The exchange goes something like this:</p>

<p>Him/Her: "Hey &lt;your name&gt;"</p>

<p>You: "Hey! &lt;their name&gt;"</p>

<p>Him/Her: "Wow it's so good to see you. It's been so many years. How have you been?"</p>

<p>You: "Yeah! It's been ages. So good to see you too... "</p>

<p>(Now here's the key part)</p>

<p>"I am FANTASTIC, could not be better. I..."</p>

<p>Why are you fantastic? What needs to be going on in your life for you to tell an old friend that you are doing amazing? Whatever comes bubbling up for you should give you insight into what makes you happy and fulfilled.</p>

<h3>What would this look like if it were easy?</h3>
<p>I first heard this from Tim Ferris who was describing his thought process in trying to distill the secrets of high performers for his book Tools of Titans. By asking himself "what would this look like if it were easy?" Tim realized he could reach out to the high performers he wanted to cover and ask them about their secrets.</p>

<p><strong>Problem</strong>: You're faced with a difficult challenge and you're wondering how to tackle it.</p>

<p><strong>Solution</strong>: Ask yourself: What would this challenge look like if it were easy? And let the answer bubble up.</p>
        
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
