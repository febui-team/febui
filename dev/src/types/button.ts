import { InteractionType } from "./base";
import { Size } from "./size";
// 按钮类型
export type ButtonType = InteractionType;
// 按钮形态
export type ButtonVariant =
  | "base" // 填充
  | "outline" // 实线边框
  | "dashed" // 虚线边框
  | "text"; //纯文本
// 按钮形状
export type ButtonShape =
  | "round" // 圆角
  | "rectangle" // 矩形
  | "circle" // 圆形
  | "square"; // 正方形
// 按钮大小
export type ButtonSize = Size;
