// @ts-nocheck
// ts报错，暂时先加个禁用

import React from "react";
import FRadio, { FRadioProps } from "./FRadio";
import styles from "./style.module.less";
import { classnames } from "@/utils/class.util";
import { Size } from "@/enum/base";
import { RadioValue } from "@/types/radio";

interface OptionItem extends FRadioProps {
    label: string,
    value: string | number
}

interface FRadioGroupProps extends Omit<FRadioProps, 'variant'> {
    options?: OptionItem[]
    size?: Size
    variant?: 'dashed' | 'default-filled' | 'primary-filled'
}


const FRadioGroup: React.FC<FRadioGroupProps> = function (props) {
    const { options, size = 'medium', value, type = 'radio', variant = 'dashed' } = props
    const children = props.children

    const containerClass = [
        styles['group-container'],
        type === 'button' && variant === 'dashed' && styles['button-group-outline'],
        type === 'button' && (variant === 'primary-filled' || variant === 'default-filled') && styles['button-group-filled']
    ]


    function handleChange(e: React.SyntheticEvent, value: RadioValue) {
        // setValue(value)
        if (props.onChange) {
            props.onChange(value, { e })
        }
    }

    return (
        <div className={classnames(...containerClass)}>
            {type === 'radio' && options && options.map((item) => <FRadio {...item} onChange={(value, { e }) => handleChange(e, value)} key={item.value} checked={value === item.value} >{item.label}</FRadio>)}
            {type === 'radio' && children && children.map(({ props }) => <FRadio {...props} onChange={(value, { e }) => handleChange(e, value)} key={props.value} checked={value === props.value}>{props.children}</FRadio>)}
            {type === 'button' && variant === 'dashed' && options && options.map((item) => <FRadio className={classnames(value === item.value && styles['active'])} {...item} type="button" variant="dashed" key={item.value} onChange={(value, { e }) => handleChange(e, value)} checked={value === item.value} style={{ borderRadius: 0 }} size={size}>{item.label}</FRadio>)}
            {type === 'button' && variant === 'primary-filled' && options && options.map((item) => <FRadio style={{ '--filled-color-inactive': '#eee' }} className={classnames(value === item.value && styles['active'])} {...item} type="button" variant="filled" key={item.value} onChange={(value, { e }) => handleChange(e, value)} checked={value === item.value} size={size}>{item.label}</FRadio>)}
            {type === 'button' && variant === 'default-filled' && options && options.map((item) => <FRadio style={{ '--filled-color-inactive': '#eee', '--filled-color-active': '#fff', '--text-color-filled-active': '#333' }} className={classnames(value === item.value && styles['active'])} {...item} type="button" variant="filled" key={item.value} onChange={(value, { e }) => handleChange(e, value)} checked={value === item.value} size={size}>{item.label}</FRadio>)}
        </div>
    )
}

export default FRadioGroup