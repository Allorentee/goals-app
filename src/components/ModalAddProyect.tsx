import { useProyects } from '../context/proyects/hook/useProyects'
import { es } from '../locales/es'
import { Button, Input } from './ui'

export function ModalAddProyect() {
  const { addProyect } = useProyects()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    console.log({ data })
    const proyect = {
      ...data,
      id: crypto.randomUUID(),
      tasks: 0
    }
    addProyect(proyect)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nombre del proyecto" name="proyecto"></Input>
      <div className="p-4 w-full flex justify-center">
        <Button type="submit" title={es['common.project.add']}></Button>
      </div>
    </form>
  )
}
