/**
 * @description 布局组件（FLayout）
 * @file layout.tsx
 * @author linqin.zhong
 * @date 2025/01/25 15:29:49
*/
import React from "react"
import { FLayout } from "#/layout/layout/FLayout"
import { FLayoutHead } from "#/layout/layout/FLayoutHead"
import { FLayoutAside } from "#/layout/layout/FLayoutAside"
import { FLayoutContent } from "#/layout/layout/FLayoutContent"
import { FLayoutFooter } from "#/layout/layout/FLayoutFooter"


// 默认
export const DefaultTest = function () {
  return (
    <FLayout style={{ height: 200 }} >
      <FLayoutHead style={
        {
          background: 'var(--primary-color-8)',
          color: 'var(--text-color-16)'
        }
      }>
        顶部
      </FLayoutHead>
      <FLayoutAside style={
        {
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          background: 'var(--primary-color-14)',
          color: 'var(--text-color-16)'
        }
      }>
        侧边栏
      </FLayoutAside>
      <FLayoutContent style={
        {
          background: 'var(--primary-color-16)',
          color: 'var(--text-color-1)'
        }
      }>内容区</FLayoutContent>
      <FLayoutFooter style={
        {
          background: 'var(--primary-color-8)',
          color: 'var(--text-color-16)'
        }
      }>底部</FLayoutFooter>
    </FLayout>
  )
}

// 侧边栏在右侧
export const ASideTest = function () {
  return (
    <FLayout style={{ height: 200 }} >
      <FLayoutHead style={
        {
          background: 'var(--primary-color-8)',
          color: 'var(--text-color-16)'
        }
      }>
        顶部
      </FLayoutHead>
      <FLayoutAside position="right" style={
        {
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          background: 'var(--primary-color-14)',
          color: 'var(--text-color-16)'
        }
      }>
        侧边栏
      </FLayoutAside>
      <FLayoutContent style={
        {
          background: 'var(--primary-color-16)',
          color: 'var(--text-color-1)'
        }
      }>内容区</FLayoutContent>
      <FLayoutFooter style={
        {
          background: 'var(--primary-color-8)',
          color: 'var(--text-color-16)'
        }
      }>底部</FLayoutFooter>
    </FLayout>
  )
}

// 显示边界
export const DivTest = function () {
  return (
    <FLayout style={{ height: 200 }}>
      <FLayoutHead showDiv>
        顶部
      </FLayoutHead>
      <FLayoutAside showDiv>
        侧边栏
      </FLayoutAside>
      <FLayoutContent>内容区</FLayoutContent>
      <FLayoutFooter showDiv>底部</FLayoutFooter>
    </FLayout>
  )
}

// 只显示顶部和内容区
export const Test1 = function () {
  return (
    <FLayout style={{ height: 200 }} >
      <FLayoutHead style={
        {
          background: 'var(--primary-color-8)',
          color: 'var(--text-color-16)'
        }
      }>
        顶部
      </FLayoutHead>
      <FLayoutContent style={
        {
          background: 'var(--primary-color-16)',
          color: 'var(--text-color-1)'
        }
      }>内容区</FLayoutContent>
    </FLayout>
  )
}

// 只显示侧边栏和内容区
export const Test2 = function () {
  return (
    <FLayout style={{ height: 200 }} >
      <FLayoutAside style={
        {
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          background: 'var(--primary-color-5)',
          color: 'var(--text-color-16)'
        }
      }>
        侧边栏
      </FLayoutAside>
      <FLayoutContent style={
        {
          background: 'var(--primary-color-16)',
          color: 'var(--text-color-1)'
        }
      }>内容区</FLayoutContent>
    </FLayout>
  )
}

// 只显示底部和内容区
export const Test3 = function () {
  return (
    <FLayout style={{ height: 200 }} >
      <FLayoutContent style={
        {
          background: 'var(--primary-color-16)',
          color: 'var(--text-color-1)'
        }
      }>内容区</FLayoutContent>
      <FLayoutFooter style={
        {
          background: 'var(--primary-color-5)',
          color: 'var(--text-color-16)'
        }
      }>底部</FLayoutFooter>
    </FLayout>
  )
}