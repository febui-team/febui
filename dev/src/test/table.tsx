/**
 * @description 表格（FTable）
 * @file table.tsx
 * @author linqin.zhong
 * @date 2025/02/01 16:13:55
*/
import { FTable } from "#/display/table/FTable"
import React from "react"

// 单选
export const FTableTest1  = function () {
      return (<FTable rowDiv="solid" select="single" border="solid"  columnDiv="solid" columns={
            [
                  {
                        name: 'operation',
                        label: '操作',
                        fixed: 'right',
                        width: 300
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
                        width: 500
                  },
                  
                  {
                        name: 'updateTime',
                        label: '更新时间'
                  },
                  {
                        name: 'status',
                        label: '状态',
                        fixed: 'left'
                  },
            ]
      } data={[
            {
                  id: 1,
                  title: '2131312'
            },{
                  id:2,
                  title: 'Asdas '
            }
      ]}/>)
}

// 多选
export const FTableTest2  = function () {
      return (<FTable rowDiv="solid" select="multiple" border="solid"  columnDiv="solid" columns={
            [
                  {
                        name: 'operation',
                        label: '操作',
                        fixed: 'right',
                        width: 300
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
                        width: 500
                  },
                  
                  {
                        name: 'updateTime',
                        label: '更新时间'
                  },
                  {
                        name: 'status',
                        label: '状态',
                        fixed: 'left'
                  },
            ]
      } data={[
            {
                  id: 1,
                  title: '2131312'
            },{
                  id:2,
                  title: 'Asdas '
            }
      ]}/>)
}