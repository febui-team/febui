import React from "react"
import { FIcon } from "#/base/icon/FIcon"
import { FebProps } from "@/types/component"
import { FebIconComponent } from "@/types/icon"
type Props = FebProps
export const FIconNpm: FebIconComponent<Props> = (props: Props) => {
    const path = {
        fill: "currentColor",
        d: 'M64 337.76h896v298.72H512v49.792H312.896v-49.824H64z m49.792 248.928h99.552v-149.376h49.76v149.344h49.792v-199.104H113.792z m248.896-199.136v248.928h99.552v-49.792h99.552v-199.136z m99.552 49.792H512v99.584h-49.792z m149.344-49.792v199.136h99.552v-149.376h49.792v149.344h49.792v-149.344h49.792v149.344h49.792v-199.104z'
    }
    return (<FIcon name="npm" {...props} path={path}></FIcon>)
}
