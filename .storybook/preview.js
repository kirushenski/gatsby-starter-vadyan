import React from 'react'
import { action } from '@storybook/addon-actions'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import RootWrapper from '@/components/RootWrapper'
import '../test/loadershim'
import theme from '@theme'

export const parameters = {
  // Automatically create action args for all props that start with "on"
  actions: { argTypesRegex: '^on.*' },
  // Use list of viewports provided by addon
  viewport: { viewports: INITIAL_VIEWPORTS },
  // Use minimal step of 8 px as 0.5rem by default
  grid: { cellSize: 8 },
  // Use backgrounds from colors field of project theme
  backgrounds: {
    values: Object.entries(theme.colors).map(([name, value]) => ({ name, value })),
  },
}

// Wrap all stories in same wrapper as main app and tests
const RootWrapperDecorator = storyFn => <RootWrapper>{storyFn()}</RootWrapper>
export const decorators = [RootWrapperDecorator]

// Log action instead of actual navigation for Link
window.___navigate = pathname => {
  action('Link')(pathname)
}
