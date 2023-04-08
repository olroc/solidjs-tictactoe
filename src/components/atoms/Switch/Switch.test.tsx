import { createSignal } from 'solid-js'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render } from '@solidjs/testing-library'
import '@testing-library/jest-dom'

import Switch, { PlayerMark } from './Switch'

describe('Switch component', () => {
  it('should select the cross value when passed as prop', () => {
    const [selected, setSelected] = createSignal<PlayerMark>('cross')

    const { getByRole } = render(() => (
      <Switch value={selected()} onSelect={setSelected} />
    ))

    expect(selected()).toEqual('cross')
    expect(getByRole('checkbox', { name: 'Cross mark' })).toBeChecked()
  })

  it('should select the circle value when passed as prop', () => {
    const [selected, setSelected] = createSignal<PlayerMark>('circle')

    const { getByRole } = render(() => (
      <Switch value={selected()} onSelect={setSelected} />
    ))

    expect(selected()).toEqual('circle')
    expect(getByRole('checkbox', { name: 'Circle mark' })).toBeChecked()
  })

  it('should correctly switch between values according to the user selection', async () => {
    const [selected, setSelected] = createSignal<PlayerMark>('circle')
    const { click } = userEvent.setup()
    const { getByRole } = render(() => (
      <Switch value={selected()} onSelect={setSelected} />
    ))
    const crossButton = getByRole('checkbox', { name: 'Cross mark' })
    const circleButton = getByRole('checkbox', { name: 'Circle mark' })

    await click(crossButton)

    expect(selected()).toEqual('cross')
    expect(crossButton).toBeChecked()
    expect(circleButton).not.toBeChecked()

    await click(circleButton)

    expect(selected()).toEqual('circle')
    expect(circleButton).toBeChecked()
    expect(crossButton).not.toBeChecked()
  })
})
