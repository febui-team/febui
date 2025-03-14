import React from "react"
import styles from './style.module.less'
import { classnames } from "@/utils/class.util"
import { FebProps } from "@/types/component"

export type FLayoutAsideProps = FebProps<{
  position?: 'left' | 'right',
  showDiv?: boolean,
  sticky?: boolean,
  width?: number
}, HTMLDivElement>
/**
 * 布局组件
 */
export const FLayoutAside: React.FC<FLayoutAsideProps> = function (
  { position = 'left',
    showDiv,
    style,
    children,
    width = 100
  }
) {
  const className = classnames(styles.aside)
  if (showDiv) className.add(styles[`show-div-${position}`])
  className.add(styles[`aside-${position}`])
  const _style = { ...style, width }
  return <div style={_style} className={className}>{children}</div>
}