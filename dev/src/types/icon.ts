import { FebProps } from "./component"

export type FIconPath = {
    d: string,
    fill?: string,
    id?: string
}
export type FebIconComponent<P = {}> = React.FC<FebProps<P>>