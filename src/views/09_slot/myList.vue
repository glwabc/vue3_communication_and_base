<template>
  <div class="list-container">
    <div class="list-item" v-for="(item, i) in data" :key="i">
      <div class="first">
        <div>姓名：{{ item.name }}</div>
        <!-- 默认插槽的 name 为defalut,message 是作用域插槽传递的参数（子传父） -->
        <slot :message="item.name" :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
defineProps(['data'])
</script>
<style scoped>
.list-container {
}
.list-item {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
}
.first {
  display: flex;
  justify-content: space-between;
}
</style>
