import React from "react"
import { FIcon } from "#/base/icon/FIcon"
import { FebProps } from "@/types/component"
type Props = FebProps

export const FIconNext = (props: Props) => {
    const path = {
fill:"currentColor",
        d: 'M413.866667 825.6l300.8-300.8c8.533333-8.533333 8.533333-21.333333 0-29.866667L413.866667 192c-17.066667-17.066667-42.666667-17.066667-59.733334 0-17.066667 17.066667-17.066667 42.666667 0 59.733333l256 256-256 256c-17.066667 17.066667-17.066667 42.666667 0 59.733334 14.933333 19.2 42.666667 19.2 59.733334 2.133333z'
    }
    return (<FIcon name="next" {...props} path={path}></FIcon>)
}
