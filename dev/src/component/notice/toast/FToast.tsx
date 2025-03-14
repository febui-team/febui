import React, { Component, ElementType } from "react";

import styles from './toast.module.less'
import { FIconSuccessFilled } from "+/FIconSuccessFilled";
import { FIconFailFilled } from "+/FIconFailFilled";
import { FIconAttentionFilled } from "+/FIconAttentionFilled";
import { FIconInfoFilled } from "+/FIconInfoFilled";
import { FebProps } from "@/types/component";
import { FToastType } from "@/types/toast";

type Props = FebProps<{
    // 消息ID
    id?: number,
    // 消息类型
    type?: FToastType,
    // 消息是否死亡
    dead?: boolean,
    // 消息内容
    message: string,
    // 销毁消息函数
    destroy?: (id: number | undefined) => void
}, HTMLDivElement>
/**
 * 不同类型icon的组件
 */
const ICON_MAP:{
    [key: string]: ElementType
} = {
    'info': FIconInfoFilled,
    'fail': FIconFailFilled,
    'success': FIconSuccessFilled,
    'warn': FIconAttentionFilled,
    'error': FIconAttentionFilled
}
/**
 * 提示消息
 * @author linqin.zhong
 * @date 2025/01/23 13:01:42
 */
export class FToast extends Component<Props> {

    static defaultProps = {
        type: 'info'
    }

    render() {
        const className = [styles.toast]
        if (this.props.destroy && this.props.dead) {
            className.push(styles['toast-died'])
        }

        const iconClassName = [
            styles['toast-icon'],
            styles[this.props.type as string]
        ]
        const ToastIcon = ICON_MAP[this.props.type as string]
        return (
            <div ref={t => {
                // 销毁动画结束后，销毁当前Toast元素
                if(this.props.dead) t?.addEventListener('transitionend', (e) => {
                    if (e.propertyName === 'margin-top' && this.props.destroy)
                        this.props.destroy(this.props.id)
                })
            }} className={className.join(' ')}>
                <ToastIcon className={iconClassName.join(" ")} />
                <span>{this.props.message}</span>
            </div>
        )
    }
}