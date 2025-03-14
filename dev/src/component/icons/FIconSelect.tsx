
import React from "react"
import { FIcon } from "#/base/icon/FIcon"
import { FebProps } from "@/types/component"

type Props = FebProps

export const FIconSelect = (props: Props) => {
    const path = {
        d: 'M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z'
    }
    return (<FIcon name="select" {...props} path={path}></FIcon>)
}