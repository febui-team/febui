# FebUi

## 1. 简介
FebUi 是一个基于 React 19 开发的现代化桌面端组件库，采用 TypeScript 开发，提供完整的类型支持。组件库包含多个品类：基础组件（按钮、链接等）、布局组件、导航组件、输入组件、展示组件和消息提醒组件等。

## 2. 包管理
- npm ([febui-react](https://www.npmjs.com/package/febui-react))

## 3. 快速开始
### 3.1 安装 FebUi
使用 npm：
```bash
npm i febui-react
```

使用 yarn：
```bash
yarn add febui-react
```

### 3.2 在主文件中引入样式
```typescript
import 'febui-react/dist/index.css'
```

### 3.3 引入组件并开始编码
```typescript
import { FButton, toast } from 'febui-react'

const App: React.FC = () => {
  return (
    <FButton 
      onClick={() => {
        toast.success("你好，FebUi！")
      }}
    >
      点击我！
    </FButton>
  )
}
```

## 贡献者
<div style="display: flex; gap: 8px;">
  <a href="https://github.com/TTD-T">
    <img width="40" src="https://avatars.githubusercontent.com/u/159668929" alt="TTD-T" />
  </a>
  <a href="https://github.com/LinqinZhong">
    <img width="40" src="https://avatars.githubusercontent.com/u/164827959" alt="LinqinZhong" />
  </a>
</div>