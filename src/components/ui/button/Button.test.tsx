import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Given Button component', () => {
  test('When we render it we must show in the screen', () => {
    render(<Button title="prueba"></Button>)

    const button = screen.getByText('prueba')
    expect(button).toBeTruthy()
  })
})
