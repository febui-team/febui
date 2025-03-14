/**
 * 创建任务队列队列
 * @author linqin.zhong
 * @date 2025/01/24 17:43
 * @example
 * const current = Date.now()
 * createTaskQueue().enqueue((pre, next) => {
 *     setTimeout(() => {
 *         console.log('a', Math.round((Date.now() - current)/1000))
 *         next('hello')
 *     }, 1000)
 * }).enqueue((pre, next) => {
 *     setTimeout(() => {
 *         console.log('b',Math.round((Date.now() - current)/1000))
 *         console.log(pre)
 *         next(pre)
 *     }, 1000)
 * })
 * // > a 1
 * // > b 2
 * // > hello
 */
export const createTaskQueue = () => {
    // 排队期约
    let p: Promise<any> | null
    // 生成队列
    const queue: {
        // 队中任务个数
        n: Readonly<number>
        /**
         * 入队
         * @param handler - 排队函数
         */
        enqueue: (
            handler: (
                // 增量信息
                preInfo: any,
                // 放行函数
                next: (preInfo: any) => void
            ) => void
        ) => typeof queue
    } = {
        n: 0,
        enqueue(handler) {
            if (!p) {
                p = new Promise((next) => {
                    handler(null, next)
                })

            } else {
                queue.n++
                p = p.then((preInfo) => {
                    queue.n--
                    // 队列无任务时清除记录的最后一个期约
                    if (queue.n === 0) p = null
                    return new Promise((next) => {
                        handler(preInfo, next)
                    })
                })
            }
            return queue
        }
    }
    return queue
}