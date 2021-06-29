import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FadeIn from "../components/fadein"
import BackgroundImage from "gatsby-background-image"

const Featured = ({
  featured: {
    frontmatter: { title, date },
  },
}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background.jpeg" }) {
        childImageSharp {
          fluid(quality: 0, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imgData = data.file.childImageSharp.fluid
  return (
    <BackgroundImage Tag="section" className="featured-blog" fluid={imgData}>
      <FadeIn>
        <div className="featured-blog-inner">
          <h3>{title}</h3>
          <div>{date}</div>
          <a>Continue Reading..</a>
        </div>
      </FadeIn>
    </BackgroundImage>
  )
}

export default Featured
