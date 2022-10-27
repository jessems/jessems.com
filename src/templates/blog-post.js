import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import PrismSyntaxHighlight from "../components/prism-syntax-highlight"

const components = {
  code: ({ children, className }) => {
    return (
      <PrismSyntaxHighlight className={className}>
        {children}
      </PrismSyntaxHighlight>
    )
  },
}

const BlogPost = ({ data: { mdx: post } }) => {
  const { title } = post.frontmatter
  const { body } = post

  return (
    <Layout>
      <div className="container md:max-w-3xl mx-auto">
        <article className="prose pt-16 prose-a:text-blue-300 prose-headings:text-white prose-ol:text-white dark:prose-invert">
          <h1 className="text-white">{title}</h1>
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </article>
      </div>
      <div className="flex justify-center w-full">
        <div>
          <iframe
            src="https://jessems.substack.com/embed"
            width="480"
            height="200"
            style={{ background: "#101728", color: "#fff" }}
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
