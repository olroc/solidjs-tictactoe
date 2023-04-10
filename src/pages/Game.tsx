import type { Component } from 'solid-js'
import clsx from 'clsx'

import store from '../store/store'
import Button from '../components/atoms/Button/Button'

interface GamePageProps {
  class?: string
}

const GamePage: Component<GamePageProps> = props => {
  const [, setGlobalStore] = store

  return (
    <Button
      class={clsx(props.class, 'relative')}
      type="tertiary"
      onClick={() => {
        setGlobalStore({ appState: 'config' })
      }}
    >
      <img src="/img/icon-restart.52330686.svg" />
    </Button>
  )
}

export default GamePage
