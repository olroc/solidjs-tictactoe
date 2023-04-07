import { Component, createSignal } from 'solid-js'

import Cross from './components/atoms/Cross'
import Circle from './components/atoms/Circle'
import Switch from './components/atoms/Switch'
import Button from './components/atoms/Button'

const App: Component = () => {
  const [playerMark, setPlayerMark] = createSignal<PlayerMark>('circle')

  return (
    <main class="bg-mirage">
      <div class="m-auto flex h-[100vh] max-w-[508px] flex-col items-center justify-center px-[24px] text-center">
        <div class="flex w-auto items-center justify-center">
          <Cross class="mr-2 h-[32px] w-[32px]" />
          <Circle class="h-[32px] w-[32px]" />
        </div>

        <div class="my-10 flex w-full flex-col items-center justify-center rounded-2xl bg-te-papa-green px-[24px] pb-8 pt-6 tracking-wide shadow-[inset_0_-8px_0_rgba(0,0,0,0.3)]">
          <h1 class="text-lg font-bold text-casper">PICK PLAYER 1'S MARK</h1>
          <Switch class="my-6" value={playerMark()} onSelect={setPlayerMark} />
          <p class="text-sm font-medium tracking-wider text-casper opacity-50">
            REMEMBER: X GOES FIRST
          </p>
        </div>

        <Button
          class="mb-7 w-full"
          label="NEW GAME (VS CPU)"
          onClick={() => {}}
        />
        <Button
          class="w-full"
          label="NEW GAME (VS PLAYER)"
          type="secondary"
          onClick={() => {}}
        />
      </div>
    </main>
  )
}

export default App
