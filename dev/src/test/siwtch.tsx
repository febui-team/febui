/**
 * @description 开关（FSwitch）
 * @file switch.tsx
 * @author xiaotong.wen
 */
import React, { useState } from 'react'
import FSwitch from '@/component/form/switch/FSwitch'
import { SwitchValue } from '@/types/switch'

/**
 * size：medium | small | large
 */
// 尺寸
export const BaseTest = function () {
  const [value, setValue] = useState(true)
  return (
    <div>
      <FSwitch onChange={() => setValue(!value)} size='medium' value={value}></FSwitch>&nbsp;
      <FSwitch onChange={() => setValue(!value)} size='small' value={value}></FSwitch>&nbsp;
      <FSwitch onChange={() => setValue(!value)} size='large' value={value}></FSwitch>
    </div>
  )
}

/**
 * style传入一个对象，--switch-on-color表示on状态的背景颜色，--switch-off-color表示off状态的背景颜色
 */
// 自定义颜色
export const ColorTest = function () {
  const [value, setValue] = useState(true)
  const colors = { '--switch-on-color': "#13ce66", "--switch-off-color": "#ff4949" }
  return (
    <div>
      <FSwitch onChange={() => setValue(!value)} size='medium' value={value} style={colors}></FSwitch>&nbsp;
      <FSwitch onChange={() => setValue(!value)} size='small' value={value}></FSwitch>&nbsp;
    </div>
  )
}

/**
 * width：number
 * height: number
 */
// 自定义宽高
export const WidthTest = function () {
  const [value, setValue] = useState(true)
  return (
    <div>
      <FSwitch onChange={() => setValue(!value)} size='medium' value={value} width={100} height={50} activeText='Openhhhhh' inactiveText='Close' inline></FSwitch>&nbsp;
      <FSwitch onChange={() => setValue(!value)} size='small' value={value}></FSwitch>&nbsp;
    </div>
  )
}

// 文本描述
export const TextTest = function () {
  const [value, setValue] = useState(true)

  setTimeout(() => {
    setValue(false)
    // console.log("定时器change：", value);

  }, 3000)
  return (
    <div>
      <FSwitch onChange={() => setValue(!value)} size='medium' value={value} activeText='Open' inactiveText='Close'></FSwitch><br /><br />
      <FSwitch onChange={() => setValue(!value)} size='medium' value={value} activeText='Openhhhhh' inactiveText='Close' inline></FSwitch><br /><br />
      <FSwitch onChange={() => setValue(!value)} size='small' value={value} width={50} activeText='Openhhhhhhhhhhh' inactiveText='Close' inline></FSwitch><br />
    </div>
  )
}


/**
 * 你可以设置 active-value 和 inactive-value 属性， 它们接受 Boolean、String 或 Number 类型的值。
 * active-value默认为true，inactive-value默认为false
 */
// 扩展的value类型
export const ValueTest = function () {
  const [value1, setValue1] = useState<SwitchValue>(true)
  const [value2, setValue2] = useState<SwitchValue>(100)
  const [value3, setValue3] = useState<SwitchValue>('Yes')

  return (

    <div>
      <div>
        <span>value1:{value1.toString()}</span>&nbsp;&nbsp;&nbsp;<FSwitch onChange={(value) => setValue1(value)} size='medium' value={value1} ></FSwitch>
      </div>
      <div>
        <span>value2:{value2}</span>&nbsp;&nbsp;&nbsp;<FSwitch onChange={(value) => setValue2(value)} size='medium' value={value2} activeValue={100} inactiveValue={999}></FSwitch>
      </div>
      <div>
        <span>value3:{value3}</span>&nbsp;&nbsp;&nbsp;<FSwitch onChange={(value) => setValue3(value)} size='small' value={value3} activeText='Yes' inactiveText='No' activeValue='Yes' inactiveValue='No'></FSwitch>
      </div>
    </div>
  )
}

// 禁用
export const DisabledTest = function () {
  const [value1, setValue1] = useState(true)

  return (
    <FSwitch onChange={(value) => setValue1(value as boolean)} value={value1} disabled></FSwitch>
  )
}

// 阻止切换-(待完善)
export const BeforeChangeTest = function () {
  const [value1, setValue1] = useState<SwitchValue>(true)

  return (
    <div>
      <h5>直接传false</h5>
      <FSwitch onChange={(value) => setValue1(value)} value={value1} beforeChange={false}></FSwitch>
      <h5>期约被拒绝</h5>
      <FSwitch onChange={(value) => setValue1(value)} value={value1} beforeChange={() => Promise.reject()}></FSwitch>
      <h5>期约返回值为true</h5>
      <FSwitch onChange={(value) => setValue1(value)} value={value1} beforeChange={() => Promise.resolve(true)}></FSwitch>
      <h5>期约返回值为false</h5>
      <FSwitch onChange={(value) => setValue1(value)} value={value1} beforeChange={() => Promise.resolve(false)}></FSwitch>
    </div>
  )
}

// 加载状态
export const LoadingTest = function () {
  const [value1, setValue1] = useState<SwitchValue>(true)
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <FSwitch onChange={(value) => {
        setLoading(true)
        setTimeout(() => {
          setValue1(value)
          setLoading(false)
        }, 3000)
      }} value={value1} loading={loading}></FSwitch>

    </div>
  )
}

