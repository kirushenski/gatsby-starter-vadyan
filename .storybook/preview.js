import React from 'react'
import { addParameters, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import RootWrapper from '@/components/RootWrapper'
import '../test/loadershim'
import theme from '@theme'

addParameters({
  actions: { argTypesRegex: '^on.*' },
  grid: { cellSize: theme.step },
  viewport: { viewports: INITIAL_VIEWPORTS },
  backgrounds: {
    values: Object.entries(theme.colors).map(([name, value]) => ({ name, value })),
  },
})

addDecorator(storyFn => <RootWrapper>{storyFn()}</RootWrapper>)

// Log action instead of actual navigation for Link
window.___navigate = pathname => {
  action('Link')(pathname)
}
