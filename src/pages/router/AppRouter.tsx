import { Routes, Route } from 'react-router-dom'
import { Home } from '../Home'
import { Tasks } from '../Tasks'

export function AppRouter() {
  return (
    <Routes>
      <Route path="" Component={Home}></Route>
      <Route path="/tasks" Component={Tasks}></Route>
    </Routes>
  )
}
