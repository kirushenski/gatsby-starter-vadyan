import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import { padding } from 'polished'
import { ThemeProps } from '@theme'

const ImageWrapper = styled.div(({ theme }: ThemeProps) => ({
  width: '100%',
  maxWidth: '25rem',
  ...padding('0.5rem', '1.5rem'),
  border: `4px solid ${theme.colors.purpleDark}`,
  borderRadius: 8,
  boxShadow: theme.shadows.basic,
  backgroundColor: theme.colors.purpleLight,
}))

interface StaticImageQuery {
  file: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const StaticImage = () => {
  const data: StaticImageQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gatsby.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, traceSVG: { color: "#362066" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <ImageWrapper>
      <Img fluid={data.file.childImageSharp.fluid} alt="Gatsby image showcase" />
    </ImageWrapper>
  )
}

export default StaticImage
