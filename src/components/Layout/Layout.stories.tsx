import React from 'react'
import { Story } from '@storybook/react'
import Layout, { LayoutProps } from '.'

export default {
  title: 'Layout',
  component: Layout,
}

const Template: Story<LayoutProps> = args => <Layout {...args} />

export const Primary = Template.bind({})
Primary.args = { children: 'Page content' }
