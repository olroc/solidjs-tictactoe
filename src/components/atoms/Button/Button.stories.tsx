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
  args: {
    type: 'primary',
    label: 'NEW GAME (VS CPU)',
  },
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'NEW GAME (VS PLAYER)',
  },
}
