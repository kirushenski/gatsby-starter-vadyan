import React from 'react'
import { Link, PageProps } from 'gatsby'
import Layout from '@components/Layout'
import Seo from '@components/Seo'

const NotFoundPage = ({ location }: PageProps) => {
  return (
    <Layout>
      <Seo />
      <h1>Error 404</h1>
      <p>Path &ldquo;{location.pathname}&rdquo; is not defined</p>
      <Link to="/">Back to index page</Link>
    </Layout>
  )
}

export default NotFoundPage
