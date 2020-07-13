import React from 'react'
import { addParameters, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Global } from '@emotion/core'
import fontsCSS from '@/utils/fontsCSS'

addParameters({
  actions: { argTypesRegex: '^on.*' },
  viewport: { viewports: INITIAL_VIEWPORTS },
  backgrounds: {
    values: [
      { name: 'black', value: '#000' },
      { name: 'purple', value: '#639' },
    ],
  },
})

addDecorator(storyFn => (
  <>
    <Global styles={fontsCSS} />
    {storyFn()}
  </>
))

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
global.__PATH_PREFIX__ = ''
global.__BASE_PATH__ = ''
window.___navigate = pathname => {
  action('Link')(pathname)
}
