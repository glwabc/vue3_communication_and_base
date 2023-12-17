<template>
  <div class="son">
    <!-- vue2方式传值 -->
    <!-- <p>{{ infoVue2 }}</p>
    <P>{{ moneyVue2 }}</P> -->

    <!-- vue3 方式传值 -->
    <h1>我是子组件:曹植</h1>
    <p>{{ propss.info }}</p>
    <p>{{ propss.money }}</p>
    <!--propss可以省略前面的名字--->
    <p>{{ info }}</p>
    <p>{{ money }}</p>
    <button @click="updateProps">修改props数据</button>
  </div>
</template>

<!-- 
  只要在script开启setup语法糖模式 单文件组件会自动根据文件名生成对应的name选项 
  例如 Tree.vue 那他的name 就是 Tree 自动生成 
-->
<script setup lang="ts">
// props可以实现父子组件通信,在vue3中我们可以通过defineProps获取父组件传递的数据
// 需要使用到defineProps方法去接收父组件传递过来的数据
// defineProps是Vue3提供方法,不需要引入直接使用

// 1.defineProps是vue3的一个宏函数，使用时可不导入
// 2.defineProps是一个函数，参数与vue2的props选项相同
// 3.定义后props可直接在模板中使用，或者在setup其他地方使用
// 4.defineProps返回的props对象，是一个proxy对象，所有特性和reactive基本相同，
//   只不过由defineProps定义出的props对象的值是只读的，还有在模板上可以单独属性直接使用
//     const props= defineProps({
//       msg:String,
//       name:{
//         type:String,
//         default:'xxxx'
//       }
//     })
//     console.log(props.name)
//     props.name = 123 //不能修改，声明的props的值是只读readonly的

// 子组件获取父组件传递数据:方式1   对象写法
// let props = defineProps({
//   info:{
//    type:String,//接受的数据类型
//    default:'默认参数',//接受默认数据
//   },
//   money:{
//    type:Number,
//    default:0
// }})

// 子组件获取父组件传递数据:方式2   数组写法
let propss = defineProps(['info', 'money'])
//按钮点击的回调
let num = 0
const updateProps = () => {
  // 子组件获取到props数据就可以在模板中使用了,但是切记props是只读的(只能读取，不能修改)
  // props.money+=10; // error props:只读的
  console.log(propss.info, ++num) // script 中propss不能省略
}
</script>

<!-- 1.在vue2中，我们使用选项api中的props来接受父组件传递来的数据。 -->
<!-- 2.在vue3的setup中，我们使用defineProps来定义父组件传递的props -->

<!-- vue2 选择式api写法 -->
<!-- 
<script>
  export default {
    props: ['infoVue2', 'moneyVue2']
  }
</script>  
-->

<!-- 
注意事项
1.defineProps只能在setup中使用，且只能在setup的顶层使用，不能在局部作用域使用
2.和vue2一样的原则，defineProps声明的props的值是只读readonly的，不能修改，也
就是说，当传过来的是原始值时不能修改，当是对象类型时，不能修改对象类型的引用地址。
3.注意，在使用defineProps泛型参数来定义props时，泛型本身不能是外部引入的类型 
-->

<style scoped>
.son {
  width: 400px;
  height: 200px;
  background: hotpink;
}
</style>
