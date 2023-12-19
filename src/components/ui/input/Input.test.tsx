import { render, screen } from '@testing-library/react'
import { Input } from '..'

describe('Given Layout component', () => {
  test('When we render it we must show in the screen', () => {
    render(<Input label="label"></Input>)

    const input = screen.getByLabelText('label')
    expect(input).toBeTruthy()
  })
})
