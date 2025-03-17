import React, { createElement, useLayoutEffect, useState } from "react";
import styles from './style.module.less'
import { classnames } from "@/utils/class.util";
import { FButton } from '#/base/button/FButton';
import { FIconClose } from "+/FIconClose";
import { FDialogProps } from "./types";

/**
 * 我的组件
 * @author linqin.zhong
 * @date 2025/01/29 14:25:47
 */
export const FDialog: React.FC<FDialogProps> = function (
  this: any,
  {
    title = '标题',
    header,
    content,
    footer,
    visible,
    children,
    confirmText = '确认',
    cancelText = '取消',
    confirmType = 'primary',
    cancelType = 'default',
    confirmVariant = 'base',
    cancelVariant = 'base',
    titleIcon,
    titleIconColor,
    onConfirm,
    onCancel,
    onClose,
    onClickModal
  }
) {
  const [isVisible, setIsVisible] = useState<boolean | undefined>(false)
  useLayoutEffect(() => {
    setIsVisible(visible)
  }, [visible])
  let dialog: EventTarget | null = null
  return <div ref={(t) => { dialog = t }} onClick={(e) => {
    if (e.target === dialog) {
      e.stopPropagation()
      onClickModal && onClickModal()
    }
  }} className={
    classnames(
      styles['dialog'],
      isVisible && styles['visible']
    )}>
    <div className={classnames(styles['main'])}>
      <div className={classnames(styles['head'])}>
        {
          header || <>
            <div className={styles['title']}>
              {titleIcon && createElement(titleIcon, {
                className: styles['title-icon'],
                style: {
                  color: titleIconColor
                }
              } as any
              )}
              {title}
            </div>
            {
              onClose && <FIconClose onClick={(e) => {
                e.stopPropagation()
                onClose && onClose()
              }} className={styles['close-icon']} />
            }
          </>
        }
      </div>
      <div className={classnames(styles['body'])}>
        {
          children || <span className={styles['content']}>{content}</span>
        }
      </div>
      {
        footer
        || ((onCancel || onConfirm) &&
          <div className={classnames(styles['footer'])}>
            {
              onCancel && <FButton onClick={(e) => {
                e.stopPropagation()
                onCancel && onCancel()
              }} variant={cancelVariant} type={cancelType}>{cancelText
                }</FButton>
            }
            {
              onConfirm && <FButton variant={confirmVariant} type={confirmType} onClick={(e) => {
                e.stopPropagation()
                onConfirm && onConfirm()
              }}>{confirmText}</FButton>
            }
          </div>
        )
      }
    </div>
  </div>
}