import type { Meta, StoryObj } from 'storybook-solidjs'

import Button from './Button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div class="flex items-center justify-center bg-mirage py-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: props => <Button {...props}>NEW GAME (VS PLAYER)</Button>,
  args: {
    type: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
}
