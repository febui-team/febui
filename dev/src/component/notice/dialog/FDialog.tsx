import React, { ReactElement } from "react";
import styles from './style.module.less'
import { classnames } from "@/utils/class.util";
import { FButton } from '#/base/button/FButton';
import { FIconClose } from "+/FIconClose";
import { FebProps } from "@/types/component";
type Props = FebProps<{
  onClickModal?: () => void,
  onClose?: () => void,
  onCancel?: () => void,
  onConfirm?: () => void,
  title?: string,
  content?: string,
  header?: ReactElement | ReactElement[],
  footer?: ReactElement | ReactElement[],
  visible?: boolean
}>
/**
 * 我的组件
 * @author linqin.zhong
 * @date 2025/01/29 14:25:47
 */
export const FDialog: React.FC<Props> = function (
  this: any,
  {
    title = '标题',
    header,
    content,
    footer,
    visible,
    children,
    onConfirm,
    onCancel,
    onClose,
    onClickModal
  }
) {
  let dialog: EventTarget | null = null
  return <div ref={(t) => { dialog = t }} onClick={(e) => {
    if (e.target === dialog) {
      e.stopPropagation()
      onClickModal && onClickModal()
    }
  }} className={
    classnames(
      styles['dialog'],
      visible && styles['visible']
    )}>
    <div className={classnames(styles['main'])}>
      <div className={classnames(styles['head'])}>
        {
          header || <>
            <div className={styles['title']}>{title}</div>
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
        || (onCancel && onConfirm &&
          <div className={classnames(styles['footer'])}>
            {
              onCancel && <FButton onClick={(e) => {
                e.stopPropagation()
                onCancel && onCancel()
              }} variant="outline" type="default">取消</FButton>
            }
            {
              onConfirm && <FButton onClick={(e) => {
                e.stopPropagation()
                onConfirm && onConfirm()
              }} type="primary">确定</FButton>
            }
          </div>
        )
      }
    </div>
  </div>
}