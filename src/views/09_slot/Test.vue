<template>
  <div class="box">
    <h1>我是子组件默认插槽</h1>
    <!-- 默认插槽 全局组件 可以直接使用-->
    <!-- 
    后备(默认)内容
    有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。 
    -->
    <!-- 当在父组件中不指定内容，“我是子组件插槽默认内容”会被渲染 -->
    <slot><p>我是子组件插槽默认内容</p></slot>
    <h1>+++++++++++++++++++++++</h1>
    <h1>具名插槽填充数据</h1>
    <slot name="a"></slot>
    <h1>+++++++++++++++++++++++</h1>
    <h1>具名插槽填充数据</h1>
    <slot name="b"></slot>
    <h1>+++++++++++++++++++++++</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  width: 80vw;
  height: 500px;
  background: skyblue;
}
</style>
