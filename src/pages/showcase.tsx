import React from 'react'
import styled from '@emotion/styled'
import { graphql, PageProps } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import { padding } from 'polished'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import SelectCharacter from '@/components/SelectCharacter'
import { ThemeProps } from '@theme'

const ImageWrapper = styled.div(({ theme }: ThemeProps) => ({
  width: '100%',
  maxWidth: theme.grid * 50,
  ...padding(theme.grid, theme.grid * 3),
  border: `4px solid ${theme.colors.purpleDark}`,
  borderRadius: 8,
  boxShadow: theme.shadows.basic,
  backgroundColor: theme.colors.purpleLight,
}))

interface ShowcasePageData {
  file: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const ShowcasePage = ({ data }: PageProps<ShowcasePageData>) => {
  return (
    <Layout>
      <Seo title="Showcase" />
      <h1>Showcase</h1>
      <h2>Static data with Gatsby Image</h2>
      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} alt="Gatsby image showcase" />
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
        fluid(maxWidth: 400, traceSVG: { color: "#362066" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default ShowcasePage
