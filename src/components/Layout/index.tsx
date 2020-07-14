import React from 'react'
import { Global } from '@emotion/core'
import { fontsCSS } from '@/utils/typography'

// TODO Think about including global styles in gatsby-browser instead

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Global styles={fontsCSS} />
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
