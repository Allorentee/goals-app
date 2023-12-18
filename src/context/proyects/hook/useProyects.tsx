import { useContext } from 'react'
import { ProyectsContext } from '../proyects'

export function useProyects() {
  const { proyects, setProyects } = useContext(ProyectsContext)

  const addProyect = (proyect) => {
    setProyects((prev) => {
      return [...prev, proyect]
    })
  }

  return { proyects, addProyect, setProyects }
}
