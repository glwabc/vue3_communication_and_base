// 引入实例化上下文的api方法createApp
import { createApp } from 'vue'
// 引入element ui
import ElementPlus from 'element-plus'
// 引入element ui的样式
import 'element-plus/dist/index.css'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入App组件
import App from './App.vue'
// 引入全局样式
// import '@/styles/index.scss'
// 引入路由器
import router from './router'
//引入仓库
import store from './store'
// 创建app
const app = createApp(App)
app.use(store)
app.use(router) // 注册路由器
app.use(ElementPlus) // 使用element-plus
// 引入并注册svg全局组件 一个一个注册
// import SvgIcon from '@/components/SvgIcon/index.vue'
// app.component('SvgIcon', SvgIcon)

// 引入自定义插件对象：注册整个项目全局组件
import gloablComponent from './components';
// 安装自定义插件
app.use(gloablComponent);

// 引入mitt库
import mitt from 'mitt'
// 把mitt发布订阅中心（mitt实例） 挂载在全局属性上
app.config.globalProperties.$mitter = mitt()

// 挂载
app.mount('#app')

// ## 三、项目集成
// ### 3.1集成element-plus
// 硅谷甄选运营平台,UI组件库采用的element-plus，因此需要集成element-plus插件！！！
// 官网地址:https://element-plus.gitee.io/zh-CN/
// ```
// pnpm install element-plus @element-plus/icons-vue
// ```
// Element Plus 用法
// !!!! 完整引入
// 如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
// **入口文件main.ts全局安装element-plus,element-plus默认支持语言英语设置为中文**
// ```
// 引入element-plu与样式s插件
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css'
// //@ts-ignore忽略当前文件ts类型的检测，否则有红色提示(打包会失败)
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 安装element-plus插件 并配置国际化-中文
// app.use(ElementPlus, {
//     locale: zhCn
// })
// ```
// 安装element-plus图标组件库 pnpm i @element-plus/icons-vue
// 在 .vue 页面中引入图标组件：import { Plus, Edit, Delete } from '@element-plus/icons-vue'
// 然后可以使用 :icon 属性
// ~~~
// <el-button type="primary" size="default" :icon="Plus">增加按钮</el-button>
// <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>
// <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button>
// ~~~
// **Element Plus全局组件类型声明**
// 如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。
// ```
// // tsconfig.json
// {
//   "compilerOptions": {
//     // ...
//     "types": ["element-plus/global"]
//   }
// }
// ```
// 配置完毕可以测试element-plus组件与图标的使用.

// !!!! 按需导入#
// 您需要使用额外的插件来导入要使用的组件。
// 自动导入   推荐#
// 首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件
//
// pnpm install -D unplugin-vue-components unplugin-auto-import
// 然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中
// // vite.config.ts
// import { defineConfig } from 'vite'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// export default defineConfig({
//   // ...
//   plugins: [
//     // ...
//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//     }),
//   ],
// })
//
// unplugin-vue-components  自动导入 import 和注册组件
// 对于 ts 项目，还会自动生成对应组件的声明 components.d.ts
// unplugin-auto-import  自动按需导入调用的API
// 如:
//         // 处理前
//         <script setup>
//         ElMessage('自动导入');
//         </script>

//         // 处理后等同效果
//         import { ElMessage } from 'element-plus'
//         ElMessage('自动导入');
//
// 到这里已经可以直接使用ElementPlus标签，例如
// <el-button type="primary">按钮</el-button>

// ### 3.2src别名的配置
// 在开发项目的时候文件与文件关系可能很复杂，因此我们需要给src文件夹配置一个别名！！！

// ```
// // (1) vite.config.ts
// import {defineConfig} from 'vite'
// import vue from '@vitejs/plugin-vue'
// import path from 'path'
// export default defineConfig({
//     plugins: [vue()],
//     resolve: {
//         alias: {
//             "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
//         }
//     }
// })
// ```

// // (2) TypeScript 编译配置
// ```
// // tsconfig.json
// {
//   "compilerOptions": {
//     "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
//     "paths": { //路径映射，相对于baseUrl
//       "@/*": ["src/*"]
//     }
//   }
// }
// ```

// ### 3.3环境变量的配置
// **项目开发过程中，至少会经历开发环境、测试环境和生产环境(即正式环境)三个阶段。不同阶段请求的状态
// (如接口地址等)不尽相同，若手动切换接口地址是相当繁琐且易出错的。于是环境变量配置的需求就应运而生，
// 我们只需做简单的配置，把环境状态切换的工作交给代码。**

// 开发环境（development）
// 顾名思义，开发使用的环境，每位开发人员在自己的dev分支上干活，开发到一定程度，同事会合并代码，进行联调。

// 测试环境（testing）
// 测试同事干活的环境啦，一般会由测试同事自己来部署，然后在此环境进行测试

// 生产环境（production）
// 生产环境是指正式提供对外服务的，一般会关掉错误报告，打开错误日志。(正式提供给客户使用的环境。)

// 注意:一般情况下，一个环境对应一台服务器,也有的公司开发与测试环境是一台服务器！！！

// （1）项目根目录分别添加 开发、生产和测试环境的文件!
// ```
// .env.development
// .env.production
// .env.test
// ```
// 文件内容
// 略
// （2）配置运行命令：package.json
//  "scripts": {
//     "build:test": "vue-tsc && vite build --mode test",
//     "build:pro": "vue-tsc && vite build --mode production",
//   },
// 通过import.meta.env获取环境变量
// 例如：console.log(import.meta.env)

// ### 3.4SVG图标配置
// 在开发项目的时候经常会用到svg矢量图,而且我们使用SVG以后，页面上加载的不再是图片资源,
// 这对页面性能来说是个很大的提升，而且我们SVG文件比img要小的很多，放在项目中几乎不占用资源。

// （1）**安装SVG依赖插件**
// ```
// pnpm install vite-plugin-svg-icons -D
// ```

// （2）**在`vite.config.ts`中配置插件**
// ```
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// import path from 'path'
// export default () => {
//   return {
//     plugins: [
//       createSvgIconsPlugin({
//         // Specify the icon folder to be cached
//         iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
//         // Specify symbolId format
//         symbolId: 'icon-[dir]-[name]',
//       }),
//     ],
//   }
// }
// ```

// （3）**入口文件导入**  main.ts
// ```
// import 'virtual:svg-icons-register'
// ```

// #### 3.4.1svg封装为全局组件
// 因为项目很多模块需要使用图标,因此把它封装为全局组件！！！
// （1）在src/components目录下创建一个SvgIcon组件
// （2）在src文件夹目录下创建一个index.ts文件：用于注册components文件夹内部全部全局组件！！！
// （3）在入口文件引入src/index.ts文件,通过app.use方法安装自定义插件
// ```
// import gloablComponent from './components/index';
// app.use(gloablComponent);
// ```

// ### 3.5集成sass
// 我们目前在组件内部已经可以使用scss样式,因为在配置styleLint工具的时候，项目当中已经
// 安装过sass sass-loader,因此我们再组件内可以使用scss语法！！！需要加上lang="scss"
// ```
// <style scoped lang="scss"></style>
// ```
// 接下来我们为项目添加一些全局的样式
// 在src/styles目录下创建一个index.scss文件，当然项目中需要用到清除默认样式，因此
// 在index.scss引入reset.scss
// ```
// @import reset.scss
// ```
// 在入口文件引入
// ```
// import '@/styles'
// ```
// 但是你会发现在src/styles/index.scss全局样式文件中没有办法使用$变量.因此需要给项目中
// 引入全局变量$.
// 在style/variable.scss创建一个variable.scss文件！
// 在vite.config.ts文件配置：
// ~~~
// css: {
//       preprocessorOptions: {
//         scss: {
//           javascriptEnabled: true,
//           additionalData: '@import "./src/styles/variable.scss";',
//         },
//       },
//     },
// ~~~
// 配置完毕你会发现scss提供这些全局变量可以在组件样式中使用了！！！