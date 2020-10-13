import React from 'react'
import 'focus-visible'
import { Global } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { buttons, transitions, normalize } from 'polished'
import { Theme } from '@theme'
import '@/fonts/index.css'

const GlobalStyles = () => {
  const theme = useTheme<Theme>()

  return (
    <Global
      styles={[
        ...normalize(),
        {
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          '::selection': {
            backgroundColor: theme.colors.purpleDark,
            color: theme.colors.purpleLight,
          },
          html: {
            fontFamily: [theme.typography.family, ...theme.typography.stacks.sansSerif].join(', '),
            scrollBehavior: 'smooth',
            '@media (prefers-reduced-motion)': {
              scrollBehavior: 'auto',
            },
          },
          body: {
            ...theme.typography.styles.body,
            backgroundColor: theme.colors.purpleDark,
            color: theme.colors.purpleLight,
          },
          'h1, h2, h3, h4, h5, h6, p, ol, ul, dl, dd, hr, blockquote, figure': {
            margin: 0,
            padding: 0,
          },
          h1: theme.typography.styles.h1,
          h2: theme.typography.styles.h2,
          '.js-focus-visible :focus:not(.focus-visible)': {
            outline: 'none',
          },
          ':focus': {
            outline: `3px solid ${theme.colors.purpleLight}`,
            outlineOffset: 2,
          },
          [buttons()]: {
            border: 'none',
            padding: 0,
            background: 'none',
            cursor: 'pointer',
            color: theme.colors.purpleLight,
            ...transitions(['color', 'background-color'], theme.transitions.long),
            ':hover': {
              ...transitions(['color', 'background-color'], theme.transitions.short),
            },
          },
          a: {
            textDecoration: 'none',
            color: theme.colors.purpleLight,
            ...transitions(['color'], theme.transitions.long),
            ':hover': {
              ...transitions(['color'], theme.transitions.short),
            },
          },
          strong: {
            fontWeight: 700,
          },
          svg: {
            fill: 'currentColor',
          },
          li: {
            listStyle: 'none',
          },
        },
      ]}
    />
  )
}

export default GlobalStyles
