import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"

const BlogPost = ({ data: { mdx: post } }) => {
  const { title } = post.frontmatter
  const { body } = post
  return (
    <Layout>
      <div className="container md:max-w-3xl mx-auto">
        <article className="prose pt-16">
          <h1>{title}</h1>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
      }
      body
    }
  }
`

export default BlogPost
