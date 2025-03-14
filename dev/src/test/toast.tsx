/**
 * @description 提示信息（FToast）
 * @file xxx.tsx
 * @author linqin.zhong
 * @date 2025/01/23 13:07:12
*/
import React, { useRef, useState } from "react"
import { FButton } from "#/base/button/FButton"
import { toast } from "@/api/toast"
import { FToast } from "#/notice/toast/FToast"
import { FToastType } from "@/types/toast"

// 组件使用
export const FToastTest = function () {
    return <>
        <FToast type="warn" message={"这是一则警告提示"} />
        <FToast type="error" message={"这是一则错误提示"} />
        <FToast type="fail" message={"这是一则失败提示"} />
        <FToast type="success" message={"这是一则成功提示"} />
    </>
}

// 关闭和显示
export const CloseTest = function () {

    let status = 1
    const [isDead, setIsDead] = useState(false)
    const [isShow, setIsShow] = useState(true)
    const close = () => {
        if (status) {
            setIsDead(true)
            status = 0
        } else {
            setIsDead(false)
            setIsShow(true)
            status = 1
        }
    }
    const destroy = () => {
        setIsShow(false)
    }
    return (<div style={{ height: 50, position: 'relative' }}>
        <FButton loading={isDead && isShow} variant="dashed" type={isShow ? 'default' : 'primary'} onClick={close}>
            {isShow ? '关闭' : '显示'}
        </FButton>
        {
            isShow ? (
                <div style={{ position: 'absolute', top: 0, left: 120 }}>
                    <FToast message={"点击左边按钮关闭提示"} dead={isDead} destroy={destroy} />
                </div>
            ) : null
        }
    </div>)
}

// Api调用
export const ApiTest = function () {
    const showToast = (type: FToastType, duration?: number) => {        
        toast(type, {
            type,
            duration
        })
    }
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['info', 'success', 'fail', 'error', 'warn'].map(type => (
                    <FButton
                        variant='dashed'
                        type="primary"
                        key={type}
                        onClick={() => {
                            showToast(type as FToastType)
                        }}
                    >
                        {type}
                    </FButton>
                ))}
                {[1000, 2000, 3000].map(dur => (
                    <FButton
                        variant='dashed'
                        type="primary"
                        key={dur}
                        onClick={showToast.bind(null, 'info', dur)}
                    >
                        停留{dur}毫秒
                    </FButton>
                ))}
            </div>
        </>
    )
}

// Api快捷调用
export const QuickTest = function () {
    const handleSuccess = () => toast.success('成功')
    const handleError = () => toast.error('错误')
    const handleWarn = () => toast.warn('警告')
    const handleFail = () => toast.fail('失败')
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <FButton type="safe" variant="outline" onClick={handleSuccess}>toast.success</FButton>
                <FButton type="danger" variant="text" onClick={handleError}>toast.error</FButton>
                <FButton type="danger" variant="outline" onClick={handleFail}>toast.fail</FButton>
                <FButton type="warn" variant="text" onClick={handleWarn}>toast.warn</FButton>
            </div>
        </>
    )
}