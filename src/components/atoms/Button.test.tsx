import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render } from '@solidjs/testing-library'
import '@testing-library/jest-dom'

import Button from './Button'

describe('Button component', () => {
  it('should render a button with the correct label', () => {
    const handleClick = vi.fn()
    const label = 'This is a button'

    const { getByRole } = render(() => (
      <Button label={label} onClick={handleClick} />
    ))

    expect(getByRole('button')).toHaveTextContent(label)
  })

  it('should trigger the callback function when clicked', async () => {
    const handleClick = vi.fn()
    const { click } = userEvent.setup()
    const { getByRole } = render(() => (
      <Button label="This is a button" onClick={handleClick} />
    ))
    expect(handleClick).not.toHaveBeenCalled()

    await click(getByRole('button'))

    expect(handleClick).toHaveBeenCalledOnce()
  })
})
