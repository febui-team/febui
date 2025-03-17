import { InteractionType, Variant } from "@/types/base"
import { FebIconComponent, FebProps } from "@/types/component"
import { Color } from "@/types/style"
import { ReactElement, Ref } from "react"

// 对话框选项
export interface FDialogOptions{
    // 标题
    title?: string
    // 标题前图标
    titleIcon?: FebIconComponent
    // 标题按钮颜色
    titleIconColor?: Color
    // 内容
    content?: string
    // 点击遮罩关闭
    closeOnClickModal?: boolean
    // 显示关闭按钮
    showClose?: boolean
    // 显示取消按钮
    showCancel?: boolean
    // 抛出拒绝事件
    throwReject?: boolean
    // 确认按钮文字
    confirmText?: string
    // 确认按钮类型
    confirmType?: InteractionType
    // 确认按钮形态
    confirmVariant?: Variant
    // 取消按钮文字
    cancelText?: string
    // 取消按钮类型
    cancelType?: InteractionType
    // 取消按钮形态
    cancelVariant?: Variant
}
// 对话框操作句柄
export interface FDialogHandler {
    // 添加对话框
    add: (props: FDialogOptions) => Promise<boolean>
}
// 对话框容器参数
export interface FDialogWrapperProps extends FebProps {
    // 对话框操作句柄
    handler?: Ref<FDialogHandler>
}
// 对话框参数
export type FDialogProps = FebProps<{
    // 点击遮罩事件
    onClickModal?: () => void
    // 点击关闭按钮事件
    onClose?: () => void
    // 点击取消按钮事件
    onCancel?: () => void
    // 点击确认按钮事件
    onConfirm?: () => void
    // 标题
    title?: string
    // 标题前图标
    titleIcon?: FebIconComponent
    // 标题按钮颜色
    titleIconColor?: Color
    // 内容
    content?: string
    // 头部
    header?: ReactElement | ReactElement[]
    // 底部
    footer?: ReactElement | ReactElement[]
    // 是否可见
    visible?: boolean
    // 确认按钮文字
    confirmText?: string
    // 确认按钮类型
    confirmType?: InteractionType
    // 确认按钮形态
    confirmVariant?: Variant
    // 取消按钮文字
    cancelText?: string
    // 取消按钮类型
    cancelType?: InteractionType
    // 取消按钮形态
    cancelVariant?: Variant
  }>