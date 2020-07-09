import React from 'react'
import Seo from '@components/Seo'
import { Link, PageProps } from 'gatsby'

const NotFoundPage = ({ location }: PageProps) => {
  return (
    <>
      <Seo />
      <h1>Error 404</h1>
      <p>Path &ldquo;{location.pathname}&rdquo; is not defined</p>
      <Link to="/">Back to index page</Link>
    </>
  )
}

export default NotFoundPage
