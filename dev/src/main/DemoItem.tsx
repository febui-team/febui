// @ts-nocheck
import React, { ReactNode, useState } from "react"
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-tsx'
import { FButton } from "#/base/button/FButton";
import { FDrawer } from "#/notice/drawer/FDrawer";
import styles from './demo.module.less'
import 'ace-builds/src-noconflict/theme-tomorrow';

export const DemoItem: React.FC<{ value: string, view: ReactNode, title: string }> = ({ title, view, value }) => {
    const [show, setShow] = useState(false)
    // 反转义value字符串，包括HTML实体
    value = React.useMemo(() => {
        return value.replace(/\\n/g, '\n')
            .replace(/\\t/g, '\t')
            .replace(/\\r/g, '\r')
            .replace(/\\"/g, '"')
            .replace(/\\'/g, "'")
            .replace(/\\\\/g, '\\')
            .replace(/&gt;/g, '>')
            .replace(/&lt;/g, '<')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&nbsp;/g, ' ');
    }, [value])
    return <div className={styles['demo-item']}>
        <div className={styles['head']}>
            <div className={styles['title']}>{title}</div>
            <FButton variant="text" size="small" onClick={() => {
                setShow(true)
            }} >查看代码</FButton>
        </div>
        <div className={styles['body']}>
            {view}
        </div>
        <FDrawer closeOnClickModal title={title} showClose onClose={() => {
            setShow(false)
        }} visible={show} content={<AceEditor
            theme="tomorrow"
            mode='tsx'
            readOnly
            fontSize={16}
            height="100%"
            width="100%"
            value={value}
            wrapEnabled
        />} />
    </div>
}