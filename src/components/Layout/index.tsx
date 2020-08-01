import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from 'emotion-theming'
import styled from '@emotion/styled'
import { transitions, size, padding } from 'polished'
import { ReactComponent as GithubIcon } from '@/icons/github.svg'
import media from '@/utils/media'
import typography from '@/utils/typography'
import { Theme, ThemeProps } from '@theme'

const Header = styled.header(({ theme }: ThemeProps) => ({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  gridColumnGap: theme.grid * 4,
  gridRowGap: theme.grid,
  alignItems: 'center',
  padding: theme.grid * 2,
  backgroundColor: theme.colors.purpleDark,
  boxShadow: theme.shadows.basic,
  zIndex: 1,
  [media.sm]: { gridTemplateColumns: 'auto 1fr', gridColumnGap: theme.grid * 2 },
}))

const Avatar = styled.div(({ theme }: ThemeProps) => ({
  ...size(theme.grid * 13),
  borderRadius: '50%',
  backgroundColor: theme.colors.purpleLight,
  [media.sm]: { ...size(theme.grid * 8) },
}))

const Nav = styled.nav(({ theme }: ThemeProps) => ({
  [media.sm]: { gridColumn: 2 },
  'a:not(:last-child)': { marginRight: theme.grid * 2 },
}))

const StyledLink = styled(Link)(({ theme }: ThemeProps) => ({
  ...typography('nav'),
  ...transitions('font-weight', theme.transitions.basic),
  ':hover, &.active': { fontWeight: 800 },
}))

const Main = styled.main(({ theme }: ThemeProps) => ({
  display: 'grid',
  gridAutoFlow: 'row',
  justifyItems: 'center',
  alignContent: 'start',
  gridGap: theme.grid * 3,
  ...padding(theme.grid * 6, theme.grid * 2),
  backgroundColor: theme.colors.purple,
  [media.sm]: { ...padding(theme.grid * 3, null) },
}))

const Footer = styled.footer(({ theme }: ThemeProps) => ({
  backgroundColor: theme.colors.purpleDark,
  ...padding(theme.grid, theme.grid * 2),
  textAlign: 'center',
  boxShadow: theme.shadows.basic,
  fontSize: 0,
}))

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const theme = useTheme<Theme>()

  return (
    <div css={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
      <Header>
        <Avatar />
        <Link to="/" css={typography('title')}>
          Gatsby Starter Vadyan
        </Link>
        <Nav>
          <StyledLink to="/" activeClassName="active">
            Quick start
          </StyledLink>
          <StyledLink to="/showcase/" activeClassName="active">
            Showcase
          </StyledLink>
        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <a href="https://github.com/p1t1ch/gatsby-starter" target="_blank" rel="noopener noreferrer">
          <GithubIcon width={theme.grid * 6} title="Project page on Github" />
        </a>
      </Footer>
    </div>
  )
}

export default Layout
