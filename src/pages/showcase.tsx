import React from 'react'
import { useTheme } from 'emotion-theming'
import { graphql, PageProps } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import { Theme } from '../../config/theme'

interface ShowcasePageData {
  file: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

const ShowcasePage = ({ data }: PageProps<ShowcasePageData>) => {
  const { colors, shadows } = useTheme<Theme>()

  return (
    <Layout>
      <Seo />
      <h1>Showcase</h1>
      <div
        css={{
          display: 'inline-block',
          padding: '8px 24px',
          border: `4px solid ${colors.purple90}`,
          borderRadius: 8,
          boxShadow: shadows.basic,
          backgroundColor: colors.purple5,
        }}
      >
        <Img fixed={data.file.childImageSharp.fixed} alt="Gatsby image showcase" />
      </div>
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
