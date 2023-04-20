import type { Meta, StoryObj } from 'storybook-solidjs'
import type { Component } from 'solid-js'

import type { BlocProps } from './Bloc'
import Bloc from './Bloc'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  title: 'Atoms/Bloc',
  component: Bloc,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div class="flex items-center justify-center bg-mirage py-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Bloc>

export default meta
type Story = StoryObj<typeof meta>

const StyledBloc: Component<BlocProps> = props => {
  return (
    <Bloc
      {...props}
      class="flex items-center justify-center px-3 pb-4 pt-2 text-white"
    >
      Some text content
    </Bloc>
  )
}

export const Primary: Story = {
  render: props => <StyledBloc {...props}>Some text content</StyledBloc>,
  args: { type: 'primary' },
}

export const Secondary: Story = {
  render: props => <StyledBloc {...props}>Some text content</StyledBloc>,
  args: { type: 'secondary' },
}

export const Tertiary: Story = {
  render: props => <StyledBloc {...props}>Some text content</StyledBloc>,
  args: { type: 'tertiary' },
}

export const WithNoType: Story = {
  render: props => <StyledBloc {...props}>Some text content</StyledBloc>,
  args: {},
}

export const WithoutShadow: Story = {
  render: props => (
    <Bloc
      {...props}
      class="flex items-center justify-center px-3 pb-3 pt-2 text-white"
    >
      Some text content
    </Bloc>
  ),
  args: { withShadow: false },
}
