<template>
  <div class="child">
    <h1>{{ infoStore.count }}---{{ infoStore.total }}</h1>
    <button @click="updateCount">点击我修改仓库数据</button>
  </div>
</template>

<script setup lang="ts">
import useInfoStore from '../../store/modules/info'
//获取 选项式 小仓库对象
let infoStore = useInfoStore()
console.log(infoStore)
//修改数据方法
const updateCount = () => {
  // infoStore.count++     //修改数据 方法一
  // infoStore.$patch({    //修改数据 方法二   patch 修补; 打补丁; 缝补
  //   count:1111
  // })
  //仓库调用自身的方法去修改仓库的数据
  infoStore.updateNum(66, 77)
}
</script>

<style scoped>
.child {
  width: 200px;
  height: 200px;
  background: yellowgreen;
}
</style>
