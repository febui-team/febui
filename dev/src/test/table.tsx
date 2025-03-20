/**
 * @description 表格（FTable）
 * @file table.tsx
 * @author linqin.zhong
 * @date 2025/02/01 16:13:55
*/
import { FButton } from "#/base/button/FButton"
import { FTable } from "#/display/table/FTable"
import { FTableColumn } from "#/display/table/types"
import { toast } from "@/api/toast"
import React from "react"


const columns: FTableColumn[] = [
      {
            name: 'operation',
            label: '操作',
            fixed: 'right',
            align: 'center',
            template: (row) => {
                  return <div style={{
                        display: 'flex',
                        gap: 5
                  }}>
                        <FButton size="small" variant="text" type="danger" onClick={()=>{
                              toast('删除')
                        }}>删除</FButton>
                        <FButton size="small" variant="text" type="primary" onClick={() => {
                              toast('编辑')
                        }}>编辑</FButton>
                  </div>
            }
      },
      {
            name: 'id',
            label: 'ID',
            fixed: 'left'
      },
      {
            name: 'title',
            label: '标题',
            fixed: 'left',
            width: 200
      },
      {
            name: 'content',
            label: '内容',
            width: 500
      },
      {
            name: 'createTime',
            label: '创建时间',
            width: 300
      },

      {
            name: 'updateTime',
            label: '更新时间',
            width: 300
      },
      {
            name: 'status',
            label: '状态',
            fixed: 'left',
            width: 100
      },
]

const data = [
      {
            id: 1,
            title: '测试标题1',
            content: '这是测试内容1，用于展示表格数据显示效果',
            createTime: '2024-02-01 10:00:00',
            updateTime: '2024-02-01 10:00:00',
            status: '正常'
      },
      {
            id: 2,
            title: '测试标题2',
            content: '这是测试内容2，包含一些示例文本信息',
            createTime: '2024-02-01 11:15:00',
            updateTime: '2024-02-01 11:15:00',
            status: '异常'
      },
      {
            id: 3,
            title: '测试标题3',
            content: '这是测试内容3，展示不同状态的数据记录',
            createTime: '2024-02-01 13:30:00',
            updateTime: '2024-02-01 13:30:00',
            status: '正常'
      },
      {
            id: 4,
            title: '测试标题4',
            content: '这是测试内容4，用于测试表格组件功能',
            createTime: '2024-02-01 14:45:00',
            updateTime: '2024-02-01 14:45:00',
            status: '待处理'
      },
      {
            id: 5,
            title: '测试标题5',
            content: '这是测试内容5，模拟实际业务数据场景',
            createTime: '2024-02-01 15:20:00',
            updateTime: '2024-02-01 15:20:00',
            status: '正常'
      },
      {
            id: 6,
            title: '测试标题6',
            content: '这是测试内容6，验证表格渲染效果',
            createTime: '2024-02-01 16:00:00',
            updateTime: '2024-02-01 16:00:00',
            status: '异常'
      },
      {
            id: 7,
            title: '测试标题7',
            content: '这是测试内容7，检查数据展示完整性',
            createTime: '2024-02-01 16:30:00',
            updateTime: '2024-02-01 16:30:00',
            status: '正常'
      },
      {
            id: 8,
            title: '测试标题8',
            content: '这是测试内容8，测试长文本显示效果',
            createTime: '2024-02-01 17:15:00',
            updateTime: '2024-02-01 17:15:00',
            status: '待处理'
      },
      {
            id: 9,
            title: '测试标题9',
            content: '这是测试内容9，验证表格交互功能',
            createTime: '2024-02-01 18:00:00',
            updateTime: '2024-02-01 18:00:00',
            status: '正常'
      },
      {
            id: 10,
            title: '测试标题10',
            content: '这是测试内容10，完成表格测试数据',
            createTime: '2024-02-01 19:30:00',
            updateTime: '2024-02-01 19:30:00',
            status: '异常'
      }
]

// 单选
export const FTableTest1 = function () {
      return (<FTable rowDiv="solid" select="single" border="solid" columns={columns} data={data} />)
}

// 多选
export const FTableTest2 = function () {
      return (<FTable rowDiv="solid" select="multiple" border="solid" columns={columns} data={data} />)
}

// 限制多选
export const FTableTest3 = function () {
      return (<FTable selectLimit={4} rowDiv="solid" select="multiple" border="solid" columns={columns} data={data} />)
}

// 禁用特定行
export const FTableTest4 = function () {
      return (<FTable disableRow={(row) => {
            return row.id < 5 && row.id > 2
      }} rowDiv="solid" select="multiple" border="solid" columns={columns} data={data} />)
}

// 滚动
export const FTableTest5 = function () {
      return (<FTable style={{
            maxHeight: 200
      }} disableRow={(row) => {
            return row.id < 5 && row.id > 2
      }} rowDiv="solid" select="multiple" border="solid" columns={columns} data={data} />)
}