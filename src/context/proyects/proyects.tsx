import { createContext, useMemo, useState } from 'react'

interface Props {
  readonly children: JSX.Element
}
interface ContextProps {
  proyects: never[]
  setProyects: React.Dispatch<React.SetStateAction<never[]>>
}

export const ProyectsContext = createContext<ContextProps>({
  proyects: [],
  setProyects: () => null
})
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
