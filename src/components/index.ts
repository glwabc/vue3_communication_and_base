/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-17 20:10:16
 * @LastEditors: Huccct
 * @LastEditTime: 2023-05-21 13:57:55
 */
// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue';
import Pagination from './Pagination/index.vue';
import type { App, Component } from 'vue';
//对象全局
const allglobalComponent: { [name: string]: Component } = { SvgIcon, Pagination };
export default {
  // 务必叫作install方法
  // main.ts里的app和install里的参数app指向同一个对象
  install(app: App) {
    // 注册项目全部的全局组件 遍历注册
    Object.keys(allglobalComponent).forEach((key: string) => {
      // 注册为全局组件
      app.component(key, allglobalComponent[key]);
    })
  }
}