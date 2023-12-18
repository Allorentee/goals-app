import { useState } from 'react'
import { Modal } from '../components/ui/modal/Modal'
import { Table } from '../components/ui'
import { LayoutSlideBar } from '../components/layouts/Layout'
import { navigation } from '../constants/navigation'
import { ModalAddProyect } from '../components/ModalAddProyect'
import { useProyects } from '../context/proyects/hook/useProyects'

export function Home() {
  const { proyects } = useProyects()
  const columns = [{ name: 'Proyecto' }, { name: 'Tareas' }]
  const [open, setOpen] = useState(false)
  return (
    <>
      <Modal open={open} toggleOpen={() => setOpen(!open)}>
        <ModalAddProyect></ModalAddProyect>
      </Modal>
      <LayoutSlideBar navigation={navigation}>
        <Table
          columns={columns}
          rows={proyects}
          add={() => setOpen(!open)}
        ></Table>
      </LayoutSlideBar>
    </>
  )
}
