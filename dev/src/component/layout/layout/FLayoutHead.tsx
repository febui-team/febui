import React from "react"
import styles from './style.module.less'
import { classnames } from "@/utils/class.util"
import { FebProps } from "@/types/component"

export type FLayoutHeadProps = FebProps<{
  height?: number,
  showDiv?: boolean,
  sticky?: boolean
}>
/**
 * 布局组件
 */
export const FLayoutHead: React.FC<FLayoutHeadProps> = function (
  { showDiv,
    sticky,
    children,
    height = 40,
    style
  }
) {
  const className = classnames(styles.head)
  if (showDiv) className.add(styles['show-div'])
  if (sticky) className.add(styles['head-sticky'])
  const _style = { ...style, height }
  return <div style={_style} className={className}>{
    children}</div>
}