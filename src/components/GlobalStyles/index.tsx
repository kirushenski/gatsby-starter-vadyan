import React from 'react'
import { Global } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { buttons, transitions } from 'polished'
import Manrope from '@/fonts/Manrope.woff2'

const GlobalStyles = () => {
  const { colors, time } = useTheme()

  return (
    <Global
      styles={[
        {
          '.js-focus-visible :focus:not(.focus-visible)': {
            outline: 'none',
          },
          ':focus': {
            outline: `3px solid ${colors.black}`,
            outlineOffset: 2,
          },
          [buttons()]: {
            border: 'none',
            ...transitions(['color', 'background-color'], `${time}ms ease`),
          },
          a: {
            color: colors.dark,
            ...transitions(['color'], `${time}ms ease`),
            ':hover': {
              color: colors.brand,
            },
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
