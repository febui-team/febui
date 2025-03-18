/**
 * @description 抽屉（FDrawer）
 * @file drawer.tsx
 * @author linqinzhong
 * @date 2025/03/17 22:31:40
 */
import { FButton } from "#/base/button/FButton"
import { FDrawer } from "#/notice/drawer/FDrawer"
import React, { useState } from "react"

// 测试
export const FDrawerTest = function () {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)

  return (<>
    <FButton onClick={() => {
      setVisible1(true)
    }}>右边弹出</FButton>
    <FDrawer showCancel showConfirm closeOnClickModal visible={visible1} onClose={() => {
      setVisible1(false)
    }} />
    <FButton onClick={() => {
      setVisible2(true)
    }}>左边弹出</FButton>
    <FDrawer showCancel showConfirm closeOnClickModal direction="ltr" visible={visible2} onClose={() => {
      setVisible2(false)
    }} />

    <FButton onClick={() => {
      setVisible3(true)
    }}>上边弹出</FButton>
    <FDrawer showCancel showConfirm closeOnClickModal direction="ttb" visible={visible3} onClose={() => {
      setVisible3(false)
    }} />

    <FButton onClick={() => {
      setVisible4(true)
    }}>下边弹出</FButton>
    <FDrawer showCancel showConfirm closeOnClickModal direction="btt" visible={visible4} onClose={() => {
      setVisible4(false)
    }} />
  </>)
}