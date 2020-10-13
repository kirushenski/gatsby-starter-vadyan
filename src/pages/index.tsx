import React from 'react'
import styled from '@emotion/styled'
import { padding } from 'polished'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import media from '@/utils/media'
import { ThemeProps } from '@theme'

const Code = styled.code(({ theme }: ThemeProps) => ({
  fontFamily: theme.typography.stacks.monospace.join(', '),
  ...padding('1rem', '2rem'),
  backgroundColor: theme.colors.purpleLight,
  color: theme.colors.purpleDark,
  borderRadius: 4,
  maxWidth: '100%',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  '::before': { content: '"$ "' },
  [media.sm]: { ...padding('0.5rem', '1rem') },
}))

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Quick start" />
      <h1>Quick start</h1>
      <p>Start new project with Gatsby CLI:</p>
      <Code>gatsby new project-name https://github.com/p1t1ch/gatsby-starter-vadyan</Code>
    </Layout>
  )
}

export default IndexPage
