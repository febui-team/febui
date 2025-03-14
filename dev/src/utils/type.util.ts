/**
 * 类型工具类
 * @file type-utils.ts
 * @author linqi.zhong
 */

/**
 * 判断值是不是函数
 * @param v {any} - 任意值
 * @returns {boolean} 判断结果的布尔值表示
 * @date 2025/01/19 15:15:20
 * @example
 * isFunction(function(){}) // -> true
 * isFunction(1) // -> false
 */
export const isFunction = (v: any): v is Function => {
  return (
    v &&
    (typeof v === "function" ||
      Object.prototype.toString.call(v) === "[object Function]")
  );
};

/**
 * 判断值是不是数字
 * @param v {any} - 任意值
 * @returns {boolean} 判断结果的布尔值表示
 * @date 2025/01/19 15:16:31
 * @example
 * isNumber(function(){})) // -> false
 * isNumber(1)// -> true
 * isNumber(1) // -> false
 */
export const isNumber = (v: any): v is number => {
  return typeof v === "number" && !isNaN(v);
};

/**
 * 判断是不是字符串
 * @param v
 * @returns
 */
export const isString = (v: any): v is string => {
  return typeof v === "string";
};

/**
 * 判断是不是布尔类型
 * @param v
 * @returns
 */
export const isBoolean = (v: any): v is boolean => {
  return typeof v === "boolean";
};

/**
 * 判断值是否为未定义
 * @param v {any} - 任意值
 * @returns {boolean} 判断结果的布尔值表示
 * @date 2025/01/19 15:17:01
 */
export const isUndefined = (v: any): v is undefined => {
  return v === void 0;
};
