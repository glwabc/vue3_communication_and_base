<template>
  <div class="child1">
    <h3>我是子组件1:曹植</h3>
    <button @click="sendMsg">发送事件</button>
    <br />
    <br />
    <button @click="sendContent">发送给子组件二</button>
  </div>
</template>

<script setup lang="ts">
import $bus from '../../bus'
//组合式API函数
import { onMounted } from 'vue'
//组件挂载完毕的时候,当前组件绑定一个事件,接受将来兄弟组件传递的数据
onMounted(() => {
  // 监听自定义事件，处理回调函数
  // 第一个参数:即为事件类型  第二个参数:即为事件回调
  $bus.on('car', (car) => {
    console.log('子组件1，收到数据：', car)
  })
})

function sendMsg() {
  $bus.emit('pig', '小花猫')
  $bus.emit('dog', '小金毛')
}

function sendContent() {
  // 触发自定义总线why，并传入一个对象
  $bus.emit('why', { name: 'why', age: 19 })
}
</script>

<style scoped>
.child1 {
  width: 300px;
  height: 300px;
  background: hotpink;
}
</style>
