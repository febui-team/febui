import { FebProps } from "@/types/component";
import { ReactNode } from "react";

export type FTableBorderType = 'dashed' | 'solid'

export type FTableColumn = {
    name: string
    label?: string
    width?: string | number
    template?: ReactNode | ((row: FTableRow) => ReactNode),
    headTemplate?: ReactNode
    fixed?: 'left' | 'right'
}

export type FTableRow = {
    [key: string]: any
}

export type FTableProps = FebProps<{
    data?: FTableRow[],
    columns: FTableColumn[],
    // 边框类型
    border?: FTableBorderType
    // 列分界线类型
    columnDiv?: FTableBorderType
    // 行分界线类型
    rowDiv?: FTableBorderType,
    // 选择类型
    select?: 'single' | 'multiple'
}>