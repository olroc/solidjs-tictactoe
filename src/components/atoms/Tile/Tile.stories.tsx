import type { Meta, StoryObj } from 'storybook-solidjs'
import type { Component } from 'solid-js'

import type { TileProps } from './Tile'
import Tile from './Tile'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  title: 'Atoms/Tile',
  component: Tile,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div class="flex items-center justify-center bg-mirage py-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tile>

export default meta
type Story = StoryObj<typeof meta>

const StyledTile: Component<TileProps> = props => {
  return (
    <Tile
      {...props}
      class="flex items-center justify-center px-3 pb-4 pt-2 text-white"
    >
      Some text content
    </Tile>
  )
}

export const Primary: Story = {
  render: props => <StyledTile {...props}>Some text content</StyledTile>,
  args: { type: 'primary' },
}

export const Secondary: Story = {
  render: props => <StyledTile {...props}>Some text content</StyledTile>,
  args: { type: 'secondary' },
}

export const Tertiary: Story = {
  render: props => <StyledTile {...props}>Some text content</StyledTile>,
  args: { type: 'tertiary' },
}

export const WithNoType: Story = {
  render: props => <StyledTile {...props}>Some text content</StyledTile>,
  args: {},
}

export const WithoutShadow: Story = {
  render: props => (
    <Tile
      {...props}
      class="flex items-center justify-center px-3 pb-3 pt-2 text-white"
    >
      Some text content
    </Tile>
  ),
  args: { withShadow: false },
}
