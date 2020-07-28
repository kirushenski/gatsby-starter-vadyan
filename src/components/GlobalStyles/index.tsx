import React from 'react'
import { Global } from '@emotion/core'
import { buttons, transitions } from 'polished'
import theme from '@/utils/theme'
import Manrope from '@/fonts/Manrope.woff2'

const GlobalStyles = () => {
  return (
    <Global
      styles={[
        {
          '.js-focus-visible :focus:not(.focus-visible)': {
            outline: 'none',
          },
          ':focus': {
            outline: `${theme.focus.size}px solid ${theme.focus.color}`,
            outlineOffset: theme.focus.offset,
          },
          [buttons()]: {
            border: 'none',
            ...transitions(['color', 'background-color'], `${theme.transitionTime}ms ease`),
          },
          a: {
            color: theme.colors.dark,
            ...transitions(['color'], `${theme.transitionTime}ms ease`),
            ':hover': {
              color: theme.colors.brand,
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
