import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from 'emotion-theming'
import { ReactComponent as GithubIcon } from '@/icons/github.svg'
import { Theme } from '../../../config/theme'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { colors, shadows, time } = useTheme<Theme>()

  const linkCSS = {
    fontSize: 24,
    fontWeight: 200,
    transition: `font-weight ease ${time}ms`,
    ':hover': {
      fontWeight: 800,
    },
  }

  const activeStyle = {
    fontWeight: 800,
  }

  return (
    <div css={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
      <header
        css={{
          display: 'flex',
          alignItems: 'center',
          padding: 16,
          backgroundColor: colors.purple90,
          boxShadow: shadows.basic,
          zIndex: 1,
        }}
      >
        <div css={{ width: 100, height: 100, borderRadius: '50%', marginRight: 32, backgroundColor: colors.purple5 }} />
        <h1 css={{ flexGrow: 1, fontSize: 40, fontWeight: 700, marginRight: 32, marginBottom: 0 }}>
          Gatsby Starter Vadyan
        </h1>
        <nav>
          <Link to="/" css={{ ...linkCSS, marginRight: 16 }} activeStyle={activeStyle}>
            Quick start
          </Link>
          <Link to="/showcase/" css={linkCSS} activeStyle={activeStyle}>
            Showcase
          </Link>
        </nav>
      </header>
      <main
        css={{
          display: 'grid',
          gridAutoFlow: 'row',
          justifyItems: 'center',
          alignContent: 'start',
          gridGap: 24,
          padding: '48px 16px',
          backgroundColor: colors.purple60,
        }}
      >
        {children}
      </main>
      <footer
        css={{
          backgroundColor: colors.purple90,
          padding: '8px 16px',
          textAlign: 'center',
          boxShadow: shadows.basic,
          fontSize: 0,
          zIndex: 1,
        }}
      >
        <a href="https://github.com/p1t1ch/gatsby-starter" target="_blank" rel="noopener noreferrer">
          <GithubIcon width={48} title="Project page on Github" />
        </a>
      </footer>
    </div>
  )
}

export default Layout
