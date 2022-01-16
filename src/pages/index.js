import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => 
{
  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.date)
  .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
return (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="gatsby astronaut"
      />
    </div>
    <div>{Posts}</div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`