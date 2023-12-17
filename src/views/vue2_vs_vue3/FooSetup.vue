<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="increase">vue2 count:{{ count }}</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const msg = 'Foo Setup函数写法 vue2 '
    const count = ref(0)
    function increase() {
      count.value++
    }
    return {
      msg,
      count,
      increase,
    }
  },
}
</script>
