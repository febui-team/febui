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
import { febDialog } from "@/api/dialog"
import { FIconUser } from "+/FIconUser"
import { FIconSuccessFilled } from "+/FIconSuccessFilled"

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

// API调用
export const ApiTest = function () {
  return (<div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
    <FButton variant="outline" type="primary" onClick={() => {
      febDialog({
        title: '这是标题',
        content: '这是内容',
      }).then(() => {
        toast('点击确定')
      })
    }}>常规调用</FButton>
    <FButton variant="outline" type="primary" onClick={() => {
      febDialog({
        title: '这是标题',
        content: '这是内容',
        showClose: true
      }).then((res) => {
        toast(res ? '确定' : '关闭')
      })
    }}>显示关闭按钮</FButton>
     <FButton variant="outline" type="primary" onClick={() => {
      febDialog({
        title: '这是标题',
        content: '这是内容',
        showCancel: true
      }).then((res) => {
        toast(res ? '确定' : '取消')
      })
    }}>显示取消按钮</FButton>
    <FButton variant="outline" type="primary" onClick={() => {
      febDialog({
        title: '这是标题',
        content: '这是内容',
        showCancel: true,
        throwReject: true
      }).then(() => {
        toast('点击确定')
      }).catch(() => {
        toast.fail('被拒绝')
      })
    }}>捕捉拒绝事件</FButton>
    <FButton variant="outline" type="primary" onClick={() => {
      febDialog({
        title: '这是标题',
        content: '这是内容',
        showCancel: true,
        confirmText: '批了',
        cancelText: '朕不许'
      })
    }}>自定义按钮文字</FButton>
    <FButton variant="outline" type="primary" onClick={() => {
      febDialog({
        title: '警告',
        content: '真的要删除这个文件吗？',
        showCancel: true,
        confirmType: 'danger',
        cancelType: 'safe',
        confirmVariant: 'outline',
      })
    }}>自定义按钮样式</FButton>
    <FButton variant="outline" type="primary" onClick={() => {
      febDialog({
        title: '新好友提醒',
        titleIcon: FIconUser,
        titleIconColor: 'var(--primary-color-8)',
        content: '小明请求加您为好友。',
        showCancel: true,
        confirmText: '通过',
        cancelText: '拒绝'
      })
    }}>标题带图标</FButton>
  </div>)
}

// API快捷调用
export const QuickConvenientTest = function (){
  return (<div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
    <FButton variant="outline" type="primary" onClick={
      () => {
        febDialog.alert('请求成功','审批已提交，预计7个工作日内处理，请耐心等待')
      }
    }>提醒</FButton>
    <FButton variant="outline" type="primary" onClick={
      () => {
        febDialog.confirm('提醒','您的审批已通过，是否前往查看？','primary')
      }
    }>主题询问</FButton>
    <FButton variant="outline" type="default" onClick={
      () => {
        febDialog.confirm('亲爱的用户：','您觉得我们的组件库好用吗，好用的话麻烦给个好评可以不？','default')
      }
    }>默认询问</FButton>
    <FButton variant="outline" type="warn" onClick={
      () => {
        febDialog.confirm('警告','你的网络环境不安全，确定要继续操作吗？','warn')
      }
    }>警告询问</FButton>
    <FButton variant="outline" type="danger" onClick={
      () => {
        febDialog.confirm('警告','删除后图片不可恢复，请确定是否继续？','danger')
      }
    }>危险询问</FButton>
    </div>)
}