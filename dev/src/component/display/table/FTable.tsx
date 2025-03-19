import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { classnames } from "../../../utils/class.util"
import styles from "./style.module.less"
import { FTableColumn, FTableProps } from "./types";
import FRadio from "#/form/radio/FRadio";
import { FCheckbox } from "#/form/checkbox/FCheckBox";
import { isFunction } from "@/utils/type.util";

/**
 * 表格
 * @author linqin.zhong
 * @date 2025/03/18 09:50:09
 */
export const FTable: React.FC<FTableProps> = function ({ columns: _columns, data, border, columnDiv, rowDiv, select }) {


    const headRef = useRef<HTMLTableRowElement>(null)
    const [minWidth, setMinWidth] = useState<number>()
    const [fixedLeftMap, setFixedLeftMap] = useState<number[]>()
    const [fixedRightMap, setFixedRightMap] = useState<number[]>()
    const [showFixedLeftDiv, setShowFixedLeftDiv] = useState<boolean>(false)
    const [fixedLeftDivLeft, setFixedLeftDivLeft] = useState<number>()
    const [showFixedRightDiv, setShowFixedRightDiv] = useState<boolean>(true)
    const [fixedRightDivRight, setFixedRightDivRight] = useState<number>()

    // 排序
    _columns.sort((a, b) => {
        if (a.fixed === b.fixed) return 0
        if (a.fixed === 'right' || b.fixed === 'left') return 1
        if (b.fixed === 'right' || a.fixed === 'left') return -1
        return 0
    })


    // TODO
    const [selectRow, setSelectRow] = useState<any[]>([])

    // 增加特殊列
    const columns = React.useMemo<FTableColumn[]>(() => {
        const s: FTableColumn[] = [];
        if (select === 'multiple') {
            s.push({
                name: 'select',
                width: 50,
                label: '',
                fixed: 'left',
                // TODO
                template: (row) => {
                    const isChecked = selectRow.includes(row)
                    return <FCheckbox checked={isChecked} onClick={() => {
                        if (!isChecked) {
                            setSelectRow([...selectRow, row])
                        } else {
                            setSelectRow(selectRow.filter(r => r !== row))
                        }
                    }} />
                },
                headTemplate: <FCheckbox onClick={() => {
                    setSelectRow(selectRow.length > 0 || !data ? [] : [...data])
                }} checked={selectRow.length > 0} />
            })
        } else if (select === 'single') {
            s.push({
                name: 'select',
                width: 50,
                label: '',
                fixed: 'left',
                template: (row) => {
                    const isChecked = selectRow[0] === row
                    return <FRadio checked={isChecked} onChange={() => {
                        console.log(row);
                        setSelectRow(isChecked ? [] : [row])
                    }}/>
                },
                headTemplate: <>选择</>
            })
        }
        s.push(..._columns)
        return s
    }, [select, _columns, selectRow, data])


    useLayoutEffect(() => {
        const mLeft = []
        const mRight = []
        let left = 0
        let right = 0
        const items = headRef.current?.childNodes;
        if (items) {
            for (const i of items) {
                const item = i as HTMLDivElement
                if (!item.classList.contains(styles['fixed-left'])) {
                    break
                }
                mLeft.push(left)
                left += item.offsetWidth
            }
            for (const i of [...items].reverse()) {
                const item = i as HTMLDivElement
                if (!item.classList.contains(styles['fixed-right'])) {
                    break
                }
                mRight.push(right)
                right += item.offsetWidth
            }
            // 设置最小宽，让冻结窗口保持静止
            setMinWidth(left + right + 10)
            setFixedLeftDivLeft(left)
            setFixedLeftMap(mLeft)
            setFixedRightDivRight(right)
            setFixedRightMap(mRight)
        }

    }, [columns, select])

    return (
        <div style={{
            minWidth
        }} className={classnames(
            styles['table-wrapper'],
            border && styles[`border-${border}`],
        )}>
            {
                // 显示左边冻结窗口边界
                fixedLeftDivLeft && showFixedLeftDiv ? <div style={{
                    left: fixedLeftDivLeft - 1
                }} className={
                    classnames(
                        styles['boundary-left']
                    )
                }></div> : undefined
            }
            {
                // 显示右边冻结窗口边界
                fixedRightDivRight && showFixedRightDiv ? <div style={{
                    right: fixedRightDivRight - 1
                }} className={
                    classnames(
                        styles['boundary-right']
                    )
                }></div> : undefined
            }
            <div onScroll={fixedLeftDivLeft ? (e) => {
                // 根据表格滚动来控制冻结窗口边界是否显示
                const target = e.target as HTMLDivElement
                if (target.scrollLeft > 0 && !showFixedLeftDiv) {
                    setShowFixedLeftDiv(true)
                } else if (target.scrollLeft === 0 && showFixedLeftDiv) {
                    setShowFixedLeftDiv(false)
                }
                const child = target.firstChild as HTMLTableElement
                const widthDiff = child.clientWidth - target.clientWidth
                if (target.scrollLeft < widthDiff && !showFixedRightDiv) {
                    setShowFixedRightDiv(true)
                } else if (target.scrollLeft === widthDiff && showFixedRightDiv) {
                    setShowFixedRightDiv(false)
                }
            } : undefined} className={styles['scroll']}>
                <table className={classnames(
                    styles['table'],
                    columnDiv && styles[`column-div-${columnDiv}`],
                    rowDiv && styles[`row-div-${rowDiv}`]
                )}>

                    <thead>
                        <tr ref={headRef}>
                            {
                                columns.map((column, index) => {
                                    return <th
                                        style={{
                                            minWidth: column.width,
                                            left: fixedLeftMap ? fixedLeftMap[index] : undefined,
                                            right: fixedRightMap ? fixedRightMap[columns.length - index - 1] : undefined
                                        }}
                                        className={classnames(
                                            column.fixed && styles[`fixed-${column.fixed}`]
                                        )}
                                        key={index}>{
                                            column.headTemplate ? column.headTemplate : column.label
                                        }
                                    </th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {

                            data?.map((row, key) => {
                                return <tr key={key}>
                                    {
                                        columns.map((column, index) => {

                                            return <td
                                                style={{
                                                    left: fixedLeftMap ? fixedLeftMap[index] : undefined,
                                                    right: fixedRightMap ? fixedRightMap[columns.length - index - 1] : undefined
                                                }}
                                                className={classnames(
                                                    column.fixed && styles[`fixed-${column.fixed}`]
                                                )}
                                                key={column.name}>{
                                                    column.template
                                                        ? isFunction(column.template)
                                                            ? column.template(row)
                                                            : column.template
                                                        : row[column.name]
                                                }
                                            </td>
                                        })
                                    }
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}