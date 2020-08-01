import React from 'react'
import styled from '@emotion/styled'
import { padding } from 'polished'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import media from '@/utils/media'
import { ThemeProps } from '@theme'

const Code = styled.code(({ theme }: ThemeProps) => ({
  ...padding(theme.grid * 2, theme.grid * 4),
  backgroundColor: theme.colors.purpleLight,
  color: theme.colors.purpleDark,
  borderRadius: 4,
  maxWidth: '100%',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  '::before': { content: '"$ "' },
  [media.sm]: { ...padding(theme.grid, theme.grid * 2) },
}))

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Quick start" />
      <h1>Quick start</h1>
      <p>Start new project with Gatsby CLI:</p>
      <Code>gatsby new project-name https://github.com/p1t1ch/gatsby-starter</Code>
    </Layout>
  )
}

export default IndexPage
