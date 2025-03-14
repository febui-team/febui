/**
 * @description 按钮（FButton）
 * @file button.tsx
 * @author linqin.zhong
 */

import React, { useState } from "react"
import { FButton } from "#/base/button/FButton"
import { ActionFn } from "@/types/action"
import { ButtonShape, ButtonSize, ButtonType, ButtonVariant } from "@/types/button"

// 不同形状
export const ShapeTest = function () {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {['round', 'square', 'rectangle', 'circle'].map(shape => (
          <FButton key={shape} shape={shape as ButtonShape}>{shape}</FButton>
        ))}
      </div>
    </>
  )
}

// 不同尺寸
export const SizeTest = function () {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {['small', 'medium', 'large'].map(size => (
          <FButton key={size} size={size as ButtonSize}>{size}</FButton>
        ))}
      </div>
    </>
  )
}

// 不同类型
export const TypeTest = function () {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {['default', 'primary', 'danger', 'safe', 'warn'].map(type => (
          <FButton key={type} type={type as ButtonType}>{type}</FButton>
        ))}
      </div>
    </>
  )
}

// 不同形态
export const VariantTest = function () {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {['base', 'outline', 'dashed', 'text'].map(variant => (
          <FButton key={variant} variant={variant as ButtonVariant}>{variant}</FButton>
        ))}
      </div>
    </>
  )
}

// 加载中
export const LoadingTest = function () {
  const [isLoading1, setLoading1] = useState(false)
  const [isLoading2, setLoading2] = useState(false)
  const [isLoading3, setLoading3] = useState(false)
  const onClick = (setLoading: ActionFn) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }
  return (<>
    {(<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      <FButton loading={isLoading1} onClick={onClick.bind(null, setLoading1)} type='default'>点我加载</FButton>
      <FButton loading={isLoading2} onClick={onClick.bind(null, setLoading2)} type='primary'>点我加载</FButton>
      <FButton loading={isLoading3} onClick={onClick.bind(null, setLoading3)} type='warn' variant="text">点我加载</FButton>
    </div>)}
  </>)
}

let n1 = 0
let n2 = 0
let n3 = 0
// 防抖/节流
export const DebounceThrottleTest = function () {
  const [num1, setNum1] = useState(n1)
  const [num2, setNum2] = useState(n2)
  const [num3, setNum3] = useState(n3)
  const onClick1 = () => setNum1(++n1)
  const onClick2 = () => setNum2(++n2)
  const onClick3 = () => setNum3(++n3)
  return (<>
    <div>疯狂点击下面按钮试试</div>
    <br></br>
    {(<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      <FButton onClick={onClick1} type='danger' variant="dashed">{num1}+1</FButton>
      <FButton debounce={500} onClick={onClick2} type='primary' variant="dashed">{num2}+1（防抖）</FButton>
      <FButton throttle={500} onClick={onClick3} type='safe' variant="dashed">{num3}+1（节流）</FButton>
    </div>)}
  </>)
}