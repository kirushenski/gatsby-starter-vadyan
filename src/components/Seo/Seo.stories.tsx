import React from 'react'
import { Story } from '@storybook/react'
import Seo, { SeoProps } from '.'

export default {
  title: 'Seo',
  component: Seo,
}

const Template: Story<SeoProps> = args => <Seo {...args} />

export const Primary = Template.bind({})

export const WithProps = Template.bind({})
WithProps.args = {
  title: 'Custom title',
  description: 'Custom description',
}
