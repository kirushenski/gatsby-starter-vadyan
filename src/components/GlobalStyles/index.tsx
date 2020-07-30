import React from 'react'
import { Global } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { buttons, transitions } from 'polished'
import Manrope from '@/fonts/Manrope.woff2'
import { Theme } from '@theme'

const GlobalStyles = () => {
  const { colors, timings } = useTheme<Theme>()

  return (
    <Global
      styles={[
        {
          '.js-focus-visible :focus:not(.focus-visible)': {
            outline: 'none',
          },
          ':focus': {
            outline: `3px solid ${colors.purple5}`,
            outlineOffset: 2,
          },
          [buttons()]: {
            border: 'none',
            ...transitions(['color', 'background-color'], timings.basic),
          },
          a: {
            textDecoration: 'none',
            color: colors.purple5,
            ...transitions('color', timings.basic),
          },
          svg: {
            fill: 'currentColor',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Manrope',
            src: `url(${Manrope}) format('woff2-variations')`,
            fontDisplay: 'swap',
            fontWeight: '200 800' as any,
          },
        },
      ]}
    />
  )
}

export default GlobalStyles
