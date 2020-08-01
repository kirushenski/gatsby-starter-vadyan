import React from 'react'
import styled from '@emotion/styled'
import { graphql, PageProps } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import SelectCharacter from '@/components/SelectCharacter'
import { ThemeProps } from '@theme'

const ImageWrapper = styled.div(({ theme }: ThemeProps) => ({
  padding: `${theme.grid}px ${theme.grid * 3}px`,
  border: `4px solid ${theme.colors.purple90}`,
  borderRadius: 8,
  boxShadow: theme.shadows.basic,
  backgroundColor: theme.colors.purple5,
}))

interface ShowcasePageData {
  file: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

const ShowcasePage = ({ data }: PageProps<ShowcasePageData>) => {
  return (
    <Layout>
      <Seo />
      <h1>Showcase</h1>
      <h2>Static data with Gatsby Image</h2>
      <ImageWrapper>
        <Img fixed={data.file.childImageSharp.fixed} alt="Gatsby image showcase" />
      </ImageWrapper>
      <h2>Dynamic data with Apollo Client</h2>
      <SelectCharacter />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "gatsby.png" }) {
      childImageSharp {
        fixed(width: 400, traceSVG: { color: "#362066" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`

export default ShowcasePage
