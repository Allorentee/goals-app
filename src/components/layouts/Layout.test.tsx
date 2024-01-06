import { render, screen } from '@testing-library/react'
import { LayoutSlideBar } from './Layout'
import { navigation } from '../../constants/navigation'

describe('Given Layout component', () => {
  test('When we render it we must show in the screen', () => {
    render(
      <LayoutSlideBar navigation={navigation}>
        <></>
      </LayoutSlideBar>
    )

    const role = screen.getByRole('heading')
    expect(role).toBeTruthy()
  })
})
