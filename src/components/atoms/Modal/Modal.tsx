import clsx from 'clsx'
import { JSX, mergeProps } from 'solid-js'

import clickOutsideDirective from '../../../directives/clickOutside'
import { Portal } from 'solid-js/web'

// Needed because of TS compiler, see https://github.com/solidjs/solid/discussions/845
const clickOutside = clickOutsideDirective

type ModalProps = {
  class?: string
  isOpen?: boolean
  closeModal: () => void
  children: JSX.Element
}

export default function Modal(props: ModalProps) {
  props = mergeProps({ isOpen: false }, props)

  return (
    <Portal>
      <div
        role="dialog"
        aria-modal
        class={clsx(
          'fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50',
          props.isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
          'transition-opacity duration-300 ease-out'
        )}
      >
        <div
          class={clsx(
            'relative flex w-full items-center justify-center bg-te-papa-green py-16',
            'ease transition-all duration-[400ms]',
            props.isOpen ? 'top-0 opacity-100' : 'top-[70%] opacity-0'
          )}
          use:clickOutside={props.closeModal}
        >
          {props.children}
        </div>
      </div>
    </Portal>
  )
}
