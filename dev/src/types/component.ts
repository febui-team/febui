import { FunctionComponent, ReactNode } from "react"
import { OnClickFn } from "./action"

export type FebProps<T = {}, E = HTMLElement> = T & {
  children?: ReactNode
  className?: string,
  style?: React.CSSProperties & any,
  onClick?: OnClickFn,
  ref?: React.RefObject<E> | ((instance: ReactNode | null) => void)
}
export interface FebIconComponent<T = {}> extends FunctionComponent<T>{

}