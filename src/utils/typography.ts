import Typography from 'typography'
import { rem } from 'polished'
import theme, { Theme } from '@theme'
import media from '@/utils/media'

// TODO Move values to theme

const typographyObject = new Typography({
  baseFontSize: `${theme.typography.base}px`,
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerFontFamily: ['Manrope', ...theme.typography.stack],
  bodyFontFamily: ['Manrope', ...theme.typography.stack],
  headerColor: theme.colors.purple5,
  bodyColor: theme.colors.purple5,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  blockMarginBottom: 0,
  includeNormalize: true,
})

// TODO Убрать as после обозначения интерфейса темы

export const typography = (name: keyof Theme['typography']['styles']) => {
  const typographyStyle = theme.typography.styles[name]
  const maxFs = rem(typographyStyle.desktop.fontSize, theme.typography.base)
  const minFs = typographyStyle.mobile && rem(typographyStyle.mobile.fontSize, theme.typography.base)

  const [maxVw, minVw] = (theme.typography.breakpoints as any).map(
    (bpName: keyof Theme['breakpoints']) => theme.breakpoints[bpName]
  )

  const fluidStyles = minFs
    ? {
        [media[theme.typography.breakpoints[0]]]: {
          fontSize: `calc(${minFs} + ((100vw - ${rem(minVw, theme.typography.base)}) / (${
            parseFloat(rem(maxVw, theme.typography.base)) - parseFloat(rem(minVw, theme.typography.base))
          })) * (${parseFloat(maxFs) - parseFloat(minFs)}))`,
        },
      }
    : {}

  return {
    ...typographyStyle.desktop,
    fontSize: maxFs,
    ...fluidStyles,
    [media[theme.typography.breakpoints[1]]]: {
      ...typographyStyle.mobile,
      fontSize: minFs,
    },
  }
}

export const { scale, rhythm } = typographyObject
export default typographyObject
