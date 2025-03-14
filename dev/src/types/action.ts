export type ActionFn = (...args: any[]) => any
export type debounceFn = (callback: (...args: any[]) => any, wait: number) => any
export type ThrottleFn = (callback: (...args: any[]) => any, wait: number) => any
export type OnClickFn = (e: React.SyntheticEvent) => void