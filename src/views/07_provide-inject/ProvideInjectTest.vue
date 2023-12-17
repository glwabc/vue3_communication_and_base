<template>
  <div class="box">
    <h1>Provide与Inject传值:{{ car }}</h1>
    <p>count:{{ count }}</p>
    <button @click="add">爷爷+1</button>
    <Child :message1="msg"></Child>
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'
//vue3提供provide(提供)与inject(注入),可以实现隔辈组件传递数据
import { ref, provide } from 'vue'
let msg = ref('哈利来自火星')
let car = ref('法拉利')
//祖先组件给后代组件提供数据
//provide 两个参数:第一个参数就是提供的数据key  需要是一个独一无二的标识（不允许和组件内部的变量重名）
//        第二个参数:祖先组件提供数据
provide('TOKEN', car)

// =======================================================

// 在爷爷组件声明一个响应式的数据试试。
const count = ref<number>(0)
function add() {
  count.value = count.value + 1
}
provide('message', count)
provide('messageAdd', add)

// 爷爷组件和父亲组件同时提供了一个相同的关键词的值，儿子组件最后会使用谁的呢？
provide('secret', '爷爷组件提供的')
</script>

<style scoped>
.box {
  width: 100vw;
  height: 600px;
  background: skyblue;
}
</style>
