<template>
  <!-- 父传子 -->
  <Child1
    :msg="msg"
    @handleChangeMsgChild1="handleChangeMsg"
    ref="child1"
    class="ChildClass1"
  ></Child1>
  <Child2 :msg="msg" @handleChangeMsgChild2="handleChangeMsg2" ref="child2" />
  <br />
  <hr />
  <br />
  <div>
    <button @click="handleAlert">parent alert</button>

    <!-- {{ child1.value.child_1Msg }} -->
    <!-- 这样直接使用，会报错：对象为null，因为父组件先渲染，再渲染子组件 -->
    <!-- 所以这里需要使用到onMounted -->

    {{ childMsg }}
  </div>
</template>

<script setup lang="ts">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import { onMounted, ref, provide } from 'vue'

const msg = ref('Hello world!')

const handleChangeMsg = () => {
  msg.value = 'SanMu'
}

const handleChangeMsg2 = (value: any) => {
  // msg.value = value.value;  // 方法二
  msg.value = value // 方法一
}

// const child1 = ref(null);  // 这种写法显示错误：对象可能为 "null"。ts(2531)
const child1 = ref<any>(null)
const child2 = ref<any>(null)

const handleAlert = () => {
  child1.value.handleAlert()
}

const childMsg = ref('')

// onMounted 代表当前节点渲染完毕
onMounted(() => {
  childMsg.value = child1.value.child_1Msg
})

const provideValue = ref('provide value12311111233')
provide('provideKey', provideValue) // key-value结构
</script>

<style lang="less" scoped></style>
