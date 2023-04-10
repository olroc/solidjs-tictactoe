import type { Meta, StoryObj } from 'storybook-solidjs'
import type { Component } from 'solid-js'
import { createEffect, createSignal } from 'solid-js'

import type { SwitchProps } from './Switch'
import Switch from './Switch'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
const SwitchTemplate: Component<SwitchProps> = props => {
  // eslint-disable-next-line solid/reactivity
  const [playerMark, setPlayerMark] = createSignal<PlayerMark>(props.value)

  createEffect(() => {
    setPlayerMark(props.value)
  })

  return <Switch value={playerMark()} onSelect={setPlayerMark} />
}

export const WithCrossAsDefaultValue: Story = {
  render: props => <SwitchTemplate {...props} />,
  args: { value: 'cross' },
}

export const WithCircleAsDefaultValue: Story = {
  render: props => <SwitchTemplate {...props} />,
  args: { value: 'circle' },
}
