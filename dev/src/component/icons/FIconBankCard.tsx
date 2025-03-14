
import React from "react"
import { FIcon } from "#/base/icon/FIcon"
import { FebProps } from "@/types/component"

type Props = FebProps

export const FIconBankCard = (props: Props) => {
  const path = {
    d: 'M896.646 139c41.248 0 74.683 33.44 74.683 74.688v597.625c0 41.248-33.435 74.687-74.683 74.687H128.354c-41.248 0-74.683-33.439-74.683-74.688V213.688C53.67 172.44 87.107 139 128.354 139z m10.683 234.75H117.67v437.563c0 5.808 4.63 10.532 10.398 10.683l0.285 0.004h768.292c5.9 0 10.683-4.784 10.683-10.688V373.75z m-138.731 277.5c17.673 0 32 14.327 32 32 0 17.496-14.042 31.713-31.471 31.996l-0.53 0.004H576.525c-17.673 0-32-14.327-32-32 0-17.496 14.042-31.713 31.471-31.996l0.53-0.004h192.073zM896.646 203H128.354c-5.9 0-10.683 4.784-10.683 10.688v96.062h789.658v-96.063l-0.003-0.284c-0.151-5.772-4.875-10.403-10.68-10.403z'
  }
  return (<FIcon name="bank-card" {...props} path={path}></FIcon>)
}