import React from "react";
import { Component, ReactNode } from "react";
import { generateId } from "@/utils/id.util";
import { FebProps } from "@/types/component";
import { FLoadingSpeed } from "@/types/loading";
type Props = FebProps<{
  duration?: number  // 转一圈的时长（ms，设置这个值会导致speed失效）
  speed?: FLoadingSpeed // 旋转的速度（默认：normal）
}>
const SPEEDS = {
  normal: 1080,
  fast: 540,
  slow: 1900
}
/**
 * 加载组件
 * @author linqin.zhong
 * @date 2025/01/19 15:19:09
 * @example
 * <FLoading>
 */
export class FLoading extends Component<Props> {

  // ID
  private id = generateId('loading')

  static defaultProps = {
    speed: 'normal'
  }

  render(): ReactNode {
    const dur = (this.props.duration ? this.props.duration : SPEEDS[this.props.speed!]) + 'ms'
    const id = 'linear-gradient-' + this.id
    return (
      <svg
        style={this.props.style}
        className={this.props.className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.0"
        width="64px"
        height="64px"
        viewBox="0 0 128 128"
        xmlSpace="preserve">
        <rect x="0" y="0" width="100%" height="100%" fill="transparent" />
        <g>
          <linearGradient id={id}>
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="40%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="90%" stopColor="currentColor" />
          </linearGradient>
          <path d="M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z" fill={`url(#${id})`} fillRule="evenodd" />
          <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur={dur} repeatCount="indefinite">
          </animateTransform>
        </g>
      </svg>
    )
  }
}