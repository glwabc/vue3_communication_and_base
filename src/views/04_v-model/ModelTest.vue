<template>
  <div>
    <div>
      <span>v-model收集表单数据，实现数据同步：{{ info }}</span>
      <input type="text" v-model="info" />
      <!-- v-model can only be used on <input>, <textarea> and <select> elements. -->
    </div>
    <div class="container">
      <div>
        <h1>方法一:钱数{{ money1 }}</h1>
      </div>
      <div>
        <h1>
          同时绑定多个v-model{ pageNo:{{ pageNo }} pageSize:{{ pageSize }} }
        </h1>
      </div>
    </div>

    <hr />

    <div class="container">
      <!-- 父子组件数据同步 方法一  利用 props 和 自定义事件 -->
      <!-- props:父亲给儿子数据 -->
      <Child :modelValue="money1" @update:modelValue="handler">
        子组件1：实现父子组件数据同步 方法一 利用 props 和 自定义事件
      </Child>
      <Child v-model="money1">子组件1：方法二 v-model方式实现同样功能</Child>
      <!-- 
       v-model组件身上使用
       第一:相当有给子组件传递props[modelValue] = 10000
       第二:相当于给子组件绑定自定义事件update:modelValue
      -->

      <Child1 v-model:pageNo="pageNo" v-model:pageSize="pageSize"></Child1>
    </div>
  </div>
</template>

<script setup lang="ts">
//v-model指令:收集表单数据,数据双向绑定
//v-model也可以实现组件之间的通信,实现父子组件数据同步的业务  方法二

// 父子组件数据同步   利用 props 和 自定义事件   方法一
// 父亲给子组件数据 props
// 子组件给父组件数据 自定义事件

//引入子组件
import Child from './Child.vue'
import Child1 from './Child1.vue'
import { ref } from 'vue'

let info = ref('') // 收集表单数据，数据同步
//父组件的数据钱数       与子组件1
let money1 = ref(10000)
//自定义事件的回调
const handler = (num: number) => {
  //将来接受子组件传递过来的数据
  money1.value = num
}

//父亲的数据     与子组件2
let pageNo = ref(1)
let pageSize = ref(3)
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
<!-- 
justify-content: space-between;   /* 均匀排列每个元素 首个元素放置于起点，末尾元素放置于终点 */  左右两侧无缝隙
justify-content: space-around;    /* 均匀排列每个元素 每个元素周围分配相同的空间 */             两倍关系
justify-content: space-evenly;    /* 均匀排列每个元素 每个元素之间的间隔相等 */                 缝隙均等
space-evenly 会在容器两端和子元素之间均匀分配空白空间，
而 space-between 只在子元素之间均匀分配空白空间，容器两端没有额外的间距。
 -->
