import { Component, createEffect, createSignal } from 'solid-js'

import Cross from './components/atoms/Cross'
import Circle from './components/atoms/Circle'
import Switch from './components/atoms/Switch/Switch'
import Button from './components/atoms/Button/Button'
import Modal from './components/atoms/Modal/Modal'

const App: Component = () => {
  const [playerMark, setPlayerMark] = createSignal<PlayerMark>('circle')
  const [isModalOpen, setModalOpen] = createSignal(false)

  // Allows the cancel button to be focused when entering the modal for accessibility purpose
  let cancelButtonRef: HTMLButtonElement
  createEffect(() => isModalOpen() && cancelButtonRef.focus())

  return (
    <main class="bg-mirage" aria-disabled={isModalOpen()}>
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
          isFocusable={!isModalOpen()}
        />
        <Button
          class="w-full"
          label="NEW GAME (VS PLAYER)"
          type="secondary"
          onClick={() => setModalOpen(true)}
          isFocusable={!isModalOpen()}
        />
      </div>

      <Modal isOpen={isModalOpen()} closeModal={() => setModalOpen(false)}>
        <div class="flex flex-col text-2xl font-bold tracking-wider text-casper">
          <div class="flex items-end">
            <h3>SEARCHING FOR OPPONENT </h3>
            <img
              class="ml-1 inline translate-y-[-6px]"
              src="data:image/gif;base64,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"
            />
          </div>

          <div class="mt-8 flex items-center justify-center">
            <Button
              ref={cancelButtonRef!}
              label="CANCEL"
              type="tertiary"
              onClick={() => setModalOpen(false)}
            />
          </div>
        </div>
      </Modal>
    </main>
  )
}

export default App
