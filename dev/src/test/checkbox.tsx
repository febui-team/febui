/**
 * @description 复选框（FCheckbox）
 * @file FCheckbox.tsx
 * @author xiaotong.wen
 */

import React, { useState } from "react"
import { FCheckbox } from "#/form/checkbox/FCheckBox"
import FSwitch from "#/form/switch/FSwitch"
import { FButton } from "#/base/button/FButton"
import { CheckboxValue } from "@/types/checkbox"

// 基础复选框
export const BaseTest = function () {
    return (
        <div style={{ display: "flex", width: '800px', height: '30px', backgroundColor: '#fff', padding: '10px', alignItems: 'center', gap: '20px' }}>
            <FCheckbox label="选中" checked />
            <FCheckbox label="半选中" indeterminate />
            <FCheckbox label="未选中" />
            <FCheckbox label="选中-禁用" checked disabled />
            <FCheckbox label="半选中-禁用" indeterminate disabled />
            <FCheckbox label="未选中-禁用" disabled />
        </div>
    )
}

// 基础配置
export const ConfigTest = function () {

    const [indeterminate, setIndeterminate] = useState<boolean>(false)
    const [checked, setChecked] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [readonly, setReadonly] = useState<boolean>(false)


    return (
        <div style={{ display: "flex", width: '800px', height: '120px', backgroundColor: '#fff', padding: '10px' }}>
            <div className="left" style={{ width: "70%", margin: "auto", paddingLeft: '100px' }}>
                <FCheckbox indeterminate={indeterminate} checked={checked} disabled={disabled} readonly={readonly}>复选框</FCheckbox>
            </div>
            <div className="right" style={{ width: "30%" }}>
                <div className="item" style={{ display: "flex", alignItems: "center", justifyContent: "div-between", height: "30px" }}>
                    <span>indeterminate</span>
                    <FSwitch onChange={(v) => setIndeterminate(v as boolean)} size='small' value={indeterminate}></FSwitch>
                </div>
                <div className="item" style={{ display: "flex", alignItems: "center", justifyContent: "div-between", height: "30px" }}>
                    <span>checked</span>
                    <FSwitch onChange={(v) => setChecked(v as boolean)} size='small' value={checked}></FSwitch>
                </div>
                <div className="item" style={{ display: "flex", alignItems: "center", justifyContent: "div-between", height: "30px" }}>
                    <span>disabled</span>
                    <FSwitch onChange={(v) => setDisabled(v as boolean)} size='small' value={disabled}></FSwitch>
                </div>
                <div className="item" style={{ display: "flex", alignItems: "center", justifyContent: "div-between", height: "30px" }}>
                    <span>readonly</span>
                    <FSwitch onChange={(v) => setReadonly(v as boolean)} size='small' value={readonly}></FSwitch>
                </div>
            </div>
        </div>
    )
}


// 联动多选框
export const FCheckboxControlledTest = function () {
    const [checked, setChecked] = useState(false);
    return (
        <div style={{ width: '800px', height: '70px', backgroundColor: '#fff', padding: '10px' }}>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                <FCheckbox checked={checked}>腾讯云A</FCheckbox>
                <FCheckbox checked={checked}>腾讯云B</FCheckbox>
                <FCheckbox checked={checked}>腾讯云C</FCheckbox>
            </div>

            <div style={{ display: 'flex' }}>
                <FButton onClick={() => setChecked(false)}>重置</FButton>
                <FButton type="primary" style={{ marginLeft: 16 }} onClick={() => setChecked(true)}>
                    全选
                </FButton>
            </div>
        </div>
    );
}

// 成组的多选框组
export const GroupTest = function () {
    const options1 = [{ label: '选项1', value: 1, disabled: true }, { label: '选项2', value: 2, readonly: true }, { label: '选项3', value: 3 }, { label: '选项4', value: 4 }]
    const [value2, setValue2] = useState<CheckboxValue[]>([])
    function handleChange(v: CheckboxValue[], c: {}) {
        setValue2(v)
    }

    const options2 = [{ label: '广州', value: '广州' }, { label: '深圳', value: '深圳' }, { label: '上海', value: '上海' }, { label: '北京', value: '北京' }, { label: '全选', value: '', checkAll: true }]
    const [value3, setValue3] = useState<CheckboxValue[]>([])

    return <div style={{ width: '800px', height: '120px', backgroundColor: '#fff', padding: '10px', alignItems: 'center' }}>
        <FCheckbox.Group options={options1} value={value2} onChange={(v, c) => handleChange(v, c)} /> <br />

        <div>选中的值有：{value3.join(',')}</div><br />
        <FCheckbox.Group options={options2} value={value3} onChange={(v) => setValue3(v)} /> <br />
    </div>
}

// 受控与非受控多选框
export const CheckboxTest = function () {
    const [value, setValue] = useState(false);

    return (
        <div style={{ display: "flex", width: '800px', height: '50px', backgroundColor: '#fff', gap: '20px', alignItems: 'center', padding: '10px' }}>
            <FCheckbox checked={value} onChange={(v) => setValue(v === 'checked' ? true : false)}>
                受控属性
            </FCheckbox>
            <FCheckbox defaultChecked={true}>非受控属性</FCheckbox>
        </div>
    );
}

// 最多可选
export const MaxTest = function () {
    const options = [{ label: '选项1', value: 1 }, { label: '选项2', value: 2 }, { label: '选项3', value: 3 }, { label: '选项4', value: 4 }]
    const [value1, setValue1] = useState<CheckboxValue[]>([])
    const [count, setCount] = useState(1)

    function add() {
        console.log(count);
        setCount(count + 1)
    }
    function subtract() {
        console.log(count);
        if (count > 1) {
            setCount(count - 1)
        }
    }


    return (
        <div style={{ width: '800px', height: '100px', backgroundColor: '#fff', padding: '10px' }}>
            <div style={{ display: "flex", gap: "20px", marginBottom: '20px' }}>
                {`最多可选：${count}`}
                <FButton type="primary" onClick={add}>增加</FButton>
                <FButton type="primary" onClick={subtract}>减少</FButton>
            </div>
            <FCheckbox.Group max={count} options={options} value={value1} onChange={(v) => setValue1(v)} /> <br />
        </div>
    );
}