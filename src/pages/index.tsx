import React from 'react'
import styled from '@emotion/styled'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import media from '@/utils/media'
import { ThemeProps } from '@theme'

const Code = styled.code(({ theme }: ThemeProps) => ({
  padding: `${theme.grid * 2}px ${theme.grid * 4}px`,
  backgroundColor: theme.colors.purple5,
  color: theme.colors.purple90,
  borderRadius: 4,
  maxWidth: '100%',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  '::before': { content: '"$ "' },
  [media.md]: { padding: `${theme.grid}px ${theme.grid * 2}px` },
}))

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <h1>Quick start</h1>
      <p>Start new project with Gatsby CLI:</p>
      <Code>gatsby new project-name https://github.com/p1t1ch/gatsby-starter</Code>
    </Layout>
  )
}

export default IndexPage
