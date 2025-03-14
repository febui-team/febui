/**
 * @description 菜单（FMenu）
 * @file xxx.tsx
 * @author linqin.zhong
 * @date 2025/01/27 14:19:34
*/
import React, { useState } from "react"
import { FMenu } from "#/nav/menu/FMenu"
import { FIconDeleteFour } from "#/icons/FIconDeleteFour"
import { FIconUser } from "#/icons/FIconUser"
import { FIconBankCard } from "#/icons/FIconBankCard"
import { FIconSafety } from "#/icons/FIconSafety"
import { FIconSettingOne } from "#/icons/FIconSettingOne"
import { FIconSystem } from "#/icons/FIconSystem"
import { FIconDataSheet } from "#/icons/FIconDataSheet"
import { FIconData } from "#/icons/FIconData"
import { FIconChartLine } from "#/icons/FIconChartLine"
import { FButton } from "#/base/button/FButton"
import { FMenuItem } from "@/types/menu"
// 基础使用
export const FMenuTest = function () {
  const [current, setCurrent] = useState('pork')
  const items: FMenuItem[] = [
    {
      name: 'cars',
      label: '汽车'
    },
    {
      name: 'foods',
      label: '食物',
      children: [
        {
          name: 'meta',
          label: '肉类',
          children: [
            {
              name: 'chicken',
              label: '鸡肉'
            },
            {
              name: 'beef',
              label: '牛肉'
            }, {
              name: 'pork',
              label: '猪肉'
            }
          ]
        },
        {
          name: 'vegetable',
          label: '蔬菜',
          children: [
            {
              name: 'cabbage',
              label: '卷心菜'
            },
            {
              name: 'onion',
              label: '洋葱'
            }
          ]
        },
        {
          name: 'fruit',
          label: '水果',
          children: []
        },
        {
          name: 'hot-strip',
          label: '辣条'
        }
      ]
    },
    {
      name: 'colors',
      label: '颜色',
      children: [
        {
          name: 'blue',
          label: '蓝色'
        }, {
          name: 'red',
          label: '红色'
        }, {
          name: 'purple',
          label: '紫色'
        }, {
          name: 'black',
          label: '黑色',
          disabled: true
        }
      ]
    }
  ]
  return (
    <div>
      <div style={{ height: 30 }}>当前选中的：{current}</div>
      <FMenu onChange={setCurrent} default={current} style={{ width: 200 }} items={items}></FMenu>
    </div>
  )
}

// 带分组
export const GroupTest = function () {
  const [current, setCurrent] = useState('pork')
  const items: FMenuItem[] = [
    {
      name: 'cars',
      label: '汽车',
      children: [
        {
          name: 'bench',
          label: '奔驰'
        },
        {
          name: 'bmw',
          label: '宝马'
        }, {
          name: 'byd',
          label: '比亚迪'
        }
      ]
    },
    {
      name: 'foods',
      label: '食物',
      children: [
        {
          name: 'meta',
          label: '肉类',
          children: [
            {
              name: 'chicken',
              label: '鸡肉',
              children: [
                {
                  name: 'chicken-breast',
                  label: '鸡胸肉'
                },
                {
                  name: 'chicken-wings',
                  label: '鸡翅'
                }
              ]
            },
            {
              name: 'beef',
              label: '牛肉'
            }, {
              name: 'pork',
              label: '猪肉'
            }
          ]
        },
        {
          name: 'vegetable',
          label: '蔬菜',
          children: [
            {
              name: 'cabbage',
              label: '卷心菜'
            },
            {
              name: 'onion',
              label: '洋葱'
            }
          ]
        }
      ]
    },
    {
      name: 'colors',
      label: '颜色',
      children: [
        {
          name: 'blue',
          label: '蓝色'
        }, {
          name: 'red',
          label: '红色'
        }, {
          name: 'purple',
          label: '紫色'
        }
      ]
    }
  ]
  return (
    <div>
      <div style={{ height: 30 }}>当前选中的：{current}</div>
      <FMenu onChange={setCurrent} group default={current} style={{ width: 200 }} items={items}></FMenu>
    </div>
  )
}

// 带图标
export const FMenuIconTest = function () {
  const [current, setCurrent] = useState('data')
  const items: FMenuItem[] = [
    {
      name: 'account',
      icon: FIconUser,
      label: '账户管理',
      children: [
        {
          name: 'balance',
          icon: FIconBankCard,
          label: '余额'
        }, {
          name: 'safety',
          icon: FIconSafety,
          label: '安全'
        }
      ]
    },
    {
      name: 'system',
      icon: FIconSystem,
      label: '系统管理',
      children: [
        {
          name: 'dashboard',
          label: '仪表盘',
          icon: FIconDataSheet
        }, {
          name: 'data',
          label: '数据',
          icon: FIconData
        }, {
          name: 'visual',
          label: '可视化',
          icon: FIconChartLine
        }
      ]
    },
    {
      name: 'setting',
      icon: FIconSettingOne,
      label: '设置',
      children: [
        {
          name: 'reuse',
          icon: FIconDeleteFour,
          label: '回收站'
        }
      ]
    }
  ]
  return (
    <div>
      <div style={{ height: 30 }}>当前选中的：{current}</div>
      <FMenu onChange={setCurrent} default={current} style={{ width: 200 }} items={items}></FMenu>
    </div>
  )
}

// 可折叠
export const CollapseTest = function () {

  let status = false
  const [collapsed, setCollapsed] = useState(status)
  const [current, setCurrent] = useState('password')
  const items: FMenuItem[] = [
    {
      name: 'account',
      icon: FIconUser,
      label: '账户管理',
      children: [
        {
          name: 'balance',
          icon: FIconBankCard,
          label: '余额'
        }, {
          name: 'safety',
          icon: FIconSafety,
          label: '安全',
          children: [
            {
              name: 'password',
              label: '密码'
            }, {
              name: 'access',
              label: '权限'
            }, {
              name: 'device',
              label: '登录设备'
            }
          ]
        }
      ]
    },
    {
      name: 'system',
      icon: FIconSystem,
      label: '系统管理',
      children: [
        {
          name: 'dashboard',
          label: '仪表盘',
          icon: FIconDataSheet
        }, {
          name: 'data',
          label: '数据',
          icon: FIconData
        }, {
          name: 'visual',
          label: '可视化',
          icon: FIconChartLine
        }
      ]
    },
    {
      name: 'setting',
      icon: FIconSettingOne,
      label: '设置',
      children: [
        {
          name: 'reuse',
          icon: FIconDeleteFour,
          label: '回收站'
        }
      ]
    }
  ]
  const onClick = () => {
    setCollapsed(status = !status)
  }
  return (
    <div>
      <div style={{ height: 30 }}>当前选中的：{current}</div>
      <FMenu collapsed={collapsed} onChange={setCurrent} default={current} style={{ width: 200 }} items={items}></FMenu>
      <FButton variant="text" type="primary" onClick={onClick}>展开</FButton>
    </div>
  )
}