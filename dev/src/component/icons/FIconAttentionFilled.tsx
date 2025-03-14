import React from "react"
import { FIcon } from "#/base/icon/FIcon"
import { FebProps } from "@/types/component"
import { FebIconComponent } from "@/types/icon"

type Props = FebProps

export const FIconAttentionFilled: FebIconComponent<Props> = (props: Props) => {
    const path = {
      d: 'M512.5 54c123.228 0 238.798 48.882 324.208 134.292C922.118 273.702 971 389.272 971 512.5c0 123.228-48.882 238.798-134.292 324.208C751.298 922.118 635.728 971 512.5 971c-123.228 0-238.797-48.882-324.209-134.292C102.881 751.298 54 635.728 54 512.5c0-123.228 48.882-238.797 134.292-324.209C273.702 102.881 389.272 54 512.5 54z m0 629.1c-29.443 0-53.313 23.87-53.313 53.313s23.87 53.312 53.313 53.312 53.313-23.87 53.313-53.313S541.942 683.1 512.5 683.1z m0-458.5c-17.673 0-32 14.327-32 32v341.2l0.004 0.53c0.283 17.428 14.5 31.47 31.996 31.47 17.673 0 32-14.327 32-32V256.6l-0.004-0.53c-0.283-17.428-14.5-31.47-31.996-31.47z'
    }
    return (<FIcon name="attention-filled" {...props} path={path}></FIcon>)
}
