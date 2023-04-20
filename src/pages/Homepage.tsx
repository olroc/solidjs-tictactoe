import type { Component } from 'solid-js'
import { createEffect, createSignal } from 'solid-js'

import Switch from '../components/atoms/Switch/Switch'
import Button from '../components/atoms/Button/Button'
import Modal from '../components/atoms/Modal/Modal'
import { useI18n } from '../i18n/context'
import store, { createNewGrid } from '../store/store'
import Marks from '../components/atoms/Marks/Marks'
import Bloc from '../components/atoms/Bloc/Bloc'

const HomePage: Component = () => {
  const [globalStore, setGlobalStore] = store

  const [isModalOpen, setModalOpen] = createSignal(false)
  const t = (key: string): string => useI18n()().t(key)

  // Allows the cancel button to be focused when entering the modal
  let cancelButtonRef: HTMLButtonElement
  // Allows the PVP button to be focused when exiting the modal
  let pvpButtonRef: HTMLButtonElement

  // Ensures the cancel button in the modal takes the focus when opened
  createEffect(() => {
    if (isModalOpen()) {
      cancelButtonRef.focus()
    }
  })

  return (
    <>
      <div
        aria-disabled={isModalOpen()}
        class="relative flex max-w-[700px] flex-col items-center justify-center px-[24px] text-center"
      >
        <Marks />

        <Bloc class="my-10 flex w-full flex-col items-center justify-center px-[24px] pb-8 pt-6 tracking-wide">
          <h1 class="mx-10 text-lg font-bold text-casper">
            {t('main.pickMark.label')}
          </h1>
          <Switch
            class="my-6"
            value={globalStore.playerMark}
            onSelect={playerMark => {
              setGlobalStore({ playerMark })
            }}
            isFocusable={!isModalOpen()}
          />
          <p class="text-sm font-medium tracking-wider text-casper opacity-50">
            {t('main.pickMark.reminder')}
          </p>
        </Bloc>

        <Button
          class="mb-7 w-full"
          onClick={() => {
            setGlobalStore({
              appState: 'game',
              playGrid: createNewGrid(),
            })
          }}
          isFocusable={!isModalOpen()}
        >
          {t('main.newPVEGame')}
        </Button>
        <Button
          ref={pvpButtonRef!}
          class="w-full"
          type="secondary"
          onClick={() => setModalOpen(true)}
          isFocusable={!isModalOpen()}
        >
          {t('main.newPVPGame')}
        </Button>
      </div>

      <Modal
        isOpen={isModalOpen()}
        closeModal={() => setModalOpen(false)}
        elementToFocusOnClose={pvpButtonRef!}
      >
        <div class="flex flex-col text-2xl font-bold tracking-wider text-casper">
          <div class="flex items-end">
            <h3>{t('main.searchingOpponent')}</h3>
            <img
              class="ml-1 inline translate-y-[-6px]"
              src="data:image/gif;base64,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"
            />
          </div>

          <div class="mt-8 flex items-center justify-center">
            <Button
              ref={cancelButtonRef!}
              type="tertiary"
              onClick={() => {
                setModalOpen(false)
                pvpButtonRef.focus()
              }}
            >
              {t('main.cancel')}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default HomePage
