import React, { ReactNode, Ref } from 'react';
import ReactDOM from 'react-dom/client';
import {  createTaskQueue } from '../utils/queue.util';
import { FToastWrapper } from '#/notice/toast/FToastWrapper';
import { ToastApiConfig } from '@/types/toast';

/**
 * @description 提示消息API
 * @file toast.tsx
 */

/**
 * 消息容器元素ID
 */
const ID_OF_TOAST_WRAPPER = 'f-toast-wrapper'

/**
 * 消息默认存活时长
 */
const DEFAULT_DURATION = 1700

/**
 * 获取消息容器的期约
 */
let wrapperPromise: Promise<FToastWrapper> | undefined = undefined

/**
 * 消息队列
 */
const queue = createTaskQueue()

/**
 * 弹出消息
 * @param message - 消息内容
 * @param config - 消息配置
 */
export const toast = (message: string, config?: ToastApiConfig) => {
    // 创建消息容器
    if (!wrapperPromise) {
        let toastWrapper = document.getElementById(ID_OF_TOAST_WRAPPER) as HTMLDivElement
        if (!toastWrapper) {
            toastWrapper = document.createElement('div')
            toastWrapper.setAttribute('id', ID_OF_TOAST_WRAPPER)
            document.body.appendChild(toastWrapper)
        }
        const toastRoot = ReactDOM.createRoot(toastWrapper)
        wrapperPromise = new Promise((resolve) => {
            toastRoot.render(<>
                <FToastWrapper ref={(w: any) => {
                    if(w) resolve(w)
                }} />
            </>)
        })
    }

    // 获取消息容器，并添加消息
    wrapperPromise.then((wrapper) => {
        const id = wrapper.add({
            type: config?.type,
            message
        })
        // 消息入队，依次移除
        queue.enqueue((_duration, next) => {
            const d = _duration === null ? DEFAULT_DURATION : _duration
            setTimeout(() => {
                wrapper.remove(id)
                // 当队列中消息较多时，减少后面消息的存活时长，最少为100ms
                next(Math.max(100, d - 500))
            }, config?.duration || d);
        })
    })
}

/**
 * 弹出成功消息
 * @param message - 消息内容
 */
toast.success = (message: string) => {
    toast(message, { type: 'success' })
}

/**
 * 弹出失败消息
 * @param message - 消息内容
 */
toast.fail = (message: string) => {
    toast(message, { type: 'fail' })
}


/**
 * 弹出错误消息
 * @param message - 消息内容
 */
toast.error = (message: string) => {
    toast(message, { type: 'error' })
}

/**
 * 弹出警告消息
 * @param message - 消息内容
 */
toast.warn = (message: string) => {
    toast(message, { type: 'warn' })
}