<template>
  <div class="child2">
    <h2>我是子组件2:曹丕</h2>
    <button @click="handler">点击我给兄弟送一台法拉利 方式二</button>
    <hr />
    <!-- <p>{{ pig }}</p> -->
  </div>
</template>

<script setup lang="ts">
//引入$bus对象
import $bus from '../../bus'
import { onMounted } from 'vue'
//点击按钮回调
const handler = () => {
  // 发送自定义事件
  console.log('子组件2，点击发送数据-->>>')
  $bus.emit('car', { car: '法拉利' })
}

onMounted(() => {
  $bus.on('why', (msg) => {
    console.log('接收到 子组件1 发送的数据了：', msg)
  })

  $bus.on('pig', (val) => {
    console.log('收到data :>>', val)
  })
  $bus.on('dog', (val) => {
    console.log('收到data :>>', val)
  })
})
</script>

<style scoped>
.child2 {
  width: 300px;
  height: 300px;
  background: skyblue;
}
</style>
