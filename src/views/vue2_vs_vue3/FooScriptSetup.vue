<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="increase">count:{{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = 'Foo Script Setup语法糖写法 vue3'
const count = ref(0)
function increase() {
  count.value++
}
</script>
