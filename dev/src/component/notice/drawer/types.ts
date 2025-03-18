import { FebProps } from "@/types/component";

export type FDrawerDireaction = "rtl" | "ltr" | "ttb" | "btt";
export type FDrawerProps = FebProps<{
  // 方向
  direction?: FDrawerDireaction;
  // 大小
  size?: number | string;
  // 层级
  zIndex?: number;
  // 可见
  visible?: boolean;
  // 点击遮罩关闭
  closeOnClickModal?: boolean;
  // 关闭
  onClose?: () => void;
  // 显示关闭按钮
  showClose?: boolean
  // 显示确认按钮
  showConfirm?: boolean
  // 显示取消按钮
  showCancel?: boolean
  // 确认按钮文字
  confirmText?: string
  // 取消按钮文字
  cancelText?: string
  // 确认
  onConfirm?: () => void
}>;
