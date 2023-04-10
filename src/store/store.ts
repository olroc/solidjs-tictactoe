import { createStore } from 'solid-js/store'

export type AppState = 'config' | 'game'

interface AppStore {
  appState: AppState
  playerMark: PlayerMark
}

// eslint-disable-next-line solid/reactivity
export default createStore<AppStore>({
  appState: 'config',
  playerMark: 'cross',
})
