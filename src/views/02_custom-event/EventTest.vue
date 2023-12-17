<template>
  <div>
    <h1>事件</h1>
    <!-- 原生DOM事件 -->
    <!-- 在vue框架中事件分为两种:一种是原生的DOM事件，另外一种自定义事件。
    原生DOM事件可以让用户与网页进行交互，比如click、dbclick、change、mouseenter、mouseleave....
    自定义事件可以实现子组件给父组件传递数据 -->

    <!-- 
      pre标签的作用是预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，
      文本中的空白符（比如空格和换行符）都会显示出来。以及pre包含其它HTML标签和CSS样式可以不被浏览器解析。
      所以，通常也用于显示代码。
      可以导致段落断开的标签（例如标题、<p> 和 <address> 标签）绝不能包含在 <pre> 所定义的块里。 
    -->
    <!-- 绑定原生DOM事件点击事件,默认会给事件回调注入event事件对象。 -->
    <pre @click="handler">
          大江东去浪淘尽,千古分流人物
    </pre>
    <!-- 点击事件可以注入多个参数，切记注入的事件对象务必叫做$event. -->
    <button @click="handler1(1, 2, 3, $event)">点击我传递多个参数</button>
    <hr />
    <!--
      vue3:click、dbclick、change(这类原生DOM事件),不管是在标签、自定义标签上(组件标签)都是原生DOM事件
      在vue2中组件标签需要通过native修饰符才能变为原生DOM事件
      @click  是给子组件 Event1 的根节点绑定事件
      -->
    <Event1 @click="handler2"></Event1>
    <hr />
    <!-- 绑定自定义事件xxx:实现子组件给父组件传递数据 -->
    <Event2 @xxx="handler3" @click="handler4"></Event2>
  </div>
</template>

<script setup lang="ts">
//引入子组件
import Event1 from './Event1.vue'
//引入子组件
import Event2 from './Event2.vue'
//事件回调--1
const handler = (event: any) => {
  //event即为事件对象
  console.log(event)
}
//事件回调--2
const handler1 = (a: any, b: any, c: any, $event: any) => {
  console.log(a, b, c, $event)
}
//事件回调---3
const handler2 = () => {
  console.log(123)
}
//事件回调---4
const handler3 = (param1: any, param2: any) => {
  console.log(param1, param2)
}
//事件回调--5
const handler4 = (param1: any, param2: any) => {
  console.log(param1, param2)
}
</script>

<style scoped></style>
