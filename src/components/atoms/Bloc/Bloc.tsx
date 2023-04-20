import clsx from 'clsx'
import type { Component, JSX } from 'solid-js'
import { mergeProps } from 'solid-js'

type BlocType = 'primary' | 'secondary' | 'tertiary'
type ShadowType = 'lg' | 'md' | 'none'

export interface BlocProps {
  class?: string
  type?: BlocType
  shadow?: ShadowType
  children?: JSX.Element
}

const Bloc: Component<BlocProps> = _props => {
  const props = mergeProps({ shadow: 'lg' } as BlocProps, _props)

  return (
    <div
      class={clsx(
        props.class,
        'rounded-2xl',
        props.shadow === 'lg' ? 'shadow-[inset_0_-8px_0] shadow-big-stone' : '',
        props.shadow === 'md' ? 'shadow-[inset_0_-4px_0] shadow-big-stone' : '',
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

export default Bloc
