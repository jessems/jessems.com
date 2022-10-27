import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"
import pic from "../images/hero1.jpg"

const IndexPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="w-full flex flex-wrap">
        <div className="basis-[100%] md:basis-1/2 py-8">
          <p>Hi 👋</p>
          <p className="mt-4">My name is Jesse.</p>
          <p className="mt-4">
            I'm interested in understanding how the world works. Both natural as
            well as human systems.
          </p>
          <p className="mt-4">
            Currently, I'm most interested in the meta-question:
          </p>
          <p className="mt-4 italic">
            How should we be making sense of the world collectively?
          </p>
          <p className="mt-4">
            Some very smart people are arguing that our ability to do so has
            been severely compromised by increased interconnectedness and
            algorithmic content feeds.
          </p>
          <p className="mt-4">
            I try to do my part in improving the signal to noise ratio of the
            internet by publishing{" "}
            <a href="https://jessems.substack.com" target="_blank">
              a weekly newsletter
            </a>{" "}
            with highlights of people making sense on Twitter.
          </p>
          <p className="mt-4">
            I'm also a designer, developer and workshop facilitator.
          </p>
        </div>
        <div className="basis-[100%] md:basis-1/2 p-8">
          <img src={pic} className="rounded-lg" />
        </div>
      </div>
      <div>
        <span>Some of my best content</span>
        <div className="flex flex-wrap mt-4">
          <div className="p-4 flex justify-center basis-[100%] md:basis-1/2 lg:basis-1/3">
            <Link to="/hairdresser-analogy">The Hairdresser Analogy</Link>
          </div>
          <div className="p-4 flex justify-center basis-[100%] md:basis-1/2 lg:basis-1/3">
            <Link to="/outliner-design-patterns">Outliner Design Patterns</Link>
          </div>
          <div className="p-4 flex justify-center basis-[100%] md:basis-1/2 lg:basis-1/3">
            <Link to="/productivity-vs-privacy">Productivity vs. Privacy</Link>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-2 text-lg uppercase font-medium text-gray-500">
        All blog posts
      </div>
      <div>{Posts}</div>
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
            tags
          }
        }
      }
    }
  }
`
