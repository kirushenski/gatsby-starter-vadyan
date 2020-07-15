import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <h2
          css={{
            fontSize: 100,
            fontWeight: 200,
            transition: 'font-weight ease 2000ms',
            ':hover': {
              fontWeight: 800,
            },
          }}
        >
          Header
        </h2>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
