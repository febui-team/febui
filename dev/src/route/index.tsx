import React, { useState } from 'react'
// @ts-ignore
import { routes } from './route'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import { FLayout } from '#/layout/layout/FLayout'
import { FLayoutAside } from '#/layout/layout/FLayoutAside'
import { FLayoutContent } from '#/layout/layout/FLayoutContent'
import { FLayoutHead } from '#/layout/layout/FLayoutHead'
import { FLayoutFooter } from '#/layout/layout/FLayoutFooter'
import { FButton } from '#/base/button/FButton'
import { FMenu } from '#/nav/menu/FMenu'
import { toast } from '@/api/toast'
import { FIconMessage } from '+/FIconMessage'
import { FMenuItem } from '@/types/menu'

export const FebRoutes = function () {
    let tag = 0
    const location = useLocation()
    const nav = useNavigate()
    const [current, setCurrent] = useState(location.pathname)
    const [asidePosition, setAsidePosition] = useState<"left" | "right">('left')
    const menus: FMenuItem[] = [
        {
            name: 'docs',
            label: '文档',
            children: [
                {
                    name: 'about',
                    label: '关于FEB-UI',
                    disabled: true
                },
                {
                    name: 'dev',
                    label: '如何开发',
                    disabled: true
                }
            ]
        },
        {
            name: 'test',
            label: '组件',
            children: routes.map(
                (route: any) => {
                    return {
                        name: route.path,
                        label: route.label
                    }
                }
            )
        },
        {
            name: 'tools',
            label: '工具',
            children: [
                {
                    name: 'generate-icon',
                    label: 'Icon生成工具',
                    disabled: true
                }
            ]
        }
    ]

    return (
        <div id="feb-ui-demo" style={{
            height: '100vh',
            width: '100vw',
            background: "var(--text-color-16)",
            overflowY: 'scroll',
            overflowX: 'hidden'
        }}>
            <FLayout style={{
                height: '100%',
                width: '100%',
            }}>
                <FLayoutHead height={50} showDiv style={{ background: 'var(--text-color-16)', justifyContent: 'space-between' }}>
                    <div>FEB-UI组件库 - 开发调试工具</div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <span>侧边栏位置</span>
                        <FButton size='small' shape='circle' type='primary' variant="dashed" onClick={
                            () => {
                                tag = Math.abs(tag - 1)
                                setAsidePosition(tag === 0 ? 'left' : 'right')
                            }
                        }>{asidePosition === 'left' ? '左' : '右'}</FButton>
                    </div>
                </FLayoutHead>
                <FLayoutAside position={asidePosition} width={200} sticky showDiv style={
                    {
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'var(--text-color-16)',
                        lineHeight: 2
                    }
                }>
                    {
                        <FMenu default={current} onChange={(c) => {
                            setCurrent(c)
                            nav(c)
                        }} group items={menus}></FMenu>
                    }
                </FLayoutAside>
                <FLayoutContent style={{
                    padding: 50
                }}>
                    <div>
                        {useRoutes(routes)}
                        <div onClick={() => {
                            toast.warn('糟糕，还没做好')
                        }} style={{
                            width: 50,
                            height: 50,
                            position: 'fixed',
                            bottom: 100,
                            right: 50,
                            padding: 12,
                            boxSizing: 'border-box',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--text-color-16)',
                            boxShadow: '1px 1px 5px #555',
                            cursor: 'pointer',
                            borderRadius: 50,
                        }}>
                            <FIconMessage />
                        </div>
                    </div>
                </FLayoutContent>
                <FLayoutFooter style={{ textAlign: 'center', background: 'var(--text-color-15)', color: 'var(--text-color-5)' }} showDiv>
                    <p>FEB-UI是一个React生态的组件库，巴拉巴拉~</p>
                    <p>copyright © Feb-ui Developer 2025</p>
                </FLayoutFooter>
            </FLayout>
        </div>
    )
}