import React from "react";
import styles from './style.module.less'
import { FebIconSymbol } from './init'
import { classnames } from "@/utils/class.util";
import { FebProps } from "@/types/component";
import { FIconPath } from "@/types/icon";
type Props = FebProps<{
  name: string,
  path: FIconPath | FIconPath[]
}>


/**
 * 图标
 * @author linqin.zhong
 * @date 2025/01/23 21:52:33
 */
export const FIcon:React.FC<Props> = function ({onClick,style,className,name,path,ref}) {
  const symbol = new FebIconSymbol(name, path)
  return <div ref={ref as any} onClick={onClick} style={style} className={classnames(styles.icon, styles.icon, className)}>
    <svg style={{ width: '100%', height: '100%' }} aria-hidden="true"><use xlinkHref={`#${symbol.id}`}></use></svg>
  </div>
}