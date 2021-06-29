import * as React from "react"

const Nav = () => {
  const navMenu = [
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
      {navMenu && navMenu.map(item => <h4 key={item.name}>{item.name}</h4>)}
    </div>
  )
}

export default Nav
