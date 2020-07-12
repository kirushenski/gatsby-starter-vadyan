import React from 'react'
import { Global } from '@emotion/core'
import { ReactComponent as GatsbyIcon } from '@icons/gatsby.svg'
import fontsCSS from '@utils/fontsCSS'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Global styles={fontsCSS} />
      <header>
        <GatsbyIcon title="Gatsby logo" width={240} />
        Header
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
