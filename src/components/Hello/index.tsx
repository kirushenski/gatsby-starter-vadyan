import React, { useState } from 'react'
import { useTheme } from 'emotion-theming'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import { rem } from 'polished'
import { ReactComponent as GatsbyIcon } from '@/icons/gatsby.svg'

interface HelloQuery {
  file: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
}

interface HelloProps {
  children: React.ReactNode
  defaultValue?: number
  onValueChange?: (newValue: number) => void
}

const Hello = ({ children, onValueChange, defaultValue = 0 }: HelloProps) => {
  const { colors } = useTheme()

  const data: HelloQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fixed(width: 200, traceSVG: { color: "#639" }) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const [count, setCount] = useState(defaultValue)

  return (
    <div>
      <GatsbyIcon width={120} />
      <Img fixed={data.file.childImageSharp.fixed} alt="React logo" />
      <button
        type="button"
        onClick={() => {
          const newValue = count + 1
          setCount(newValue)
          if (onValueChange) onValueChange(newValue)
        }}
        css={{
          padding: 8,
          backgroundColor: colors.brand,
          color: colors.white,
          borderRadius: 4,
          ':hover': { backgroundColor: colors.brandHover },
        }}
      >
        Hello, {children}! Click me
      </button>
      <Link to="/another/" css={{ fontSize: rem(24) }}>
        Go to another page
      </Link>
      <p>You clicked: {count} times</p>
    </div>
  )
}

export default Hello
