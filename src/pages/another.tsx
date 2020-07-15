import React from 'react'
import { Link } from 'gatsby'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'

const AnotherPage = () => {
  return (
    <Layout>
      <Seo />
      <h1>Another page</h1>
      <Link to="/">Back to index page</Link>
    </Layout>
  )
}

export default AnotherPage
