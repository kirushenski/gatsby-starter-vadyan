import React from 'react'
import 'focus-visible'
import '@fontsource/manrope/variable.css'
import '@/styles/global.css'

interface RootWrapperProps {
  /** Site content */
  children: React.ReactNode
}

const RootWrapper = ({ children }: RootWrapperProps) => {
  return <>{children}</>
}

export default RootWrapper
