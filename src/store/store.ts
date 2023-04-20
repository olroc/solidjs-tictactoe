import { createStore } from 'solid-js/store'

export type AppState = 'config' | 'game'

type PlayGrid = Array<
  Array<{ mark: PlayerMark | undefined; winningTile: boolean }>
>

interface AppStore {
  appState: AppState
  playerMark: PlayerMark
  playGrid: PlayGrid
}

export const createNewGrid: () => PlayGrid = () => [
  [
    { mark: undefined, winningTile: false },
    { mark: undefined, winningTile: false },
    { mark: undefined, winningTile: false },
  ],
  [
    { mark: undefined, winningTile: false },
    { mark: undefined, winningTile: false },
    { mark: undefined, winningTile: false },
  ],
  [
    { mark: undefined, winningTile: false },
    { mark: undefined, winningTile: false },
    { mark: undefined, winningTile: false },
  ],
]

// eslint-disable-next-line solid/reactivity
export default createStore<AppStore>({
  appState: 'config',
  playerMark: 'cross',
  playGrid: [
    [
      { mark: undefined, winningTile: false },
      { mark: undefined, winningTile: false },
      { mark: undefined, winningTile: false },
    ],
    [
      { mark: undefined, winningTile: false },
      { mark: undefined, winningTile: false },
      { mark: undefined, winningTile: false },
    ],
    [
      { mark: undefined, winningTile: false },
      { mark: undefined, winningTile: false },
      { mark: undefined, winningTile: false },
    ],
  ],
})
