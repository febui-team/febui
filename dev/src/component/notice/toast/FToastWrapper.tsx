import React, { Component } from "react";
import { FToast } from "./FToast";
import types from './toast.module.less'
import { generateId } from "@/utils/id.util";
import { FebProps } from "@/types/component";
import { ToastInfo } from "@/types/toast";
type Props = FebProps<{}>
type State = { list: ToastInfo[] }
/**
 * 提示提示容器
 * @author linqin.zhong
 * @date 2025/01/23 15:34:03
 */
export class FToastWrapper extends Component<Props, State> {

    state: Readonly<State> = {
        list: [],
    };

    /**
     * 往容器中添加提示消息
     * @param info - 消息提示信息 
     * @returns 消息ID
     */
    add(info: ToastInfo) {
        info.id = generateId('toast')
        this.setState({
            list: [
                ...this.state.list,
                info
            ]
        })
        return info.id
    }

    /**
     * 删除容器中的提示消息
     * @param id - 消息ID
     */
    remove(id: number) {
        this.setState({
            list: this.state.list.map((item) => {
                if (item.id === id) {
                    item.died = true
                }
                return item
            })
        })
    }

    /**
     * 销毁容器中的提示消息
     * @param id - 消息ID
     */
    private destroy = (id: number | undefined) => {
        this.setState({
            list: this.state.list.filter((item) => item.id !== id)
        })
    }

    render() {
        return (
            <div className={types['toast-wrapper']}>
                {
                    this.state.list.map(
                        item => <FToast type={item.type} id={item.id!} destroy={this.destroy} key={item.id} dead={item.died} message={item.message} />
                    )
                }
            </div>
        )
    }
}