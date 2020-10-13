import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from 'emotion-theming'
import styled from '@emotion/styled'
import { transitions, size, padding } from 'polished'
import media from '@/utils/media'
import { Theme, ThemeProps } from '@theme'
import { ReactComponent as LogoIcon } from '@/icons/logo.svg'
import { ReactComponent as GithubIcon } from '@/icons/github.svg'

const Header = styled.header(({ theme }: ThemeProps) => ({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  gridColumnGap: '2rem',
  gridRowGap: '0.5rem',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: theme.colors.purpleDark,
  boxShadow: theme.shadows.basic,
  zIndex: 1,
  [media.sm]: { gridTemplateColumns: 'auto 1fr', gridColumnGap: '1rem' },
}))

const Nav = styled.nav(() => ({
  [media.sm]: { gridColumn: 2 },
  'a:not(:last-child)': { marginRight: '1rem' },
}))

const StyledLink = styled(Link)(({ theme }: ThemeProps) => ({
  ...theme.typography.styles.nav,
  ...transitions(['font-weight'], theme.transitions.long),
  ':hover, &.active': {
    fontWeight: 800,
    ...transitions(['font-weight'], theme.transitions.short),
  },
}))

const Main = styled.main(({ theme }: ThemeProps) => ({
  display: 'grid',
  gridAutoFlow: 'row',
  justifyItems: 'center',
  alignContent: 'start',
  gridGap: '1.5rem',
  ...padding('3rem', '1rem'),
  backgroundColor: theme.colors.purple,
  [media.sm]: { ...padding('1.5rem', null) },
}))

const Footer = styled.footer(({ theme }: ThemeProps) => ({
  backgroundColor: theme.colors.purpleDark,
  ...padding('0.5rem', '1rem'),
  textAlign: 'center',
  boxShadow: theme.shadows.basic,
  fontSize: 0,
}))

interface LayoutProps {
  /** Page content */
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const theme = useTheme<Theme>()

  return (
    <div css={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
      <Header>
        <LogoIcon
          css={{
            ...size('6.5rem'),
            [media.sm]: { ...size('4rem') },
          }}
        />
        <Link to="/" css={theme.typography.styles.title}>
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
          <GithubIcon width={48} title="Project page on Github" />
        </a>
      </Footer>
    </div>
  )
}

export default Layout
