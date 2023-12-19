import { Modal } from '../components/ui/Modal/Modal'
import { Table } from '../components/ui'
import { LayoutSlideBar } from '../components/layouts/Layout'
import { navigation } from '../constants/navigation'
import { ModalAddProyect } from '../components/ModalAddProyect'
import { useToggle } from '../hooks/useToggle'
import { useProyects } from '../context/proyects/context/proyects'

export function Home() {
  const { proyects } = useProyects()
  const columns = [{ name: 'Proyecto' }, { name: 'Tareas' }]
  const { state: modalState, toggle: toggleModal } = useToggle()

  return (
    <>
      <Modal open={modalState} toggleModal={toggleModal}>
        <ModalAddProyect toggleModal={toggleModal}></ModalAddProyect>
      </Modal>
      <LayoutSlideBar navigation={navigation}>
        <Table columns={columns} rows={proyects} add={toggleModal}></Table>
      </LayoutSlideBar>
    </>
  )
}
