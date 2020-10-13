import React from 'react'
import 'focus-visible'
import { Global } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { buttons, transitions, normalize } from 'polished'
import typography from '@/utils/typography'
import { Theme } from '@theme'
import '@/fonts/index.css'

const GlobalStyles = () => {
  const theme = useTheme<Theme>()

  return (
    <Global
      styles={[
        ...normalize(),
        {
          '*': {
            boxSizing: 'border-box',
          },
          body: {
            fontFamily: [theme.typography.family, ...theme.typography.stack].join(', '),
            ...typography('body'),
            backgroundColor: theme.colors.purpleDark,
            color: theme.colors.purpleLight,
          },
          'h1, h2, h3, h4, h5, h6, p, ol, ul, dl, dd': {
            margin: 0,
            padding: 0,
          },
          h1: typography('h1'),
          h2: typography('h2'),
          '.js-focus-visible :focus:not(.focus-visible)': {
            outline: 'none',
          },
          ':focus': {
            outline: `3px solid ${theme.colors.purpleLight}`,
            outlineOffset: 2,
          },
          [buttons()]: {
            border: 'none',
            ...transitions(['color', 'background-color'], theme.transitions.basic),
          },
          a: {
            textDecoration: 'none',
            color: theme.colors.purpleLight,
            ...transitions('color', theme.transitions.basic),
          },
          svg: {
            fill: 'currentColor',
          },
        },
      ]}
    />
  )
}

export default GlobalStyles
