import React from 'react'
import { useTheme } from 'emotion-theming'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import media from '@/utils/media'
import { Theme } from '@theme'

const IndexPage = () => {
  const { colors } = useTheme<Theme>()

  return (
    <Layout>
      <Seo />
      <h1>Quick start</h1>
      <p>Start new project with Gatsby CLI:</p>
      <code
        css={{
          padding: '16px 32px',
          backgroundColor: colors.purple5,
          color: colors.purple90,
          borderRadius: 4,
          maxWidth: '100%',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          '::before': { content: '"$ "' },
          [media.md]: { padding: '8px 16px' },
        }}
      >
        gatsby new project-name https://github.com/p1t1ch/gatsby-starter
      </code>
    </Layout>
  )
}

export default IndexPage
