<template>
  <div>defineProps：子组件接收父组件中传来的props：{{ numb }}</div>

  <!-- defineEmits：子组件调用父组件中的方法 -->
  <button @click="onClickButton">子组件按钮1：numb数值加1</button>

  <div>子组件中的值numb_of_son:{{ numb_of_son }}</div>
  <button @click="onClickButton2">子组件按钮2：numb_of_son数值加1</button>
  <hr />
</template>
<script lang="ts" setup>
// import {ref,defineExpose,defineProps,defineEmits} from 'vue';
// 在 Vue 3 中，defineProps、defineEmits、defineExpose 已经成为了编译器宏，不再需要显式地导入。
import { ref } from 'vue'
defineProps({
  numb: {
    type: Number,
    default: 2,
  },
})

const emit = defineEmits(['addNumb'])
const onClickButton = () => {
  //emit(父组件中的自定义方法,参数一,参数二,...)
  emit('addNumb')
}

let numb_of_son = ref(888)
const onClickButton2 = () => {
  numb_of_son.value++
}
function aaFunc() {
  console.log('暴露给父组件的子组件函数')
}
//暴露出子组件中的属性
defineExpose({
  numb_of_son,
  aaFunc,
  onClickButton2,
})
</script>
