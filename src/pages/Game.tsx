import type { Component } from 'solid-js'
import { createSignal, For } from 'solid-js'
import { produce } from 'solid-js/store'
import clsx from 'clsx'

import store from '../store/store'
import Button from '../components/atoms/Button/Button'
import Marks from '../components/atoms/Marks/Marks'
import Bloc from '../components/atoms/Bloc/Bloc'
import Tile from '../components/atoms/Tile/Tile'
import { getWinner, pickRandomFreeTile } from '../utils/grid'
import sleep from '../utils/sleep'

interface GamePageProps {
  class?: string
}

const GamePage: Component<GamePageProps> = props => {
  const [globalStore, setGlobalStore] = store
  const [actionEnabled, setActionEnabled] = createSignal(true)

  const handleSelect: (x: number, y: number) => () => void = (x, y) => {
    return async () => {
      setActionEnabled(false)

      // Update grid with the newly selected tile
      setGlobalStore(
        produce(store => (store.playGrid[x][y].mark = globalStore.playerMark))
      )

      // Check if there is a winner
      const win = getWinner(globalStore.playGrid)
      if (win.winnerMark !== undefined) {
        // Update grid with the winning tiles
        setGlobalStore(
          produce(store => {
            win.winningTiles.forEach(winningTile => {
              store.playGrid[winningTile.x][winningTile.y].winningTile = true
            })
          })
        )

        return
      }

      // If no winner, then the IA plays
      await sleep(1000)
      const freeTile = pickRandomFreeTile(globalStore.playGrid)
      setGlobalStore(
        produce(
          store =>
            (store.playGrid[freeTile.x][freeTile.y].mark =
              globalStore.playerMark === 'cross' ? 'circle' : 'cross')
        )
      )

      setActionEnabled(true)
    }
  }

  return (
    <div
      class={clsx(
        props.class,
        'relative flex w-[508px] flex-col items-center justify-center px-[24px] text-center'
      )}
    >
      <div class="flex w-full items-center justify-between">
        <Marks />
        <Bloc
          class="flex w-[30vw] max-w-[145px] -translate-x-4 items-center justify-center rounded-xl pb-4 pt-3 font-bold tracking-wider text-casper"
          shadow="md"
        >
          <img class="mr-3 w-[20px]" src="/img/icon-o-grey.d7ebaa04.svg" />
          TURN
        </Bloc>
        <Button
          type="tertiary"
          onClick={() => {
            setGlobalStore({ appState: 'config' })
          }}
        >
          <img src="/img/icon-restart.52330686.svg" />
        </Button>
      </div>
      <div class="my-5 grid w-full grid-cols-3 grid-rows-3 gap-[3vw] sm:gap-[20px]">
        <For each={[0, 1, 2]}>
          {row => (
            <For each={[0, 1, 2]}>
              {column => (
                <Tile
                  playerMark={globalStore.playerMark}
                  value={globalStore.playGrid[column][row].mark}
                  winningTile={globalStore.playGrid[column][row].winningTile}
                  onSelect={handleSelect(column, row)}
                  disabled={!actionEnabled()}
                />
              )}
            </For>
          )}
        </For>
      </div>
      <div class="flex w-full items-center justify-center gap-[20px]">
        <Bloc
          class="flex flex-1 flex-col items-center justify-center pb-2 pt-2 tracking-wider"
          type="primary"
          shadow="none"
        >
          <div>O&nbsp;(YOU)</div>
          <div class="text-2xl font-bold">0</div>
        </Bloc>
        <Bloc
          class="flex flex-1 flex-col  items-center justify-center pb-2 pt-2 tracking-wider"
          type="tertiary"
          shadow="none"
        >
          <div>TIES</div>
          <div class="text-2xl font-bold">0</div>
        </Bloc>
        <Bloc
          class="flex flex-1 flex-col items-center justify-center pb-2 pt-2 tracking-wider"
          type="secondary"
          shadow="none"
        >
          <div>X&nbsp;(CPU)</div>
          <div class="text-2xl font-bold">0</div>
        </Bloc>
      </div>
    </div>
  )
}

export default GamePage
