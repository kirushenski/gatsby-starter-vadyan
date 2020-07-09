import React from 'react'
import Layout from '@components/Layout'
import Seo from '@components/Seo'
import Hello from '@components/Hello'

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <h1>Gatsby Starter</h1>
      <Hello>World</Hello>
    </Layout>
  )
}

export default IndexPage
