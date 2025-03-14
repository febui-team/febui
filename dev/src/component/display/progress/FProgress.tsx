import React from "react";
import { classnames } from "@/utils/class.util"
import styles from "./style.module.less"
import { FebProps } from "@/types/component";
import { InteractionType } from "@/types/base";
type Props = FebProps<{
    // 进度值（0~100）
    value?: number,
    // 精确到小数点后几位
    digits?: 0 | 1 | 2 | 3,
    // 主题
    theme?: Omit<InteractionType, 'default'>
    // 类型
    type?: 'outer' | 'inner',
    // 高度
    strokeWidth?: number
}>
/**
 * 进度条
 * @author linqin.zhong
 * @date 2025/02/01 19:28:45
 */
export const FProgress: React.FC<Props> = function (props) {

    const value = Math.min(100, Math.max(0, props.value || 0))
    return (<div className={classnames(
        styles['progress-wrapper'])}>
        <div style={{
            '--height': (props.strokeWidth || 0.5) + 'rem'
        } as any}
            className={classnames(styles['progress-bar'])}>
            <div style={{ width: value + '%' }} className={
                classnames(
                    styles['value'],
                    styles[(props.theme || 'primary') as string]
                )
            }></div>
        </div>
        <div className={classnames(styles['text'], styles[props.type || 'outer'])}>
            {parseFloat(value + '').toFixed(props.digits || 0)}%
        </div>
    </div>)
}