import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPost = ({ data: { mdx: post } }) => {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <div>
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
      }
      body
    }
  }
`;

export default BlogPost;