/**
 * @description 选项卡（FTab）
 * @file tab.tsx
 * @author linqin.zhong
 * @date 2025/02/01 16:16:22
*/
import { FTab } from "#/nav/tab/FTab"
import { FTabOptionValue } from "@/types/tab"
import React, { useState } from "react"

// 基础使用
export const FTabTest1 = function () {
      const [val, setVal] = useState<FTabOptionValue>('2')
      return (<div>
            <FTab value={val} onChange={(v) => {
                  setVal(v)
            }} options={[
                  {
                        value: '1',
                        label: '选项----卡1'
                  }, {
                        value: '2',
                        label: '选项卡2'
                  }, {
                        value: '3',
                        label: '选项卡3'
                  },
            ]} />
      </div>)
}

// 过长时滚动
export const FTabTest2 = function () {
      const [val, setVal] = useState<FTabOptionValue>('2')
      return (<div style={{width:400}}>
            <FTab value={val} onChange={(v) => {
                  setVal(v)
            }} options={[
                  {
                        value: '1',
                        label: '选项----卡1'
                  }, {
                        value: '2',
                        label: '选项卡2'
                  }, {
                        value: '3',
                        label: '选项卡3'
                  },{
                        value: '4',
                        label: '选项----卡4'
                  }, {
                        value: '5',
                        label: '选项卡5'
                  }, {
                        value: '6',
                        label: '选项卡6'
                  },{
                        value: '7',
                        label: '选项----卡7'
                  }, {
                        value: '8',
                        label: '选项卡8'
                  }, {
                        value: '9',
                        label: '选项卡9'
                  }
            ]} />
      </div>)
}