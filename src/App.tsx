import { Component, createSignal } from 'solid-js'

import Cross from './components/atoms/Cross'
import Circle from './components/atoms/Circle'
import Switch from './components/atoms/Switch'

type PlayerMark = 'circle' | 'cross'

const App: Component = () => {
  const [playerMark, setPlayerMark] = createSignal<PlayerMark>('circle')

  return (
    <main class="flex h-[100vh] max-w-7xl flex-col items-center justify-center bg-mirage">
      <div class="flex w-full items-center justify-center">
        <Cross class="mr-2 h-[32px] w-[32px]" />
        <Circle class="h-[32px] w-[32px]" />
      </div>

      <div class="my-10 flex flex-col items-center justify-center rounded-2xl bg-te-papa-green p-7 tracking-wide shadow-[inset_0_-8px_0_rgba(0,0,0,0.3)]">
        <h1 class="text-lg font-bold text-casper">PICK PLAYER 1'S MARK</h1>
        <Switch class="my-6" value={playerMark()} onSelect={setPlayerMark} />
        <p class="text-sm font-medium tracking-wide text-casper opacity-50">
          REMEMBER: X GOES FIRST
        </p>
      </div>
    </main>
  )
}

export default App
