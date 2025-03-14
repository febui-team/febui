
import React from "react"
import { FIcon } from "#/base/icon/FIcon"
import { FebProps } from "@/types/component"

type Props = FebProps<{}>

export const FIconSemiSelect = (props: Props) => {
    const path = {
        d: 'M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64'
    }
    return (<FIcon  name="semi-select" {...props} path={path}></FIcon>)
}