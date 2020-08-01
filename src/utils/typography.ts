import { rem } from 'polished'
import theme, { Theme } from '@theme'
import media from '@/utils/media'

// TODO Убрать as после обозначения интерфейса темы

export const typography = (name: keyof Theme['typography']['styles']) => {
  const typographyStyle = theme.typography.styles[name]
  const maxFs = rem(typographyStyle.desktop.fontSize)
  const minFs = typographyStyle.mobile && rem(typographyStyle.mobile.fontSize)

  const [maxVw, minVw] = (theme.typography.breakpoints as any).map(
    (bpName: keyof Theme['breakpoints']) => theme.breakpoints[bpName]
  )

  const fluidStyles = minFs
    ? {
        [media[theme.typography.breakpoints[0]]]: {
          fontSize: `calc(${minFs} + ((100vw - ${rem(minVw)}) / (${
            parseFloat(rem(maxVw)) - parseFloat(rem(minVw))
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

export default typography
