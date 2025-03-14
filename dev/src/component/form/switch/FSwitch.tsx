import React, { Component } from 'react'
import styles from './style.module.less'
import { isBoolean } from '@/utils/type.util'
import { FLoading } from '#/base/loading/FLoading'
import { Size } from '@/types/base'
import { FebProps } from '@/types/component'
import { SwitchValue, BeforeChangeFn } from '@/types/switch'


// 组件属性
type Props = FebProps<{
  value: SwitchValue
  disabled?: boolean
  size?: Size
  width?: number
  height?: number
  activeText?: string
  inactiveText?: string
  inline?: boolean
  activeValue?: SwitchValue
  inactiveValue?: SwitchValue
  loading?: boolean

  onChange?: (v: boolean | string | number, context: { e: React.SyntheticEvent }) => void
  beforeChange?: boolean | BeforeChangeFn,
}>

export default class FSwitch extends Component<Props> {

  state: Readonly<{ isActive: boolean }> = { isActive: true }

  static defaultProps = {
    size: 'medium',
    disabled: false,
    inline: false,
    value: true,
    activeValue: true,
    inactiveValue: false,
    loading: false
  }

  async handleChange(e: React.SyntheticEvent) {
    if (this.props.onChange && !this.props.disabled) {
      try {
        let flag = true
        if (this.props.beforeChange !== undefined) {
          if (isBoolean(this.props.beforeChange)) {
            flag = this.props.beforeChange
          } else {
            flag = await this.props.beforeChange()
          }
        }

        flag && (this.state.isActive ? this.props.onChange(this.props.inactiveValue!, { e }) : this.props.onChange(this.props.activeValue!, { e }))
      } catch (e) {
        console.log(e);
      }
    }
  }

  changeActiveStatus(value: typeof this.props.value) {
    if (value === this.props.activeValue || value === this.props.inactiveValue) {
      value === this.props.activeValue ? this.setState({ isActive: true }) : this.setState({ isActive: false })
    } else {
      throw new Error('value值和 active-value 、 inactive-value 无法匹配')
    }
  }

  // 监听value的变化
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
    if (prevProps.value !== this.props.value) {
      this.changeActiveStatus(this.props.value)
    }
  }

  componentDidMount(): void {
    this.changeActiveStatus(this.props.value)
  }

  render() {

    const { isActive } = this.state

    const { style, width, size, height, activeText, inactiveText, inline, disabled, loading } = this.props

    const switchClass = [
      styles.switch,
      disabled && styles['disabled']
    ]
    const coreClass = [
      styles.core,
      styles[size ? size : 'medium' as string],
      width && styles['nofit'],
      styles[isActive ? 'on' : 'off']
    ]
    const actionClass = [
      styles['action'],
      styles[isActive ? 'left' : 'right']
    ]

    const switchStyles = Object.assign(
      {},
      style,
      width ? { '--w': width + 'px' } : {},
      height ? { '--h': height + 'px' } : {}
    )

    return (
      <div className={switchClass.join(' ')}>
        {activeText && !inline && <span className={[styles['inactive-text'], !isActive ? styles['active'] : ''].join(' ')}>{activeText}</span>}
        <div onClick={(e) => this.handleChange(e)} className={coreClass.join(' ')} style={switchStyles}>
          {activeText && inline && isActive && <span className={styles['inline-active']}>{activeText}</span>}
          <div className={actionClass.join(' ')}>
            {loading && <FLoading className={styles['loading']}></FLoading>}
          </div>
          {inactiveText && inline && !isActive && <span className={styles['inline-inactive']}>{inactiveText}</span>}
        </div>
        {inactiveText && !inline && <span className={[styles['active-text'], isActive ? styles['active'] : ''].join(' ')}>{inactiveText}</span>}
      </div>
    )
  }
}
