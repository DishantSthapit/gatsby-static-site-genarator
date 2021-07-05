import React from "react"
import { Link } from "gatsby"

type TProps = {
  title: string;
  date: string;
  image: string;
  slug: string;
}

const BlogCard = ({ title, date, image, slug }: TProps) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={image}></img>
      </div>
      <div className="blog-card-data">
        <h5 className="blog-card-heading">{title}</h5>
        <span className="blog-card-date">{date}</span>
        <Link to={slug}>
          <button className="button">
            <span>Learn More </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
