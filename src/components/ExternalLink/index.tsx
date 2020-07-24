import React from 'react'
import { useTheme } from 'emotion-theming'
import { ReactComponent as NewWindowIcon } from '@/icons/new_window.svg'

interface ExternalLinkProps {
  to: string
  children: React.ReactNode
}

const ExternalLink = ({ to, children }: ExternalLinkProps) => {
  const { step } = useTheme()

  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {children}
      <NewWindowIcon title="Open in new window" width={step * 2} css={{ marginLeft: 4, verticalAlign: 'middle' }} />
    </a>
  )
}

export default ExternalLink
