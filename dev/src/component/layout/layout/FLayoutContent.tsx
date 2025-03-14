import React from "react"
import styles from './style.module.less'
import { classnames } from "@/utils/class.util"
import { FebProps } from "@/types/component"

export type FLayoutContentProps = FebProps<{
  direction?: 'vertical' | 'horizontal',
  gap?: number
}>
/**
 * 布局组件
 */
export const FLayoutContent: React.FC<FLayoutContentProps> =  function (props) {
  return <div style={props.style} className={classnames(styles.content)}>{props.children}</div>
}