import type { Meta, StoryObj } from 'storybook-solidjs'
import type { Component } from 'solid-js'
import { createEffect, createSignal } from 'solid-js'

import type { SwitchProps } from '../components/atoms/Switch/Switch'
import Switch from '../components/atoms/Switch/Switch'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
const SwitchTemplate: Component<SwitchProps> = (props) => {
  // eslint-disable-next-line solid/reactivity
  const [mark, setMark] = createSignal<PlayerMark>(props.value)

  createEffect(() => {
    setMark(props.value)
  })

  return <Switch value={mark()} onSelect={setMark} />
}

export const WithCrossAsDefaultValue: Story = {
  render: (props) => <SwitchTemplate {...props} />,
  args: { value: 'cross' },
}

export const WithCircleAsDefaultValue: Story = {
  render: (props) => <SwitchTemplate {...props} />,
  args: { value: 'circle' },
}
