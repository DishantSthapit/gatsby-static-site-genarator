import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from "../components/nav"
import Featured from "../components/featured"
import BlogCard from "../components/blogcard"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  const [latestBlog] = data.allMarkdownRemark.nodes
  return (
    <Layout location={location} title={siteTitle}>
      <Nav />
      <Seo title="All posts" />
      <Featured featured={latestBlog} />
      <h2 className="section-heading">Latest</h2>
      <div className="home-blog-wrapper">
        {posts &&
          posts
            .slice(0, 3)
            .map(post => (
              <BlogCard
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                image={post.frontmatter.image}
              />
            ))}
      </div>
      <h2 className="section-heading">
        <span>Recent</span>
      </h2>
      <div className="home-blog-wrapper">
        {posts &&
          posts
            .slice(0, 3)
            .map(post => (
              <BlogCard
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                image={post.frontmatter.image}
              />
            ))}
      </div>
      <h2 className="section-heading">
        <span>Featured</span>
      </h2>
      <div className="home-blog-wrapper">
        {posts &&
          posts
            .slice(0, 3)
            .map(post => (
              <BlogCard
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                image={post.frontmatter.image}
              />
            ))}
      </div>
      {/* <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
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
