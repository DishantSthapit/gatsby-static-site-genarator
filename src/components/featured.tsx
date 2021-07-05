import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import FadeIn from "../components/fadein"
import BackgroundImage from "gatsby-background-image"


type TProps = {
  featured: {
    frontmatter: {
      title: string;
      date: string;
    },
    fields: {
      slug: string
    }
  }
}

const Featured = ({
  featured: {
    frontmatter: { title, date },
    fields: { slug }
  },
}: TProps) => {
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
          <Link to={slug}>Continue Reading..</Link>
        </div>
      </FadeIn>
    </BackgroundImage>
  )
}

export default Featured
