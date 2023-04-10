import type { JSX, Component } from 'solid-js'

import clsx from 'clsx'
import { mergeProps } from 'solid-js'
import { Portal } from 'solid-js/web'

import clickOutsideDirective from '../../../directives/clickOutside'

// Needed because of TS compiler, see https://github.com/solidjs/solid/discussions/845
const clickOutside = clickOutsideDirective

interface ModalProps {
  class?: string
  isOpen?: boolean
  elementToFocusOnClose?: HTMLButtonElement
  closeModal: () => void
  children: JSX.Element
}

const Modal: Component<ModalProps> = _props => {
  const props = mergeProps({ isOpen: false }, _props)

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
          use:clickOutside={() => {
            if (props.isOpen) {
              props.closeModal()
              props.elementToFocusOnClose?.focus()
            }
          }}
        >
          {props.children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal
