import React from 'react';
import ReactDOM from 'react-dom/client';
import { FDialogWrapper } from '#/notice/dialog/FDialogWrapper';
import { FDialogHandler, FDialogOptions } from '#/notice/dialog/types';
import { FIconInfoFilled } from '+/FIconInfoFilled';
import { FIconAttentionFilled } from '+/FIconAttentionFilled';
import { InteractionType } from '@/types/base';
import { Color } from '@/types/style';

/**
 * @description 对话框API
 * @file dialog.tsx
 */

/**
 * 消息容器元素ID
 */
const ID_OF_DIALOG_WRAPPER = 'f-dialog-wrapper'


/**
 * 获取消息容器的期约
 */
let handlePromise: Promise<FDialogHandler> | undefined = undefined


/**
 * 弹出对话框
 * @param options - 配置
 * @return 交互结果
 */
export const febDialog = async (options: FDialogOptions) => {
    // 创建消息容器
    if (!handlePromise) {
        let toastWrapper = document.getElementById(ID_OF_DIALOG_WRAPPER) as HTMLDivElement
        if (!toastWrapper) {
            toastWrapper = document.createElement('div')
            toastWrapper.setAttribute('id', ID_OF_DIALOG_WRAPPER)
            document.body.appendChild(toastWrapper)
        }
        const toastRoot = ReactDOM.createRoot(toastWrapper)
        handlePromise = new Promise((resolve) => {
            toastRoot.render(<>
                <FDialogWrapper handler={(w) => {
                    if(w) resolve(w)
                }} />
            </>)
        })
    }

    // 获取消息容器，并添加消息
    const wrapper = await handlePromise;
    return await wrapper.add(options);
}

/**
 * 提醒
 * @param title 标题
 * @param content 内容
 * @param options 更多配置
 * @return 交互结果
 */
febDialog.alert = (title: string, content: string, options?: FDialogOptions) => {
    return febDialog({
        titleIcon: FIconInfoFilled,
        title,
        content,
        confirmText: '知道了',
        ...options
    })
}

/**
 * 询问
 * @param title 标题
 * @param content 内容
 * @param confirmText 确认按钮文字
 * @param type 交互类型
 * @param options 更多配置
 * @return 交互结果
 */
febDialog.confirm = (title: string, content: string, type: InteractionType, options?: FDialogOptions) => {
    const MAP:{
        [K in InteractionType]: Color
    } = {
        'warn': 'var(--warn-color-8)',
        'danger': 'var(--danger-color-8)',
        'primary': 'var(--primary-color-8)',
        'safe': 'var(--safe-color-8)',
        'default': ''
    }
    return febDialog({
        title,
        titleIcon: type !== 'default' ? FIconAttentionFilled : undefined,
        content,
        showCancel: true,
        titleIconColor: type ? MAP[type]: undefined,
        confirmType: type,
        ...options
    })
}