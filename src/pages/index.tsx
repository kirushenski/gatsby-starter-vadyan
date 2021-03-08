import React from 'react'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Quick start" />
      <h1 className="h1">Quick start</h1>
      <p>Start new project with Gatsby CLI:</p>
      <code className="code">gatsby new project-name https://github.com/p1t1ch/gatsby-starter-vadyan</code>
    </Layout>
  )
}

export default IndexPage
