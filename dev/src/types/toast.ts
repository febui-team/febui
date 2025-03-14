// 提示消息类型
export type FToastType = 'info'    // 信息
    | 'success' // 成功
    | 'fail' // 失败
    | 'error' // 错误
    | 'warn' // 警告

// 提示消息信息
export type ToastInfo = {
    // 消息ID
    id?: number,
    // 消息类型
    type?: FToastType,
    // 消息是否死亡
    died?: boolean,
    // 消息内容
    message: string
}

// 提示消息API配置
export type ToastApiConfig = {
    // 消息类型
    type?: FToastType,
    // 消息时长
    duration?: number
}