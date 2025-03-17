import React, { useImperativeHandle, useState } from "react";
import { FDialog } from "./FDialog";
import style from './style.module.less'
import { FDialogOptions, FDialogWrapperProps } from "./types";

/**
 * @description: 弹窗容器
 * @author linqin.zhong
 * @date 2025/03/17 15:03:40
 */
export const FDialogWrapper: React.FC<FDialogWrapperProps> = ({ handler }) => {
    type Dialog = (FDialogOptions & { id: string, resolve: (...args: any[]) => void, reject: () => void })
    const [dialogs, setDialogs] = useState<Dialog[]>([])
    const [dialogVisible, setDialogVisible] = useState<string[]>([]);
    useImperativeHandle(handler, () => ({
        add: (options: FDialogOptions) => {
            return new Promise((resolve, reject) => {
                const id = Date.now() + ''
                setDialogs([...dialogs, {
                    id,
                    ...options,
                    resolve,
                    reject
                }])
                setTimeout(() => {
                    setDialogVisible([...dialogVisible, id])
                }, 100);
            })
        }
    }))
    const close = (isConfirm: boolean, dialog: Dialog) => {
        setDialogVisible(dialogVisible.filter((id) => id !== dialog.id))

        if (dialog.throwReject && !isConfirm) {
            dialog.reject()
        } else {
            dialog.resolve(isConfirm)
        }
    }
    return <div className={style['dialog-wrapper']}>
        {dialogs.map((dialog) => {
            return <FDialog
                {...dialog}
                visible={dialogVisible.includes(dialog.id)}
                onClickModal={dialog.closeOnClickModal ? close.bind(null, false, dialog) : undefined}
                onCancel={dialog.showCancel ? close.bind(null, false, dialog) : undefined}
                onClose={dialog.showClose ? close.bind(null, false, dialog) : undefined}
                onConfirm={() => {
                    close(true, dialog)
                }}
                key={(dialog as any).id}
            />
        })}
    </div>
}