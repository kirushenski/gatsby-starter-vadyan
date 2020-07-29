import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'

const NotFoundPage = ({ location }: PageProps) => {
  return (
    <Layout>
      <Seo />
      <h1>Error 404</h1>
      <p>Path &ldquo;{location.pathname}&rdquo; is not defined</p>
    </Layout>
  )
}

export default NotFoundPage
