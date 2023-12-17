<template>
  <h1 class="index">Child2</h1>
  <div>{{ msg }}</div>
  <input type="text" v-model="inputValue" />
  <button @click="handleClickMsg">动态更新msg</button>
  <br />
  <br />
  <div>{{ provideKey }}</div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
defineProps({
  msg: {
    type: String,
  },
})

const emit = defineEmits(['handleChangeMsgChild2'])

const handleClickMsg = () => {
  emit('handleChangeMsgChild2', inputValue.value) // 方法一
}

const inputValue = ref('')

const provideKey = inject('provideKey')
</script>

<style lang="less" scoped></style>
