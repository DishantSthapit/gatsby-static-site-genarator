import * as React from "react"
import { PageProps, Link, graphql, useStaticQuery } from "gatsby"
import BlogCard from "../components/blogcard"

type SataicType = {
  allMarkdownRemark: {
    nodes: {
      excerpt: HTMLElement | null;
      fields: {
        slug: string;
      }
      frontmatter: {
        date: string;
        title: string;
        layout: string;
        image: string;
      }
    }[]
  },
}

type TProps = {
  heading: string;
  subheading: string
}

const PostSection = ({ heading, subheading }: TProps) => {

  const { allMarkdownRemark } = useStaticQuery<SataicType>(
    graphql`
      query {
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
  )

  const posts = allMarkdownRemark.nodes

  return (
    <div>
      <div className="section-wrapper">
        <h2 className="section-heading">{heading}</h2>
        <div className="section-subheading">
          {subheading}
        </div>
        <div className="home-blog-wrapper">
          {posts &&
            posts
              .slice(0, 3)
              .map(post => (
                <BlogCard
                  key={post.frontmatter.title}
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  image={post.frontmatter.image}
                  slug={post.fields.slug}
                />
              ))}
        </div>
      </div>
    </div>
  )
}

export default PostSection
