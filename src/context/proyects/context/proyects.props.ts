export interface Props {
  readonly children: JSX.Element
}
export interface ContextProps {
  proyects: never[]
  setProyects: React.Dispatch<React.SetStateAction<never[]>>
}
