import { createContext, useContext } from 'react'
import { ContextProps } from './proyects.props'

export const ProyectsContext = createContext<ContextProps | undefined>(
  undefined
)

export function useProyects() {
  const state = useContext(ProyectsContext)

  if (ProyectsContext === undefined) {
    throw new Error('You need a provider to use useProyects')
  }

  const addProyect = (proyect: any) => {
    state?.setProyects((prev: any) => {
      return [...prev, proyect]
    })
  }

  return { ...state, addProyect }
}
