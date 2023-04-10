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
      label="Back!"
      onClick={() => {
        setGlobalStore({ appState: 'config' })
      }}
    />
  )
}

export default GamePage
