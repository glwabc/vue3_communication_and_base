<template>
  <h1 class="index">Child1-Child</h1>
  {{ provideKey }}
</template>

<script setup lang="ts">
// injece:给…注射;添加,注入(某种特性);投入(金钱或资源)
import { inject } from 'vue'
const provideKey = inject('provideKey')
</script>

<style lang="less" scoped></style>
