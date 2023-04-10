import i18next from 'i18next'
import { Component, onMount, createSignal, Show } from 'solid-js'

import { I18nProvider } from './i18n/I18nProvider'
import i18n from './i18n/config'
import HomePage from './pages/Homepage'

const App: Component = () => {
  const [loaded, setLoaded] = createSignal(false)

  onMount(async () => {
    await i18n
    setLoaded(true)
  })

  return (
    <Show when={loaded()}>
      <I18nProvider i18n={i18next}>
        <HomePage />
      </I18nProvider>
    </Show>
  )
}

export default App
