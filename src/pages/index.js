import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import Nav from "../components/nav"
import Featured from "../components/featured"
import PostSection from "../components/postSection"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. You can login and add the blog through the
          headless CMS{" "}
          <Link to="https://inspiring-easley-acf800.netlify.app/admin/#/">
            here
          </Link>
        </p>
      </Layout>
    )
  }

  const [latestBlog] = data.allMarkdownRemark.nodes
  console.log(latestBlog)
  return (
    <Layout location={location} title={siteTitle}>
      <Nav />
      <Seo title="All posts" />
      <Featured featured={latestBlog} />
      <PostSection
        heading="Latest"
        subheading="Latest blogs in your fingertips"
      />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          layout
          image
        }
      }
    }
  }
`
