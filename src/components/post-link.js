import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <div>
    <Link
      to={post.frontmatter.slug}
      className="font-semibold hover:underline hover:text-[#d33a2c] text-gray-700 visited:text-gray-500"
    >
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)
export default PostLink
