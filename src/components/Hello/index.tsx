import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
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
        css={{ backgroundColor: '#639', color: '#fff' }}
      >
        Hello, {children}! Click me
      </button>
      <Link to="/another/">Link</Link>
      <p>You clicked: {count} times</p>
    </div>
  )
}

export default Hello
