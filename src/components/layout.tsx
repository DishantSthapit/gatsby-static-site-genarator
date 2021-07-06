import * as React from "react"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"

export interface HLocation<S = unknown> {
  pathname: string;
  search: string;
  state: S;
  hash: string;
  key?: string;
}
export type WindowLocation<S = unknown> = Window['location'] & HLocation<S>;

type TProps = {
  title: string;
  isHomePage?: boolean;
  children: React.ReactNode;
  location: WindowLocation<WindowLocation["state"]>;
}

const Layout = ({ children, location, title }: TProps) => {

  let header = (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  )


  return (
    <div className="global-wrapper" >
      <div className="inner-wrapper">
        <div className="global-header-wrapper">
          <Link to="https://github.com/DishantSthapit"><div className="subscribe">Subscribe</div></Link>
          <header className="global-header">{header}</header>
          <Link target="_blank" to='https://inspiring-easley-acf800.netlify.app/admin/#/'>
            <Button variant="outline-secondary" className="login">
              Login
            </Button>
          </Link>

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
