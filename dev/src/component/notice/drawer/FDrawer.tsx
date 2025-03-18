import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { classnames } from "@/utils/class.util";
import styles from "./style.module.less"
import { FDrawerProps } from "./types";
import { useZIndex } from "@/hooks/style";
import { FIconClose } from "+/FIconClose";
import { FButton } from "#/base/button/FButton";
/**
 * 抽屉,
 * @author linqinzhong,
 * @date 2025/03/17 22:28:56
 */
export const FDrawer: React.FC<FDrawerProps> = function (
  { direction = 'rtl',
    size = '50%',
    zIndex,
    visible,
    closeOnClickModal,
    onClose,
    showClose,
    showConfirm,
    showCancel,
    confirmText = '确认',
    cancelText = '取消',
    onConfirm
  }
) {
  const [isGoingToHide, setIsGoingToHide] = useState(false)
  const [_visible, setVisible] = useState<boolean>(false)
  const [isAppearing, setIsAppearing] = useState(false)
  const _zIndex = useZIndex()
  const main = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (!visible && !!_visible) {
      setIsGoingToHide(true)
    }
    if (!_visible && !!visible) {
      setIsAppearing(true)
    }
    setVisible(!!visible)
  }, [_visible, visible])

  useEffect(() => {
    const onHideFinished = (e: TransitionEvent) => {
      if (e.propertyName === 'transform') {
        setIsGoingToHide(false)
      }
    }
    const onAppearFinished = (e: AnimationEvent) => {
      if (e.animationName === styles['appear']) {
        setIsAppearing(false)
      }
    }
    const m = main.current
    m?.addEventListener('transitionend', onHideFinished)
    m?.addEventListener('animationend', onAppearFinished)
    return () => {
      m?.removeEventListener('transitionend', onHideFinished)
      m?.removeEventListener('animationend', onAppearFinished)
    }
  }, [])
  return (<div
    ref={wrapperRef}
    onClick={
      closeOnClickModal ? (e) => {
        if (e.target === wrapperRef.current) {
          !isAppearing && onClose && onClose()
        }
      } : undefined
    }
    style={{
      zIndex: zIndex !== undefined ? zIndex : _zIndex
    }}
    className={
      classnames(
        styles['drawer-wrapper'],
        styles['show-modal'],
        styles[direction],
        _visible && styles['visible'],
        isGoingToHide && styles['going-to-hide'],
        isAppearing && styles['appearing']
      )
    }>
    <div
      ref={main}
      style={{
        flexBasis: size,
      }}
      className={
        classnames(
          styles['drawer'],
        )
      }>
      <div className={classnames(styles['header'])}>
        <div className={classnames(styles['title'])}>标题</div>
        {
          showClose ? <FIconClose onClick={() => {
            onClose && onClose()
          }} className={styles['close-icon']} /> : undefined
        }
      </div>
      <div className={classnames(styles['body'])}></div>
      <div className={classnames(styles['footer'])}>
        {
          showCancel ? <FButton type="primary" onClick={() => {
            onConfirm && onConfirm()
          }}>{confirmText}</FButton> : undefined
        }
        {
          showConfirm ? <FButton onClick={() => {
            onClose && onClose()
          }}>{cancelText}</FButton> : undefined
        }
      </div>
    </div>
  </div>)
}