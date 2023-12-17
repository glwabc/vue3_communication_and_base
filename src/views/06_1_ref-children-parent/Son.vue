<template>
  <div class="son">
    <h3>
      我是儿子曹植：
      <span style="color: red">{{ money }}</span>
    </h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
//儿子钱数
let money = ref(666)
const fly = () => {
  console.log('我可以飞')
}
//组件内部数据对外关闭的，别人不能访问
//如果想让外部访问需要通过defineExpose方法对外暴露
defineExpose({
  money,
  fly,
})
</script>

<style scoped>
.son {
  width: 30vw;
  height: 200px;
  background: cyan;
}
</style>
