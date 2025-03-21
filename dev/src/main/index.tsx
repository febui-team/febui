import React, { useState } from 'react'
// @ts-ignore
import { routes } from './route'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import { FLayout } from '#/layout/layout/FLayout'
import { FLayoutAside } from '#/layout/layout/FLayoutAside'
import { FLayoutContent } from '#/layout/layout/FLayoutContent'
import { FLayoutHead } from '#/layout/layout/FLayoutHead'
import { FLayoutFooter } from '#/layout/layout/FLayoutFooter'
import { FMenu } from '#/nav/menu/FMenu'
import { toast } from '@/api/toast'
import { FIconMessage } from '+/FIconMessage'
import { FMenuItem } from '@/types/menu'
import { QuickStart } from './pages/quickstart'
import { DevTeaching } from './pages/dev-teaching'
import { About } from './pages/about'
import { FIconGithub } from '+/FIconGithub'
import headStyles from './header.module.less'
import FSwitch from '#/form/switch/FSwitch'
import { FIconNpm } from '+/FIconNpm'
import { classnames } from '@/utils/class.util'
import FRadio from '#/form/radio/FRadio'
import { RadioValue } from '@/types/radio'
export const FebRoutes = function () {
    let tag = 0
    const location = useLocation()
    const nav = useNavigate()
    const [current, setCurrent] = useState(location.pathname)
    const [asidePosition, setAsidePosition] = useState<RadioValue>('left')
    const docs = [{
        name: 'docs',
        label: '文档',
        children: [
            {
                name: 'about',
                path: '/about',
                label: '关于FEB-UI',
                element: <About />
            },
            {
                name: 'quickstart',
                path: '/quickstart',
                label: '快速开始',
                element: <QuickStart></QuickStart>
            },
            {
                name: 'dev',
                path: '/dev',
                label: '如何开发',
                element: <DevTeaching></DevTeaching>
            }
        ]
    }]
    const menus: FMenuItem[] = [
        ...docs,
        {
            name: 'components',
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
                <FLayoutHead height={50} showDiv className={headStyles['header']}>

                    <div className={headStyles['left']}>
                        <div>FebUi桌面组件库(For React19, 建设中...)</div>

                    </div>
                    <div className={headStyles['right']}>
                        <FIconGithub onClick={() => {
                            window.open('https://github.com/febui-team/febui', '__blank')
                        }} className={classnames(headStyles['icon'], headStyles['github'])}></FIconGithub>
                        <span>|</span>
                        <FIconNpm onClick={() => {
                            window.open('https://www.npmjs.com/package/febui-react', '__blank')
                        }} className={classnames(headStyles['icon'], headStyles['npm'])}></FIconNpm>
                        <span>|</span>
                        <span>菜单位置</span>
                        <FRadio.Group options={[
                            {
                                label: '左',
                                value: 'left'
                            },{
                                label: '右',
                                value: 'right'
                            }
                        ]} type='button' variant='primary-filled' value={asidePosition} onChange={(value) => setAsidePosition(value)} size='small' />
                    </div>
                </FLayoutHead>
                <FLayoutAside position={asidePosition as 'left' | 'right'} width={200} sticky showDiv style={
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
                        {useRoutes([...routes,...docs])}
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