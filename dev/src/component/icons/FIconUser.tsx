
import React from "react"
import { FIcon } from "#/base/icon/FIcon"
import { FebIconComponent, FebProps } from "@/types/component"

type Props = FebProps

export const FIconUser: FebIconComponent = (props: Props) => {
  const path = {
fill:"currentColor",
    d: 'M512 523.15c229.747 0 416 186.18 416 415.85 0 17.673-14.327 32-32 32-17.496 0-31.713-14.042-31.996-31.47L864 939c0-194.318-157.594-351.85-352-351.85-192.462 0-348.844 154.397-351.953 346.032L160 939c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-229.67 186.253-415.85 416-415.85zM512 54c111.927 0 202.667 90.704 202.667 202.6S623.927 459.2 512 459.2s-202.667-90.704-202.667-202.6S400.073 54 512 54z m0 64c-76.586 0-138.667 62.056-138.667 138.6S435.413 395.2 512 395.2c76.586 0 138.667-62.056 138.667-138.6S588.587 118 512 118z'
  }
  return (<FIcon name="user" {...props} path={path}></FIcon>)
}