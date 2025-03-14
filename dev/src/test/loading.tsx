/**
 * @description 加载（FLoading）
 * @file button.tsx
 * @author linqin.zhong
 */

import React from "react"
import { FLoading } from "#/base/loading/FLoading"
import { FLoadingSpeed } from "@/types/loading"

// 不同速度
export const SpeedTest = function () {
  return (<div style={{ display: 'flex', flexWrap: 'wrap', gap:90 }}>
    {['normal', 'fast', 'slow'].map(speed => (
      <div key={speed} style={{textAlign: 'center'}}>
        <FLoading speed={speed as FLoadingSpeed} />
        <div style={{marginTop: 10}}>{speed}</div>
      </div>
    ))}
  </div>)
}

// 自定义速度
export const DurationTest = function () {
  return (<div style={{ display: 'flex', flexWrap: 'wrap', gap: 30 }}>
    {[500, 1000, 2000, 3000].map(dur => (
      <div key={dur} style={{textAlign: 'center'}}>
        <FLoading duration={dur} />
        <div style={{marginTop: 10}}>{dur}ms/圈</div>
      </div>
    ))}
  </div>)
}

// 自定义颜色
export const ColorTest = function () {
  return (<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
    {['red', 'blue', '#00b2ff','yellow','pink'].map(color => (
      <div key={color} style={{textAlign: 'center'}}>
      <FLoading style={{ color }} />
      <div style={{marginTop: 10}}>{color}</div>
    </div>
    ))}
  </div>)
}
