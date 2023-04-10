import { describe, expect, it } from 'vitest'
import { render } from '@solidjs/testing-library'
import '@testing-library/jest-dom'

import Tile from './Tile'

describe('Tile component', () => {
  it('should render the children prop', () => {
    const text = 'Some test content'

    const { getByText } = render(() => <Tile>{text}</Tile>)

    expect(getByText(text)).toBeInTheDocument()
  })
})
