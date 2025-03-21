/**
 * @description 进度条（FProgress）
 * @file progress.tsx
 * @author linqin.zhong
 * @date 2025/02/01 16:17:53
*/
import React, { useState } from "react"
import { FProgress } from "#/display/progress/FProgress"
import { FButton } from "#/base/button/FButton"

// 默认使用
export const FProgressTest = function () {
  let v = 0

  const [task, setTask] = useState<any>(null)
  const [value, setValue] = useState(v)
  const increase = () => {
    if (v === 100) {
      setValue(v = 0)
    }
    if (task) {
      clearInterval(task)
      setTask(task)
    }
    setTask(
      setInterval(() => {
        setValue(++v)
        if (task && v >= 100) clearInterval(task)
      }, 50 + Math.random() * 50)
    )
  }
  return (<>
    <FButton onClick={increase}>播放</FButton>
    <FProgress value={value}></FProgress>
  </>)
}

// 不同主题
export const ThemeTest = function () {
  let v = 0

  const [task, setTask] = useState<any>(null)
  const [value, setValue] = useState(v)
  const increase = () => {
    if (v === 100) {
      setValue(v = 0)
    }
    if (task) {
      clearInterval(task)
      setTask(task)
    }
    setTask(
      setInterval(() => {
        setValue(++v)
        if (task && v >= 100) clearInterval(task)
      }, 50 + Math.random() * 50)
    )
  }
  return (<>
    <FButton onClick={increase}>播放</FButton>
    <FProgress value={value}></FProgress>
    <FProgress theme="safe" value={value}></FProgress>
    <FProgress theme="danger" value={value}></FProgress>
    <FProgress theme="warn" value={value}></FProgress>
  </>)
}

// 自定义精度
export const Test2 = function () {
  let v = 0

  const [task, setTask] = useState<any>(null)
  const [value, setValue] = useState(v)
  const increase = () => {
    if (v === 100) {
      setValue(v = 0)
    }
    if (task) {
      clearInterval(task)
      setTask(task)
    }
    setTask(
      setInterval(() => {
        setValue(++v)
        if (task && v >= 100) clearInterval(task)
      }, 50 + Math.random() * 50)
    )
  }
  return (<>
    <FButton onClick={increase}>播放</FButton>
    <FProgress value={value} digits={1}></FProgress>
    <FProgress value={value} digits={2}></FProgress>
    <FProgress value={value} digits={3}></FProgress>
  </>)
}

// 文字显示在内部
export const Test3 = function () {
  let v = 0

  const [task, setTask] = useState<any>(null)
  const [value, setValue] = useState(v)
  const increase = () => {
    if (v === 100) {
      setValue(v = 0)
    }
    if (task) {
      clearInterval(task)
      setTask(task)
    }
    setTask(
      setInterval(() => {
        setValue(++v)
        if (task && v >= 100) clearInterval(task)
      }, 50 + Math.random() * 50)
    )
  }
  return (<>
    <FButton onClick={increase}>播放</FButton>
    <FProgress strokeWidth={2} type="inner" value={value}></FProgress>
  </>)
}
