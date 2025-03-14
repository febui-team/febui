import React, { useState } from "react";
import { classnames } from "@/utils/class.util"
import styles from "./style.module.less"
import FRadioGroup from "./FRadioGroup"
import { FebProps } from "@/types/component";
import { RadioValue } from "@/types/radio";
import { Size } from "@/types/size";
export type FRadioProps = FebProps<{
    value?: RadioValue
    checked?: boolean
    defaultChecked?: boolean
    allowUncheck?: boolean
    disabled?: boolean
    name?: string
    readonly?: boolean
    type?: 'radio' | 'button'
    variant?: 'filled' | 'dashed'
    size?: Size

    onChange?: (value: RadioValue, context: {
        e: React.SyntheticEvent
    }) => void
}, HTMLDivElement>

interface Attr {
    Group: typeof FRadioGroup
}

/**
 * Radio单选框
 * @author xiaotong.wen
 * @date 2025/02/07 11:25:53
 */
const FRadio: React.FC<FRadioProps> & Attr = function (props) {

    const { defaultChecked = false, size = 'medium', style, value, checked, allowUncheck = true, disabled = false, readonly = false, type = 'radio', variant = 'dashed', onChange, children, className } = props

    const [active, setActive] = useState(defaultChecked)

    const inputClass = [
        styles['radio__input'],
        disabled && styles['disabled'],
        active && styles['active'],
    ]
    const radioClass = [
        styles['radio'],
        active && styles['active'],
        disabled && styles['disabled']
    ]
    const radioButton = [
        styles['radio-button'],
        variant === 'filled' && styles['filled'],
        variant === 'dashed' && styles['dashed'],
        active && styles['active'],
        disabled && styles['disabled'],
        styles[size ? size : 'medium' as string],
    ]

    React.useEffect(() => {
        setActive(checked !== undefined ? checked : active)
    }, [checked])


    function handleClick(e: React.SyntheticEvent) {

        if (disabled || readonly) return

        if (active && !allowUncheck) {
            return
        }

        checked === undefined && setActive(!active)

        if (onChange) {
            onChange(value || !active, { e })
        }

    }


    return (<div style={{ display: "inline-block" }} className={className}>
        <input type="radio" className={classnames(styles['radio__form'])} value={typeof value === 'boolean' ? value.toString() : value} />
        {type === 'radio' ? (
            <div className={classnames(...radioClass)} >
                <span onClick={(e) => handleClick(e)} className={classnames(...inputClass)}></span>
                <span className={classnames(styles['radio__label'])}>{children}</span>
            </div>
        ) : (
            <div style={style ? style : {}} className={classnames(...radioButton)} onClick={(e) => handleClick(e)}>
                <span>{children}</span>
            </div>
        )}
    </div>)
}

FRadio.Group = FRadioGroup

export default FRadio