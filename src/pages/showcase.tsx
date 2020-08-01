import React from 'react'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import StaticImage from '@/components/StaticImage'
import SelectCharacter from '@/components/SelectCharacter'

const ShowcasePage = () => {
  return (
    <Layout>
      <Seo title="Showcase" />
      <h1>Showcase</h1>
      <h2>Static data with Gatsby Image</h2>
      <StaticImage />
      <h2>Dynamic data with Apollo Client</h2>
      <SelectCharacter />
    </Layout>
  )
}

export default ShowcasePage
