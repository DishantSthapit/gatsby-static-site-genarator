import React from "react"

type TProps = {
  title: string;
  date: string;
  image: string;
}

const BlogCard = ({ title, date, image }:TProps) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={image}></img>
      </div>
      <div className="blog-card-data">
        <h5 className="blog-card-heading">{title}</h5>
        <span className="blog-card-date">{date}</span>
        <button className="button">
          <span>Learn More </span>
        </button>
      </div>
    </div>
  )
}

export default BlogCard
