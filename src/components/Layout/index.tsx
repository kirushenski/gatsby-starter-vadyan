import React from 'react'
import { ReactComponent as GatsbyIcon } from '@icons/gatsby.svg'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
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
