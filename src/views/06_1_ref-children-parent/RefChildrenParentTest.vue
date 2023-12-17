<template>
  <div class="box">
    <div class="father">
      <h1>
        我是父亲曹操:
        <span style="color: blue">{{ money }}</span>
      </h1>
      <button @click="handler">找我的儿子曹植借10元</button>
    </div>
    <Son ref="son"></Son>
    <Dau></Dau>
  </div>
</template>

<script setup lang="ts">
//ref:可以获取真实的DOM节点,可以获取到子组件实例VC(vue component)
//$parent:可以在子组件内部获取到父组件的实例
// 通过 ref，父组件可以获取子组件实例，并调用其方法或访问其属性。
// 而通过 $parent，子组件可以获取父组件的实例，从而实现父子之间的数据传递和方法调用。
// 同时，我们还可以使用 defineExpose 方法来向外暴露组件的属性，以供组件调用。

//引入子组件
import Son from './Son.vue'
import Dau from './Daughter.vue'
import { ref } from 'vue'
//父组件钱数
let money = ref(100000000)
//获取子组件的实例
let son = ref()
//父组件内部按钮点击回调
const handler = () => {
  money.value += 10
  //儿子钱数减去10
  son.value.money -= 10
  son.value.fly()
}
//对外暴露
defineExpose({
  money,
})
</script>

<style scoped>
.box {
  width: 100vw;
  height: 500px;
  background: skyblue;
  display: flex;
  justify-content: space-evenly;
}

.father {
  width: 30vw;
  height: 200px;
  background: rebeccapurple;
}
</style>
