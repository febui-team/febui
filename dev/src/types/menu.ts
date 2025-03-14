import { FebIconComponent } from "./icon"

export type FMenuItem = {
  name: string,
  label: string,
  children?: FMenuItem[]
  disabled?: boolean
  icon?: FebIconComponent
}