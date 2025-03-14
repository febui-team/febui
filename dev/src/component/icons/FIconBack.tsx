import React from "react"
import { FIcon } from "#/base/icon/FIcon"
import { FebProps } from "@/types/component"

type Props = FebProps

export const FIconBack = (props: Props) => {
    const path = {
        d: 'M610.133333 825.6L307.2 524.8c-8.533333-8.533333-8.533333-21.333333 0-29.866667L610.133333 192c17.066667-17.066667 42.666667-17.066667 59.733334 0 17.066667 17.066667 17.066667 42.666667 0 59.733333l-256 256 256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334-17.066667 19.2-44.8 19.2-59.733334 2.133333z'
    }
    return (<FIcon name="back" {...props} path={path}></FIcon>)
}
