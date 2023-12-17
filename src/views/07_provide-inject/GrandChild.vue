<template>
  <div class="child1">
    <h1>孙子组件2</h1>
    <p>provide传值：{{ car }}</p>
    <p>props传值：{{ message2 }}</p>
    <button @click="updateCar">更新 provide传值 数据</button>
    <hr />
    <P>count:{{ count }}</P>
    <button @click="add">我自己+1</button>
    <p>最后会使用谁：{{ secretAA }}</p>
  </div>
</template>

<script setup lang="ts">
import { inject, provide, ref } from 'vue'
defineProps(['message2'])
// 注入祖先组件提供数据
// 需要参数:即为祖先提供数据的key
// 可以有第二个参数，即为接收变量的默认值
// 用于接受的 变量名 不需要你和前面保持一致。
let car: any = inject('TOKEN')
// let car:any = inject('TOKEN',"德国大众");
const updateCar = () => {
  car.value = '自行车'
}

// =======================================

const count = inject('message', 88)
const add = inject('messageAdd', () => {})

const secretAA = inject('secret', '我使用谁的？')
</script>

<style scoped>
.child1 {
  color: white;
  width: 250px;
  height: 300px;
  background: red;
}
</style>
