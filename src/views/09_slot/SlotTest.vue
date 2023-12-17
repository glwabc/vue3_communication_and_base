<template>
  <div>
    <h1>slot</h1>
    <!-- 
      3.作用域插槽
      在封装组件的过程中，可以为预留的<slot> 插槽绑定 props 数据，这种带有 props 数据
      的<slot> 叫做“作用域插槽”。
      作用域插槽，要显示的数据已经在组件中，以什么样的样式显示数据(用什么标签和标签的样
      式)，可以由组件的使用者进行指定。
      为作用域插槽指定插槽内的元素必须使用 <template> 标签。
      作用域插槽也能取名
      作用域插槽:就是可以传递数据的插槽,子组件可以讲数据回传给父组件,父组件可以决定这些
      回传的数据是以何种结构或者外观在子组件内部去展示！！！
      获取插槽绑定 props 数据的方法：
      1.scope="接收的变量名"：<template scope="接收的变量名">
      2.slot-scope="接收的变量名"：<template slot-scope="接收的变量名">
      3.v-slot:插槽名="接收的变量名"：<template v-slot:插槽名="接收的变量名">
      ！！！！ scope slot-scope已无效！！！！！
    -->
    <Test1 :todos="todos">
      <template v-slot="{ $row, $index }">
        <!-- 必须是 :style 不能缺少：-->
        <p :style="{ color: $row.done ? 'green' : 'red' }">
          {{ $row.title }}--{{ $index }}
        </p>
      </template>
    </Test1>
    <!-- 
      插槽:默认插槽、具名插槽、作用域插槽
      插槽就是子组件中的提供给父组件使用的一个占位符，用<slot></slot> 表示，父组件可以在
      这个占位符中填充任何模板代码，如 HTML、组件等，填充的内容会替换子组件的标签。
      如果在封装组件时没有预留任何 <slot> 插槽，则用户提供的任何自定义内容都会被丢弃。即
      用户提供的页面元素没有位置放入。
      指定需要向子组件的插槽区域放入的元素，需要放入插槽的元素写在组件标签内
      1.匿名插槽
        一个不带 name 的 插槽会带有隐含的名字“default”，即匿名插槽。
        即：没有指定 name 名称的插槽，会有隐含的名称叫做 “default”。
        匿名：name默认为default
      2.具名插槽
        在向具名插槽提供内容时，可以在一个 <template> 元素上使用 v-slot 指令，并以 v-slot 的参
        数的形式提供其名称   
        （可以直接放在标签中么？如<div v-slot="header">  不可以！！！）
        （v-slot can only be used on components or <template> tags.）
          <template v-slot:插槽的name>
            需要向插槽中放入的内容
          </template>
        任何没有被包裹在带有 v-slot 的<template>中的内容都会被视为默认插槽的内容。

        slot and slot-scope
        具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 
        这两个目前已被废弃但未被移除且仍在文档中的 attribute。
        使用 slot 属性指定元素放置的插槽：slot="插槽的name"，slot 属性可以直接写在元素标签上，
        即 slot 属性不用必须与<template> 元素配合，且不同的标签可以使用 slot 属性指定相同的插
        槽，使用 slot 属性指定了相同的插槽都会被放入一个插槽中，后面的元素会被追加在前面放入插
        槽的元素后。
    -->
    <Test>
      <div>
        <pre>大江东去浪淘尽,千古分流人物</pre>
      </div>
      <!-- 具名插槽填充a -->
      <template #a>
        <div>我是填充具名插槽a位置结构</div>
      </template>
      <!-- 具名插槽填充b v-slot指令可以简化为 # -->
      <template #b>
        <div>我是填充具名插槽b位置结构</div>
      </template>
    </Test>
  </div>

  <!-- 4.作用域插槽 示例 -->
  <my-list :data="tableArr">
    <!-- default 是插槽的名称，message 是组件传的参数 -->
    <template #default="{ message, item }">
      <!-- 这里要用 :type -->
      <el-button
        :type="item.province == '上海' ? 'primary' : 'danger'"
        @click="handleClick(message)"
      >
        详情
      </el-button>
    </template>
  </my-list>
</template>
<!-- 
  在项目中集成element-plus，有两种方式：
  全局引用：所有的组件全部集成，优点是集成比较简单，缺点是全部组件会打包到项目代码中
  按需引用：优点是打包生成的代码会小一些，缺点是引用起来麻烦一些
  
  对于el-button，它是随element-plus全局注册的组件，所以不需要再引入。如果是一个没有
  引入的组件，需要引入
-->

<script setup lang="ts">
import Test from './Test.vue'
import Test1 from './Test1.vue'
import myList from './myList.vue'
import { ref } from 'vue'
//todos数据
let todos = ref([
  { id: 1, title: '吃饭', done: true },
  { id: 2, title: '睡觉', done: false },
  { id: 3, title: '打豆豆', done: true },
  { id: 4, title: '打游戏', done: false },
])

// ========== 作用域插槽 示例 =============
const tableArr = ref([
  {
    date: '2016-05-02',
    name: '张峰',
    province: '江苏省',
    city: '南京市',
    address: '南京市江宁区将军大道',
    zip: 200333,
  },
  {
    date: '2016-05-04',
    name: '吴丹',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1517 弄',
    zip: 200333,
  },
  {
    date: '2016-05-01',
    name: '林天',
    province: '江苏省',
    city: '南京市',
    address: '南京市雨花台区软件大道',
    zip: 200333,
  },
])

const handleClick = (obj: string) => {
  console.log('点击：', obj)
}
</script>

<style scoped></style>
