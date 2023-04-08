import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render } from '@solidjs/testing-library'
import '@testing-library/jest-dom'

import Modal from './Modal'

describe('Modal component', () => {
  it('should render nothing when isOpen is set to false', () => {
    const closeModal = vi.fn()
    const { getByRole } = render(
      () => <Modal closeModal={closeModal}>Modal content</Modal>,
      { container: document.body }
    )

    expect(getByRole('dialog')).toHaveClass('opacity-0')
  })

  it('should render a dialog when isOpen is set to true', () => {
    const closeModal = vi.fn()
    const { getByRole } = render(
      () => (
        <Modal isOpen closeModal={closeModal}>
          Modal content
        </Modal>
      ),
      { container: document.body }
    )

    expect(getByRole('dialog')).toHaveClass('opacity-100')
  })

  it('should render the children component correctly', () => {
    const closeModal = vi.fn()
    const { getByRole } = render(
      () => (
        <Modal isOpen closeModal={closeModal}>
          Modal content
        </Modal>
      ),
      { container: document.body }
    )

    expect(getByRole('dialog')).toHaveTextContent('Modal content')
  })
})
