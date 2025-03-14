// @ts-nocheck
// ts报错，暂时先加个禁用

import React, { useState } from "react";
import { classnames } from "@/utils/class.util"
import styles from "./style.module.less"
import { FIconSelect } from "+/FIconSelect";
import { FIconSemiSelect } from "+/FIconSemiSelect";
import { CheckboxProps, CheckboxGroupPops, CheckboxValue, CheckboxState } from "@/types/checkbox";

/**
 * 复选框组件
 * @author xiaotong.wen
 * @date 2025/02/17 18:20:01
 */
export const FCheckbox: React.FC<CheckboxProps> & { Group: React.FC<CheckboxGroupPops> } = function (props) {

    const { value, checked, indeterminate, disabled = false, label, defaultChecked, readonly = false, name, title, children, onChange, onClick } = props
    const [checkedState, setCheckedState] = React.useState<'none' | 'checked' | 'indeterminate'>(defaultChecked ? 'checked' : 'none')

    const checkboxClass = [
        styles['checkbox'],
        disabled && styles['disabled']
    ]
    const inputClass = [
        styles['checkbox__input'],
        ['checked', 'indeterminate'].includes(checkedState) && styles['selected'],
        disabled && styles['disabled']
    ]
    const iconClass = [
        styles['checkbox__input__icon'],
        disabled && styles['disabled']
    ]


    React.useEffect(() => {
        if (indeterminate) {
            setCheckedState('indeterminate')
        } else if (checked) {
            setCheckedState('checked')
        } else {
            setCheckedState('none')
        }

    }, [checked, indeterminate])

    function handleClick(e: React.SyntheticEvent) {

        // 只要点击都触发
        if (onClick) {
            onClick(value || checkedState, { e })
        }

        if (disabled || readonly) return

        // 非disabled，readonly才触发onChange

        // 非受控
        if (checked === undefined && indeterminate === undefined) {
            if (checkedState === 'checked') {
                setCheckedState('none')
            } else {
                setCheckedState('checked')
            }
            if (onChange) {
                onChange(checkedState, { value: props, e })
            }
        } else {
            if (onChange) {
                if (checkedState === 'checked') {
                    onChange('none', { value: props, e })
                } else {
                    onChange('checked', { value: props, e })
                }
            }
        }

    }

    return (<div className={classnames(...checkboxClass)} onClick={(e) => handleClick(e)}>
        <input className={classnames(styles['checkbox__form'])} name={name} title={title} type="checkbox" />
        <span className={classnames(...inputClass)} >
            {checkedState === 'checked' && <FIconSelect className={classnames(...iconClass)}></FIconSelect>}
            {checkedState === 'indeterminate' && <FIconSemiSelect className={classnames(...iconClass)}></FIconSemiSelect>}
        </span>
        <span className={classnames(styles['checkbox__label'])}>{label || children || ''}</span>
    </div >)
}

const Group: React.FC<CheckboxGroupPops> = function (props) {

    const { disabled = false, max, name, options, value, defaultValue = [], onChange } = props
    const children: { props: any }[] | undefined = props.children

    const [selectedVals, setSelectedVals] = useState<CheckboxValue[]>(defaultValue)

    function itemHandleChange(state: CheckboxState, context: { value: CheckboxProps, e: React.SyntheticEvent }) {

        let values: CheckboxValue[] = [...selectedVals]

        if (state === 'checked') {
            if (max && selectedVals.length >= max) return
            if (context.value.checkAll) {
                values = options?.filter(item => typeof item === 'object' ? (!item.checkAll) : true).map((item) => {
                    if (typeof item === 'object') {
                        if (item.value) {
                            return item.value
                        } else {
                            return 'checkAll'
                        }
                    } else {
                        return item
                    }
                }) || []

            } else {
                if (context.value.value) {
                    values.push(context.value.value)
                }
            }
        } else if (state === 'none') {
            if (context.value.checkAll) {
                values = []
            } else {
                values = values.filter(item => item !== context.value.value)
            }

        }

        // 非受控
        if (value === undefined) {
            setSelectedVals(values)
        }

        if (onChange) {
            onChange(values, {
                current: context.value,
                state: state
            })
        }
    }

    React.useEffect(() => {
        if (value) {
            setSelectedVals([...value])
        }

    }, [value])

    return (
        <div className={styles['checkbox__group']}>
            {
                options && options.map((item, index) => {
                    if (max === selectedVals.length) {
                        if (typeof item === 'object') {
                            return selectedVals.includes(item.value!) ? <FCheckbox key={index} value={item.value} checked={true} onChange={(state, context) => itemHandleChange(state, context)} label={item.label}></FCheckbox>
                                : <FCheckbox key={index} value={item.value} checked={false} onChange={(state, context) => itemHandleChange(state, context)} label={item.label} disabled></FCheckbox>
                        } else {
                            return selectedVals.includes(item) ? <FCheckbox key={index} value={item} checked={true} onChange={(state, context) => itemHandleChange(state, context)} label={item.toString()}></FCheckbox>
                                : <FCheckbox key={index} value={item} checked={false} onChange={(state, context) => itemHandleChange(state, context)} label={item.toString()} disabled></FCheckbox>
                        }
                    }
                    return typeof item === 'object'
                        ? (item.checkAll ? <FCheckbox key={index} {...item} checked={options.length === selectedVals.length + 1} indeterminate={options.length > selectedVals.length + 1 && selectedVals.length > 0} onChange={(state, context) => itemHandleChange(state, context)} name={name} disabled={disabled || item.disabled}></FCheckbox>
                            : <FCheckbox key={index} {...item} checked={item.value !== undefined && selectedVals.includes(item.value)} onChange={(state, context) => itemHandleChange(state, context)} name={name} disabled={disabled || item.disabled}></FCheckbox>
                        )
                        : <FCheckbox key={index} value={item} checked={selectedVals.includes(item)} onChange={(state, context) => itemHandleChange(state, context)} label={item.toString()}></FCheckbox>
                })
            }
            {
                children && children.map((item, index) => {
                    return !item.props.checkAll ?
                        <FCheckbox key={index} {...item.props} onChange={(state, context) => itemHandleChange(state, context)} name={name} disabled={disabled || item.props.disabled}></FCheckbox>
                        : <FCheckbox key={index} {...item} checked={children.length === selectedVals.length + 1} indeterminate={children.length > selectedVals.length + 1 && selectedVals.length > 0} onChange={(state, context) => itemHandleChange(state, context)} name={name} disabled={disabled || item.props.disabled}></FCheckbox>
                })
            }
        </div>


    )
}

FCheckbox.Group = Group