import React, { useState } from "react";
import styles from './style.module.less'
import { classnames } from "@/utils/class.util";
import { FIconNext } from "+/FIconNext";
import { FMenuItem } from "@/types/menu";
import { FebProps } from "@/types/component";
type Props = FebProps<{
  items: FMenuItem[],
  group?: boolean,
  collapsed?: boolean,
  default?: string
  onChange?: (name: string) => void
}>
/**
 * 菜单组件
 * @author linqin.zhong
 * @date 2025/01/27 14:10:13
 */
export const FMenu: React.FC<Props> = function (props) {
  // 一级展开项
  const [openItems1, setOpenItems1] = useState<string[]>([])
  // 二级展开项
  const [openItems2, setOpenItems2] = useState<string[]>([])
  // 活跃项
  const [activeItem, setActiveItem] = useState<string[]>([])
  // 获取菜单项图标
  const getIcon = (item: FMenuItem, className: string) => {
    if (item.icon) {
      const Icon = item.icon
      return <Icon className={className}></Icon>
    }
  }
  // 设置菜单展开状态
  const setOpen = (openItems: string[], set: (name: string[]) => void, name: string) => {
    if (props.collapsed) return
    if (openItems.includes(name)) set(openItems.filter(i => i !== name))
    else set([...openItems, name])
  }
  // 设置活跃项
  const setActive = (names: string[]) => {
    if (props.onChange) {
      props.onChange(names[names.length - 1])
    }
    setActiveItem(names)
  }
  // 解析菜单项
  const parseItems = (items: FMenuItem[]) => {
    return items.map((item) => {
      // 设置默认活跃项
      if (item.name === props.default && !item.children && activeItem.length === 0) setActiveItem([item.name])
      // 菜单是否禁用（设置了disabled 或 有孩子容器但孩子为空）
      const disabled = item.disabled || (item.children && item.children.length === 0)
      return (<div className={
        classnames(
          styles['menu-item'],
          // 是否有孩子
          item.children && styles['has-children'],
          // 是否禁用
          disabled
            // 禁用时选择禁用样式
            ? styles['menu-item-empty-children']
            // 无禁用时，判断是否为展开项
            : openItems1.includes(item.name) && !props.collapsed
              // 展开时选择展开样式
              ? styles['menu-item-open']
              // 无展开时，判断该项或其孩子是否为激活项，是则选择激活样式
              : activeItem.includes(item.name) && styles['menu-item-active']
        )
      }
        key={item.name}>
        <div onClick={
          // 判断是否禁用
          item.disabled || (item.children && item.children.length === 0)
            // 禁用
            ? undefined
            // 判断是否有孩子
            : item.children
              // 有孩子时点击后展开该项子菜单
              ? setOpen.bind(null, openItems1, setOpenItems1, item.name)
              // 无孩子点击后激活该项
              : setActive.bind(null, [item.name])
        } className={styles['menu-item-head']}>
          <div className={styles['menu-item-label']}>
            {getIcon(item, styles['menu-item-icon'])}
            <span>{item.label}</span>
          </div>
          {item.children && <FIconNext className={styles['menu-item-next']}></FIconNext>}
        </div>

        {/* 二级菜单 */}
        <div className={styles['second-menu']}>
          {
            item.children && item.children.map((c) => {
              // 设置默认活跃项
              if (c.name === props.default && !c.children && activeItem.length === 0) {
                setActiveItem([item.name, c.name])
                setOpenItems1([item.name])
              }
              // 菜单是否禁用（设置了disabled 或 有孩子容器但孩子为空）
              const disabled = c.disabled || (c.children && c.children.length === 0)
              return (
                <div className={classnames(
                  styles['second-item'],
                  // 是否有孩子
                  c.children && styles['has-children'],
                  // 是否禁用
                  disabled
                    // 禁用时选择禁用样式
                    ? styles['second-item-empty-children']
                    // 无禁用时，判断是否为展开项
                    : openItems2.includes(c.name) && !props.collapsed
                      // 展开时选择展开样式
                      ? styles['second-item-open']
                      // 无展开时，判断该项或其孩子是否为激活项，是则选择激活样式
                      : activeItem.includes(c.name) && styles['second-item-active']

                )} key={c.name}>
                  <div onClick={
                    // 判断是否禁用
                    c.disabled || (c.children && c.children.length === 0)
                      // 禁用
                      ? undefined
                      // 判断是否有孩子
                      : c.children
                        // 有孩子时点击后展开该项子菜单
                        ? setOpen.bind(null, openItems2, setOpenItems2, c.name)
                        // 无孩子点击后激活该项
                        : setActive.bind(null, [item.name, c.name])
                  } className={styles['second-item-head']}>
                    <div className={styles['second-item-label']}>
                      {getIcon(c, styles['second-item-icon'])}
                      <span>{c.label}</span>
                    </div>
                    {c.children && <FIconNext className={styles['second-item-next']}></FIconNext>}
                  </div>

                  {/* 三级菜单 */}
                  <div className={styles['third-menu']}>
                    {
                      c.children && c.children.map((cc) => {
                        // 菜单是否禁用（设置了disabled）
                        const disabled = cc.disabled
                        // 设置默认活跃项
                        if (cc.name === props.default && activeItem.length === 0) {
                          setActiveItem([item.name, c.name, cc.name])
                          setOpenItems1([item.name])
                          setOpenItems2([c.name])
                        }
                        return (<div className={
                          classnames(
                            styles['third-item'],
                            disabled && styles['third-item-disabled'],
                            activeItem.includes(cc.name) && styles['is-active']
                          )} key={cc.name}>
                          <div
                            onClick={
                              // 判断是否禁用
                              cc.disabled
                                // 禁用
                                ? undefined
                                // 激活
                                : setActive.bind(null, [item.name, c.name, cc.name])
                            }
                            className={styles['third-item-head']}
                          >
                            {cc.label}
                          </div>
                        </div>)
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>)
    })
  }
  return (
    /* 一级菜单 */
    <div style={props.style} className={classnames(
      styles.menu,
      props.collapsed && styles['menu-collapsed'],
      props.className
    )}>
      {
        // 按【是否显示分组】进行不同方案渲染
        props.group
          // 渲染分组后再渲染菜单项
          ? props.items.map((group) => (<div className={styles['menu-group']} key={group.name}>
            <div className={styles['menu-group-label']} >{group.label}</div>
            {group.children && parseItems(group.children)}
          </div>))
          // 只渲染菜单项
          : parseItems(props.items)
      }
    </div>
  )

}