import { LayoutSlideBar } from './components/layouts/Layout'
import { navigation } from './constants/navigation'
import { AppRouter } from './pages/router/AppRouter'

export function App() {
  return (
    <LayoutSlideBar navigation={navigation}>
      <AppRouter></AppRouter>
    </LayoutSlideBar>
  )
}
