import React from "react"
import classNames from "classnames"

const FadeIn = ({ children }) => {
  let delay = 100

  const [fadeState, setFadeState] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => {
      setFadeState(true)
    }, delay)
  }, [fadeState])

  return (
    <div className={classNames("fade-state", { "fade-ready": fadeState })}>
      {children}
    </div>
  )
}

export default FadeIn
