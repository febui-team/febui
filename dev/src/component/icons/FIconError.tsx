
import React from "react"
import { FIcon } from "#/base/icon/FIcon"
import { FebProps } from "@/types/component"

type Props = FebProps

export const FIconError = (props: Props) => {
    const path = {
        d: 'M501.333333 96c-234.666667 0-426.666667 192-426.666666 426.666667s192 426.666667 426.666666 426.666666 426.666667-192 426.666667-426.666666-192-426.666667-426.666667-426.666667z m0 789.333333c-200.533333 0-362.666667-162.133333-362.666666-362.666666s162.133333-362.666667 362.666666-362.666667 362.666667 162.133333 362.666667 362.666667-162.133333 362.666667-362.666667 362.666666z m-42.666666-352v-170.666666c0-23.466667 19.2-42.666667 42.666666-42.666667s42.666667 19.2 42.666667 42.666667v170.666666c0 23.466667-19.2 42.666667-42.666667 42.666667s-42.666667-19.2-42.666666-42.666667z m91.733333 149.333334c0 23.466667-19.2 42.666667-42.666667 42.666666h-10.666666c-23.466667 0-42.666667-19.2-42.666667-42.666666s19.2-42.666667 42.666667-42.666667h10.666666c23.466667 0 42.666667 19.2 42.666667 42.666667z'
    }
    return (<FIcon name="error" {...props} path={path}></FIcon>)
}
