<!-- 
1、setup语法糖简介
直接在script标签中添加setup属性就可以直接使用setup语法糖了。
使用setup语法糖后：
    不用写setup函数
    组件只需要引入不需要注册
    属性和方法也不需要再返回，可以直接在template模板中使用。
2、setup语法糖中新增的api
    defineProps：子组件接收父组件中传来的props
    defineEmits：子组件调用父组件中的方法
    defineExpose：子组件暴露属性，可以在父组件中拿到
-->

<template>
  <!-- defineProps：子组件接收父组件中传来的props -->
  <son-component :numb="numb"></son-component>
  <br />
  <br />

  <!-- defineEmits：子组件调用父组件中的方法 -->
  <son-component @addNumb="func" :numb="numb"></son-component>
  <br />
  <br />

  <son-component ref="ssComponent"></son-component>
  <button @click="onClickButton">
    父组件按钮：获取子组件中暴露的值numb_of_son
  </button>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import sonComponent from './son_component.vue'
// 此时注册的变量或方法可以直接在template中使用而不需要导出
const numb = ref(99)
let func = () => {
  numb.value++
  console.log(numb)
}

// 注册ref，获取组件
const ssComponent = ref()
function onClickButton() {
  // 在组件的value属性中获取暴露的值
  console.log(ssComponent.value.numb_of_son) //0
  ssComponent.value.numb_of_son++ // 可以直接修改子组件的数据
  ssComponent.value.aaFunc()
  console.log('打印子组件函数执行的结果：', ssComponent.value.onClickButton2()) // undefined ???
}
//注意：在生命周期中使用或事件中使用都可以获取到值，
//但在setup中立即使用为undefined
// console.log(ssComponent.value.numb_of_son)  //Cannot read properties of undefine
const init = () => {
  // console.log(ssComponent.value.numb_of_son)  //Cannot read properties of undefine
}
init()
onMounted(() => {
  console.log('加载完成:', ssComponent.value.numb_of_son) //888
})
</script>
