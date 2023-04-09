import { createSignal, mergeProps } from 'solid-js'
import clsx from 'clsx'

import clickOutsideDirective from '../../../directives/clickOutside'

// Needed because of TS compiler, see https://github.com/solidjs/solid/discussions/845
const clickOutside = clickOutsideDirective

export type ButtonProps = {
  ref?: HTMLButtonElement
  class?: string
  type?: 'primary' | 'secondary' | 'tertiary'
  label: string
  onClick: () => void
  isFocusable?: boolean
}

export default function Button(props: ButtonProps) {
  props = mergeProps(
    { type: 'primary', label: '', isFocusable: true } as ButtonProps,
    props
  )

  const [isDown, setDown] = createSignal(false)

  return (
    <div class={props.class}>
      <button
        ref={props.ref}
        class={clsx(
          'relative block rounded-2xl px-4 pb-5 pt-4 text-base font-semibold tracking-wider text-mirage sm:px-16 sm:text-xl',
          props.type === 'primary' &&
            'w-full bg-saffron shadow-saffron-dark hover:bg-saffron-light',
          props.type === 'secondary' &&
            'w-full bg-turquoise shadow-turquoise-dark hover:bg-turquoise-light',
          props.type === 'tertiary' &&
            'bg-casper shadow-casper-dark hover:bg-casper-light',
          'transition-all duration-75 ease-out',
          isDown()
            ? 'top-1 mb-1 pb-[16px] shadow-[inset_0_-3px_0]'
            : 'top-0 shadow-[inset_0_-8px_0_#cc8b13]'
        )}
        onMouseDown={() => setDown(true)}
        onMouseUp={(e) => setDown(false)}
        onClick={() => props.onClick()}
        use:clickOutside={() => setDown(false)}
        tabIndex={props.isFocusable ? 0 : -1}
      >
        {props.label}
      </button>
    </div>
  )
}
