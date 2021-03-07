import React from 'react'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Quick start" />
      <h1 className="h1">Quick start</h1>
      <p>Start new project with Gatsby CLI:</p>
      <code className="py-2 px-4 md:py-4 md:px-8 bg-purple-light text-purple-dark rounded-md whitespace-nowrap overflow-x-auto max-w-full">
        gatsby new project-name https://github.com/p1t1ch/gatsby-starter-vadyan
      </code>
    </Layout>
  )
}

export default IndexPage
