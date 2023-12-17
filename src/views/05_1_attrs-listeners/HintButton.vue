<!-- v3ts  新建文件快捷键 -->
<template>
  <div>props.aa:{{ propsDemo.aa }}</div>
  <div :title:string="$attrs.title">
    <!-- 鼠标的文字提示 -->
    <el-button :="$attrs"></el-button>
    <!-- <h1 :="{a:1,b:2}">v-bind绑定多个属性的语法</h1> -->
  </div>
  <!-- 
    <div title>是在HTML中常用的一个属性，它用于给HTML元素添加一个提示信息。
    当鼠标悬停在具有<div title>属性的元素上时，浏览器将显示一个包含指定提示
    信息的小窗口。 
    不论鼠标停留在父元素上还是子元素上，都会显示相同的提示信息。这是因为子元
    素继承了父元素的title属性。
  -->
</template>

<script setup lang="ts">
//引入useAttrs方法:获取组件标签身上属性与事件
import { useAttrs } from 'vue'
//此方法执行会返回一个对象  Proxy对象【拓展】
let $attrs = useAttrs()

// let props = defineProps(['type', 'size', 'icon', 'title']);
let propsDemo = defineProps(['aa'])
// props与useAttrs方法都可以获取父组件传递过来的属性与属性值
// 但是props接收了父组件的传值后，那么useAttrs方法就获取不到父组件数据了
// props的优先级更高
console.log('一：', propsDemo.aa)
console.log('二：', $attrs) // 取不到 aa 的属性数据
</script>

<style scoped></style>
