import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button } from "react-bootstrap"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div className="inner-wrapper">
        <div className="global-header-wrapper">
          <div className="subscribe">Subscribe</div>
          <header className="global-header">{header}</header>
          <Button variant="outline-secondary" className="login">
            Login
          </Button>
        </div>
        <main>{children}</main>
        <footer className="footer">
          <h5>Dishant Sthapit</h5>© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          <div>All Rights Reserved</div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
