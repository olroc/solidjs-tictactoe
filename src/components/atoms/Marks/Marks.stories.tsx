import type { Meta, StoryObj } from 'storybook-solidjs'

import Marks from './Marks'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  title: 'Atoms/Marks',
  component: Marks,
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Marks>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: props => <Marks {...props} />,
  args: {
    size: 'md',
  },
}
