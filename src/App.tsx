import type { Component } from 'solid-js'
import { onMount, createSignal, Show, Match, Switch } from 'solid-js'
import i18next from 'i18next'

import { I18nProvider } from './i18n/I18nProvider'
import i18n from './i18n/config'
import store from './store/store'
import HomePage from './pages/Homepage'
import GamePage from './pages/Game'
import { Transition } from 'solid-transition-group'

const App: Component = () => {
  const [i18nLoaded, setI18nLoaded] = createSignal(false)
  const [globalStore] = store

  onMount(async () => {
    await i18n
    setI18nLoaded(true)
  })

  return (
    <Show when={i18nLoaded()}>
      <I18nProvider i18n={i18next}>
        <main class="mx-auto flex h-[100vh] items-center justify-center bg-mirage">
          <Transition
            mode="outin"
            onEnter={(el, done) => {
              const a = el.animate(
                [
                  { opacity: 0, top: '5px' },
                  { opacity: 1, top: '0px' },
                ],
                { duration: 400, easing: 'ease' }
              )
              void a.finished.then(done)
            }}
            onExit={(el, done) => {
              const a = el.animate(
                [
                  { opacity: 1, top: '0px' },
                  { opacity: 0, top: '5px' },
                ],
                { duration: 400, easing: 'ease', delay: 300 }
              )
              void a.finished.then(done)
            }}
          >
            <Switch>
              <Match when={globalStore.appState === 'config'}>
                <HomePage />
              </Match>
              <Match when={globalStore.appState === 'game'}>
                <GamePage />
              </Match>
            </Switch>
          </Transition>
        </main>
      </I18nProvider>
    </Show>
  )
}

export default App
