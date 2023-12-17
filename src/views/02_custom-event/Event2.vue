<template>
  <div class="child">
    <p>我是子组件2</p>
    <button @click="handler">点击我触发自定义事件xxx</button>
    <button @click="$emit('click', 'AK47', 'J20')">
      点击我触发自定义事件click
    </button>
  </div>
</template>

<script setup lang="ts">
// defineEmits：子传父方法
// defineEmit返回一个触发器，用于触发事件

//利用defineEmits方法返回函数触发自定义事件
//defineEmits方法不需要引入直接使用
// defineEmits方法执行，传递一个数组，数组元素即为将来组件需要触发的自定义事件类型，此方执行会返回一个$emit方法用于触发自定义事件。
// 正常说父组件中标签书写@click应该为原生DOM事件,但是如果子组件内部通过defineEmits定义就变为自定义事件了
let $emit = defineEmits(['xxx', 'click'])

// 当点击按钮的时候，事件回调内部调用$emit方法去触发自定义事件,第一个参数为触发事件类型，第二个、三个、N个参数即为传递给父组件的数据。
const handler = () => {
  //第一个参数:事件类型 第二个|三个|N参数即为注入数据
  $emit('xxx', '东风导弹', '航母')
}
</script>

<style scoped>
.child {
  width: 400px;
  height: 200px;
  background: pink;
}
</style>
