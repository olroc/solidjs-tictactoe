import { createSignal, mergeProps } from 'solid-js'
import clsx from 'clsx'

import clickOutsideDirective from '../../directives/clickOutside'

// Needed because of TS compiler, see https://github.com/solidjs/solid/discussions/845
const clickOutside = clickOutsideDirective

export type ButtonProps = {
  class?: string
  type?: 'primary' | 'secondary'
  label: string
  onClick: () => void
}

export default function Button(props: ButtonProps) {
  props = mergeProps({ type: 'primary', label: '' } as ButtonProps, props)

  const [isDown, setDown] = createSignal(false)

  return (
    <div
      class={clsx(
        props.class,
        'relative',
        "after:absolute after:left-0 after:top-[8px] after:z-10 after:h-full after:w-full after:rounded-2xl after:content-['']",
        props.type === 'primary'
          ? 'after:bg-saffron-dark'
          : 'after:bg-turquoise-dark'
      )}
    >
      <button
        class={clsx(
          'relative z-20 block w-full rounded-2xl px-4 py-4 text-base font-semibold tracking-wider text-mirage sm:px-16 sm:text-xl',
          props.type === 'primary'
            ? 'bg-saffron hover:bg-saffron-light'
            : 'bg-turquoise hover:bg-turquoise-light',
          'transition-top ease duration-75',
          isDown() ? 'top-[5px]' : 'top-0'
        )}
        onMouseDown={() => setDown(true)}
        onMouseUp={() => {
          setDown(false)
          props.onClick()
        }}
        use:clickOutside={() => setDown(false)}
      >
        {props.label}
      </button>
    </div>
  )
}
