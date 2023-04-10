import clsx from 'clsx'
import type { Component, JSX } from 'solid-js'
import { mergeProps } from 'solid-js'

type TileType = 'primary' | 'secondary' | 'tertiary'

export interface TileProps {
  class?: string
  type?: TileType
  withShadow?: boolean
  children?: JSX.Element
}

const Tile: Component<TileProps> = _props => {
  const props = mergeProps({ withShadow: true } as TileProps, _props)

  return (
    <div
      class={clsx(
        props.class,
        'rounded-2xl',
        props.withShadow ?? true
          ? 'shadow-[inset_0_-8px_0_rgba(0,0,0,0.3)]'
          : '',
        props.type === 'primary' && 'bg-saffron',
        props.type === 'secondary' && 'bg-turquoise',
        props.type === 'tertiary' && 'bg-casper',
        (props.type === null || props.type === undefined) && 'bg-te-papa-green'
      )}
    >
      {props.children}
    </div>
  )
}

export default Tile
