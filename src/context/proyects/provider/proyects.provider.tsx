import { useMemo, useState } from 'react'
import { ProyectsContext } from '../context/proyects'
import { Props } from '../context/proyects.props'

export function ProyectsProvider({ children }: Props) {
  const [proyects, setProyects] = useState([])

  const values = useMemo(() => {
    return { proyects, setProyects }
  }, [proyects])

  return (
    <ProyectsContext.Provider value={values}>
      {children}
    </ProyectsContext.Provider>
  )
}
