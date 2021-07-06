import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Wip = ({ location }) => (
  <Layout title="Coming Soon" location={location}>
    <Seo title="Coming Soon" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Wip
