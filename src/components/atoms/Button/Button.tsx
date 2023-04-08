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
    <div
      class={clsx(
        props.class,
        'relative',
        "after:absolute after:left-0 after:top-[8px] after:z-10 after:h-full after:w-full after:rounded-2xl after:content-['']",
        props.type === 'primary' && 'after:bg-saffron-dark',
        props.type === 'secondary' && 'after:bg-turquoise-dark',
        props.type === 'tertiary' && 'after:bg-casper-dark'
      )}
    >
      <button
        ref={props.ref}
        class={clsx(
          'relative z-20 block rounded-2xl px-4 py-4 text-base font-semibold tracking-wider text-mirage sm:px-16 sm:text-xl',
          props.type === 'primary' &&
            'w-full bg-saffron hover:bg-saffron-light',
          props.type === 'secondary' &&
            'w-full bg-turquoise hover:bg-turquoise-light',
          props.type === 'tertiary' && 'bg-casper hover:bg-casper-light',
          'transition-top ease duration-75',
          isDown() ? 'top-[5px]' : 'top-0'
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
