import { FebProps } from "@/types/component";
import { ReactNode } from "react";

export type FTableBorderType = 'dashed' | 'solid'

export type FTableColumn = {
    // 字段名
    name: string
    // 标签
    label?: string
    // 宽度
    width?: string | number
    // 单元格模板
    template?: ReactNode | ((row: FTableRow) => ReactNode),
    // 表头模板
    headTemplate?: ReactNode
    // 固定位置
    fixed?: 'left' | 'right',
    // 排列方向
    align?: 'center' | 'left' | 'right'
}

export type FTableRow = {
    [key: string]: any
}

export type FTableProps = FebProps<{
    // 数据
    data?: FTableRow[],
    // 列
    columns: FTableColumn[],
    // 边框类型
    border?: FTableBorderType
    // 列分界线类型
    columnDiv?: FTableBorderType
    // 行分界线类型
    rowDiv?: FTableBorderType,
    // 选择类型
    select?: 'single' | 'multiple'
    // 行键
    rowKey?: string
    // 多选时,限制选择的个数
    selectLimit?: number
    // 选择变化事件
    onSelectChange?: (rows: FTableRow[]) => void
    // 行是否禁用选择
    disableRow?: (row: FTableRow) => boolean
}>