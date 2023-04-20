import type { Component } from 'solid-js'
import clsx from 'clsx'

interface TileProps {
  class?: string
  playerMark: PlayerMark
  value?: PlayerMark
  winningTile: boolean
  disabled?: boolean
  onSelect: () => void
}

const hoveredBackground: (mark: PlayerMark) => string = mark => {
  return mark === 'circle'
    ? "hover:bg-[url('/img/icon-o-outline.44ebb219.svg')] bg-no-repeat bg-center bg-[length:50%_50%]"
    : "hover:bg-[url('/img/icon-x-outline.a591bdf2.svg')] bg-no-repeat bg-center bg-[length:50%_50%]"
}

const markedBackgroundSrc: (
  mark: PlayerMark,
  winningTile: boolean
) => string = (mark, winningTile) => {
  if (mark === 'circle') {
    return winningTile
      ? "bg-[url('/img/icon-o-black.ff854032.svg')] bg-no-repeat bg-center bg-[length:50%_50%]"
      : "bg-[url('/img/icon-o.7608cc08.svg')] bg-no-repeat bg-center bg-[length:50%_50%]"
  }

  return winningTile
    ? "bg-[url('/img/icon-x-black.7128f0ac.svg')] bg-no-repeat bg-center bg-[length:50%_50%]"
    : "bg-[url('/img/icon-x.0b42b1fa.svg')] bg-no-repeat bg-center bg-[length:50%_50%]"
}

const background: (winningTile: boolean, value?: PlayerMark) => string = (
  winningTile,
  value
) => {
  if (winningTile) {
    return value === 'circle' ? 'bg-saffron' : 'bg-turquoise'
  }
  return 'bg-te-papa-green'
}

const Tile: Component<TileProps> = props => {
  const hasValue: () => boolean = () => props.value !== undefined
  const handleSelect: () => void = () => {
    if (!hasValue() && !(props.disabled ?? false)) {
      props.onSelect()
    }
  }

  return (
    <button
      tabIndex={hasValue() || (props.disabled ?? false) ? -1 : 1}
      class={clsx(
        'relative h-[27vw] w-[27vw] max-w-[140px] rounded-2xl shadow-big-stone transition-all duration-500',
        hasValue()
          ? 'mt-[4px] max-h-[136px] translate-y-[1px] cursor-default shadow-[inset_0_-4px_0]'
          : 'max-h-[140px] shadow-[inset_0_-8px_0]',
        hasValue() ? markedBackgroundSrc(props.value!, props.winningTile) : '',
        !hasValue() && !(props.disabled ?? false)
          ? hoveredBackground(props.playerMark)
          : '',
        background(props.winningTile, props.value)
      )}
      onClick={handleSelect}
    />
  )
}

export default Tile
