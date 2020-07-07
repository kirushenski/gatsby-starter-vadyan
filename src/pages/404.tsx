import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Specified path is not defined</p>
      <Link to="/">Back to index page</Link>
    </div>
  )
}

export default NotFoundPage
