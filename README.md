# FEB-UI 源码

## 一、贡献者
<a href="https://github.com/159668929"><img width="40px;" src="https://avatars.githubusercontent.com/u/159668929"></a>
<a href="https://github.com/164827959"><img width="40px;" src="https://avatars.githubusercontent.com/u/164827959"></a>


## 二、目录结构

- dev - 通用组件源码根目录
  - node_modules
  - public
  - src
    - component - 组件目录
      - base - 基础组件
        - button - 按钮
        - link - 文本链接
      - display - 数组展示组件
      - input - 输入组件
      - layout - 布局组件
      - nav - 导航组件
      - notice - 消息提醒组件
    - hooks - 钩子目录
    - test - 测试目录
    - theme - 主题目录
      - cannon - 经典主题
        - style - 样式目录
        - index.ts - 主题入口
  - craco.config.js
  - package.json
  - README.md
  - tsconfig.json

## 三、通用组件开发流程

### (一) 准备工作

#### 1. 切换到：`node.js >= 21`

#### 2. 在【项目根目录】下执行以下脚本，安装依赖

```shell
npm install
```

#### 3. 创建常用代码片段（Snippets）

- 为规范代码风格，加快编码速度，建议在工程下创建代码片段
- 在根目录下执行`npm run snippets --author=<作者>`生成代码片段

##### 3.1 组件代码片段（component）

- `dc` - 定义组件

##### 3.2 样式代码片段（style）

- `dc` - 创建新样式

##### 3.3 调试代码片段（test）

- `dt` - 创建调试页

### (二) 开始开发（示例）
1. 在`master`分支下创建新分支，命名为`feature-button-mike`，其中button为组件名，采用小驼峰命名法命名，mike为作者名称，也采用小驼峰命名法命名
2. 在项目根目录下执行`npm install`安装全局依赖，然后执行`npm run dev`运行项目，访问  http://localhost:3000 进入组件调试工具页
3. 在`./src/component/base`下创建`button`目录
4. 在`button`目录下创建`FButton.tsx`文件，并输入`dc`使用代码片段快速创建模板，并完成相关配置
5. 在`./src/types`目录下创建组件相关的类型定义文件，并定义类型
6. 在`button`目录下创建`style.module.less`样式文件，并编写样式
7. 在`./src/test`目录下创建`button.tsx`测试文件，并输入`dt`使用代码片段快速创建模板，并完成相关配置
8. 重新浏览 http://localhost:3000 ，可以看到菜单中出现了新创建的`button.tsx`测试文件对应的菜单项
9. 开始开发并调试

### (三) 开发组件
这个可以先不用看，或者简单看看~
#### 1. 创建文件

##### 1.1 在 component 的下列子目录下创建 tsx 文件

- base 基础组件
- display 布局组件
- input 输入组件
- nav 导航组件
- notice 消息提醒组件

##### 1.2 在 types 目录下创建.d.ts 文件（如有需要）

#### 2.规范

##### 2.1 命名

- 组件文件名：采用**大驼峰命名法**统一以大写字母**F**开头,如按钮组件命名为**FButton**
- 组件根目录名：采用**小写+下划线命名法**，如**process_bar**
- 组件名、类名：与组件文件名保持一致
- 样式文件名：采用**小写+连接符命名法**，如**my-style.less**
- js、ts、.d.ts 文件名，采用**小写+连接符命名法**
- 变量、普通方法、对象属性名：采用**小驼峰命名法**，如**handleClick**
- 常量名：采用**大写+下划线命名法**，如**MY_NAME**
- CSS 规则名：采用**小写+连接符命名法**，如**user-name**
- 目录、其它文件名：采用**小写+连接符命名法**

##### 2.2 注释

以下内容必须加注释

- 类、接口（使用文档注释，注明描述、作者、时间等）
- 类成员、静态属性（注明用途）
- 方法（使用文档注释，注明描述、参数、返回值、实例等）
- 枚举
- TS 类型
- 组件 props
- 程序关键步骤

##### 2.3 定义组件

- 统一使用函数式组件

##### 2.4 测试文件

- 统一定义为函数组件，并使用 const 和普通函数，遵循下列格式，否则识别不出来

  ```tsx
  export const Test1 = function () {
    // TODO
  };
  ```

##### 2.5 样式编写
- 以下单位严格使用rem作为单位
  - 宽、高
  - 圆角率
  - 边距
  - 阴影
  - 定位
- 组件禁止使用常量颜色（自定义颜色），严格使用主题文件定义的全局颜色变量
- 0不带单位，禁止写成`0px`、`0deg`等

### (四) 开发主题

待更新...

### (五) 发布

待更新...
