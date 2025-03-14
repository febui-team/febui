import React, { ReactElement, useState } from 'react'
import { FLayoutAside, FLayoutAsideProps } from './FLayoutAside'
import { FLayoutHead, FLayoutHeadProps } from './FLayoutHead'
import { classnames } from '@/utils/class.util'
import styles from './style.module.less'
import { FLayoutContent } from './FLayoutContent'
import { FLayoutFooter } from './FLayoutFooter'
import { FebProps } from '@/types/component'

type Props = FebProps<{
  direction?: 'vertical' | 'horizontal',
  gap?: number,
  // 吸附位置偏移值
  stickyOffset?: {
    top: number,
    left: number,
    right: number,
    bottom: number
  }
}>
/**
 * 布局组件
 */
export const FLayout: React.FC<Props> = function (props) {
  const {
    // direction = 'horizontal',
    gap
  } = props
  const style = { ...props.style }
  if (gap) {
    style.gap = gap
  }

  let head: ReactElement<FLayoutHeadProps> | null = null
  let aside: ReactElement<FLayoutAsideProps> | null = null
  let content: ReactElement | null = null
  let footer: ReactElement | null = null
  let bodyMarginTop = 0
  let insideMarginLeft: number | undefined = 0
  let insideMarginRight: number | undefined = 0

  const [asidePosition, setAsidePosition] = useState<'fixed' | 'absolute'>('absolute')
  const asideWrapperStyle: {
    width?: number,
    position?: 'fixed' | 'absolute',
    top?: number,
    bottom?: number
  } = {
    width: 100,
    position: asidePosition,
    top: 0,
    bottom: 0
  }

  const ref = (layoutBody: HTMLDivElement | null) => {
    if (aside?.props.sticky) {
      const p = layoutBody?.parentElement
      p?.addEventListener('scroll', () => {
        if (!p) return
        if (p.scrollTop > (head?.props.style?.height || head?.props.height || 40)) {
          setAsidePosition('fixed')
        } else {
          setAsidePosition('absolute')
        }
      })

    }
  }

  const bodyClass = classnames(styles.body)
  React.Children.forEach(props.children, (child) => {
    const c = child as ReactElement
    switch (c.type) {
      case FLayoutHead: {
        if (head === null) {
          head = c as ReactElement<FLayoutHeadProps>
          if (head.props.sticky) {
            bodyMarginTop = head.props.style?.height || head.props.height || 40
          }
        }
        break
      }
      case FLayoutAside: {
        if (aside === null) {
          aside = c as ReactElement<FLayoutAsideProps>
          if (aside.props.width) asideWrapperStyle.width = aside.props.width
          if (aside.props.position === 'right') insideMarginRight = asideWrapperStyle.width
          else insideMarginLeft = asideWrapperStyle.width
        }
        break
      }
      case FLayoutContent: {
        if (content === null) content = c
        break
      }
      case FLayoutFooter: {
        if (footer === null) footer = c
        break
      }
    }
  })

  const inside = !footer && !content
    ? null
    : footer && content ? <div className={styles.inside}>{content}{footer}</div> : [content, footer]
  return (<div ref={ref} style={props.style} className={classnames(styles.layout)}>
    {head}
    <div style={{
      marginTop: bodyMarginTop,
      paddingLeft: insideMarginLeft,
      paddingRight: insideMarginRight
    }} className={bodyClass}>
      <div className={classnames(styles['aside-wrapper'], asidePosition === 'fixed' ? styles['aside-wrapper-is-stickying'] : undefined)} style={asideWrapperStyle}>{aside}</div>
      {inside}
    </div>
  </div>)
}