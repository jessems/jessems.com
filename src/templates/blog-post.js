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
      <div className="flex justify-center w-full">
        <div>
          <iframe
            src="https://jessems.substack.com/embed"
            width="480"
            height="200"
            style={{ background: "white" }}
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
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
        tags
        category
      }
      body
    }
  }
`

export default BlogPost
