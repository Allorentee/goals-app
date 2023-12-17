import { LayoutSlideBar } from './components/layouts/Layout'
import { Table } from './components/ui'
import { navigation } from './constants/navigation'

export function App() {
  const proyects = [
    {
      id: crypto.randomUUID(),
      name: 'Lindsay Walton',
      tasks: 2
    }
  ]
  const columns = [{ name: 'Nombre' }, { name: 'Tareas' }]
  return (
    <LayoutSlideBar navigation={navigation}>
      <Table columns={columns} rows={proyects}></Table>
    </LayoutSlideBar>
  )
}
