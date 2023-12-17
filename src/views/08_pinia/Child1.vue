<template>
  <div class="child1">
    {{ infoStore.count }}
    <button @click="updateTodo">增加对象数组todos的元素</button>
    <p>todoStore.arr：{{ todoStore.arr }}</p>
    <p>todoStore.total:{{ todoStore.total }}</p>
    <p>todoStore.avg:{{ todoStore.avg }}</p>
    <p>todoStore.max:{{ todoStore.max }}</p>
  </div>
</template>

<script setup lang="ts">
//引入 选项式 仓库
import useInfoStore from '../../store/modules/info'
//获取小仓库对象
let infoStore = useInfoStore()

//引入组合式API函数仓库
import useTodoStore from '../../store/modules/todo'
let todoStore = useTodoStore()

//点击p段落去修改仓库的数据
const updateTodo = () => {
  todoStore.updateTodo()
}
</script>

<style scoped>
.child1 {
  width: 200px;
  height: 200px;
  background: hotpink;
}
</style>
