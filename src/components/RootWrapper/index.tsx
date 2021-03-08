import React from 'react'
import 'focus-visible'
import '@fontsource/manrope/variable.css'
import '@/styles/global.css'

export interface RootWrapperProps {
  /** Site content */
  children: React.ReactNode
}

/** This component wraps the whole application in App/Test/Storybook environments. Pass all global providers here and add global imports at the top of the file */
const RootWrapper = ({ children }: RootWrapperProps) => {
  return <>{children}</>
}

export default RootWrapper
