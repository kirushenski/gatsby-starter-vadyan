import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import Layout from '@components/Layout'
import Seo from '@components/Seo'
import Hello from '@components/Hello'

interface IndexPageData {
  file: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

const IndexPage = ({ data }: PageProps<IndexPageData>) => {
  return (
    <Layout>
      <Seo />
      <h1>Gatsby Starter</h1>
      <Img fixed={data.file.childImageSharp.fixed} alt="React logo" />
      <Hello>World</Hello>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "react.png" }) {
      childImageSharp {
        fixed(width: 800, traceSVG: { color: "#639" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
