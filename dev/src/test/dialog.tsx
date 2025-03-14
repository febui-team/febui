/**
 * @description 对话框（FDialog）
 * @file dialog.tsx
 * @author linqin.zhong
 * @date 2025/01/29 14:31:23
*/
import React, { useState } from "react"
import { FDialog } from "#/notice/dialog/FDialog"
import { FButton } from "#/base/button/FButton"
import { toast } from "@/api/toast"

// 基础使用
export const FDialogTest = function () {
  const [visible, setVisible] = useState(false)
  return (<div>
    <FButton variant="outline" type="primary" onClick={() => {
      setVisible(true)
    }}>点我</FButton>
    <FDialog
      onConfirm={() => {
        toast.success('确定')
        setVisible(false)
      }}
      onCancel={() => {
        toast.fail('取消')
        setVisible(false)
      }}
      onClose={() => {
        toast('点击关闭按钮')
        setVisible(false)
      }}
      onClickModal={() => {
        toast('点击遮罩')
        setVisible(false)
      }}
      title="这是标题"
      visible={visible}
      content="这是内容">
    </FDialog>
  </div>)
}

// 自定义头部
export const HeaderTest = function () {
  const [visible, setVisible] = useState(false)
  return (<div>
    <FButton variant="outline" type="primary" onClick={() => {
      setVisible(true)
    }}>点我</FButton>
    <FDialog
      onClickModal={() => {
        setVisible(false)
      }}
      header={
        <div style={{
          alignItems: 'center',
          display: 'flex',
          width: "100%",
          height: '40px',
          justifyContent: 'center',
          fontSize: 20
        }}>
          FEB-UI用户协议
        </div>
      }
      visible={visible}
      content={(function () {
        let a = new Array(100)
        for (let i = 0; i < a.length; i++) {
          a[i] = '这是内容'
        }
        return a.join('')
      })()}>
    </FDialog>
  </div>)
}

// 自定义底部
export const FooterTest = function () {
  const [visible, setVisible] = useState(false)
  const select = (ans: string) => {
    if (ans === 'A') {
      toast.success('回答正确')
    } else {
      toast.fail('回答错误')
    }
    setVisible(false)
  }
  return (<div>
    <FButton variant="outline" type="primary" onClick={() => {
      setVisible(true)
    }}>点我</FButton>
    <FDialog
      title="以下选项中合法的 C 语言赋值语句是："
      onClickModal={() => {
        setVisible(false)
      }}
      footer={
        <div style={{
          alignItems: 'center',
          display: 'flex',
          width: "100%",
          height: '40px',
        }}>
          请选择答案：
          <FButton onClick={() => select('A')} type="primary" variant="text" shape="circle" >A</FButton>
          <FButton onClick={() => select('B')} type="primary" variant="text" shape="circle" >B</FButton>
          <FButton onClick={() => select('C')} type="primary" variant="text" shape="circle" >C</FButton>
          <FButton onClick={() => select('D')} type="primary" variant="text" shape="circle" >D</FButton>
        </div>
      }
      visible={visible}>
      <div style={{ lineHeight: 2 }}>
        <div>A） ++i;</div>
        <div>B） a=b=34</div>
        <div>C） a=3,b=9</div>
        <div>D） k=int(a+b);</div>
      </div>
    </FDialog>
  </div>)
}