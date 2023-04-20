import { describe, expect, it } from 'vitest'
import { render } from '@solidjs/testing-library'
import '@testing-library/jest-dom'

import Bloc from './Bloc'

describe('Bloc component', () => {
  it('should render the children prop', () => {
    const text = 'Some test content'

    const { getByText } = render(() => <Bloc>{text}</Bloc>)

    expect(getByText(text)).toBeInTheDocument()
  })
})
