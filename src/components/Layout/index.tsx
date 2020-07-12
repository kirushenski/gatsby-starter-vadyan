import React from 'react'
import gatsbyIcon from '@icons/gatsby.svg'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <img src={gatsbyIcon} alt="" />
        Header
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
