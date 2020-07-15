import React from 'react'
import { addParameters, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import Wrapper from '@/components/Wrapper'
import typography from '@/utils/typography'
import theme from '@/utils/theme'

addParameters({
  actions: { argTypesRegex: '^on.*' },
  grid: { cellSize: theme.step },
  viewport: { viewports: INITIAL_VIEWPORTS },
  backgrounds: {
    values: Object.entries(theme.colors).map(([name, value]) => ({ name, value })),
  },
})

addDecorator(storyFn => <Wrapper>{storyFn()}</Wrapper>)

typography.injectStyles()

// Override some globals so Gatsby Link doesn't crash Storybook
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
global.__PATH_PREFIX__ = ''
global.__BASE_PATH__ = ''
// Log action instead of actual navigation for Link
window.___navigate = pathname => {
  action('Link')(pathname)
}
