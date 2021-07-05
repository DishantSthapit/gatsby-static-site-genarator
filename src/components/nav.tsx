import * as React from "react"
import { Link } from "gatsby"

const Nav = () => {

  const navMenu: { name: string }[] = [
    { name: "Technology" },
    { name: "Design" },
    { name: "Culture" },
    { name: "Covid" },
    { name: "Politics" },
    { name: "Science" },
    { name: "Health" },
    { name: "Style" },
  ]
  return (
    <div className="nav-wrapper">
      {navMenu && navMenu.map(item => <Link to="/work-in-progress" key={item.name}><span>{item.name}</span></Link>)}
    </div>
  )
}

export default Nav
