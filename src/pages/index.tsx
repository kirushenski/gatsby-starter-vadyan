import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { useQuery, gql } from '@apollo/client'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import Hello from '@/components/Hello'

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

interface IndexPageData {
  file: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

const IndexPage = ({ data }: PageProps<IndexPageData>) => {
  const { loading, error, data: queryData } = useQuery(EXCHANGE_RATES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <Layout>
      <Seo />
      <h1>Gatsby Starter</h1>
      <Img fixed={data.file.childImageSharp.fixed} alt="React logo" />
      <Hello>World</Hello>
      {queryData.rates.map(({ currency, rate }: any) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ))}
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
