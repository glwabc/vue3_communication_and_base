<!-- 一文搞懂Vue3中如何使用ref获取元素节点？ -->
<!-- https://zhuanlan.zhihu.com/p/527995785 -->

<template>
  <!-- 使用 ref 的场景有多种，一种是单独绑定在某一个元素节点上，另一种便是绑定在 v-for 循环出来的元素上了。-->

  <h3>一、Vue3 中 ref 访问元素</h3>
  <!-- ref 的基本功能之一，就是获取元素节点 -->
  <!-- 在 div 元素上绑定了 ref 属性，并命名为 hello -->
  <div ref="hello">小猪课堂一</div>

  <!-- 
    在vue2中，直接使用 this.$refs.hello 的方式就可以获取到该 DOM 元素了
    console.log(this.$refs.hello); 
    Vue2中 可以通过 ref 直接操作单个 DOM和组件，如： this.$refs.box；
    Vue2中 可以批量通过 ref 操作 DOM 和组件，如： this.$refs.li[0]；

    Vue3 中通过 ref 访问元素节点与 Vue2 不太一样，在 Vue3 中我们是没有 this 的，
    所以当然也没有 this.$refs。想要获取 ref，我们只能通过声明变量的方式。
    -->

  <h3>二(1)v-for 中使用 ref</h3>
  <ul>
    <li v-for="item in 10" ref="itemRefs">
      <!-- item:1-10; index:0-9 -->
      {{ item }} - 小猪课堂二
    </li>
    <!-- 
        1 - 小猪课堂二
        2 - 小猪课堂二
        ……
        10 - 小猪课堂二
        -->
    <!-- item:1-10;    index:0-9 -->
  </ul>

  <h3>二(2)获取 v-for 遍历的 DOM 或者 组件</h3>
  <ul>
    <li v-for="item in cityList" :key="item.id" :ref="getDom">
      {{ item.city }}
    </li>
  </ul>

  <!-- ref 属性还可以接收一个函数作为属性值，这个时候我们需要在 ref 前面加上 :  -->
  <h3>三、ref 绑定函数</h3>
  <div :ref:any="setHelloRef">小猪课堂三</div>

  <h3>四、在v-for中使用ref绑定函数</h3>
  <ul>
    <li v-for="item in 10" :ref="(el:any) => setItemRefs(el, item)">
      {{ item }} - 小猪课堂四
    </li>
  </ul>

  <h3>五、组件上使用 ref</h3>
  <!-- 
    下面这段代码中我们新增了一个子组件，然后再子组件上面绑定了 ref，其用法基本上和 ref 直接绑定在 DOM 元素上一致。
    我们把 ref 绑定在组件上，通常就是为了调用子组件里面的方法或者数据
    在 Vue3 中，使用 ref 获取子组件时，如果想要获取子组件的数据或者方法，子组件可以通过defineExpose 方法暴露数据。 
    -->
  <Child ref="childRef"></Child>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, onBeforeUpdate } from 'vue'
import type { ComponentPublicInstance, HTMLAttributes } from 'vue'
import Child from './Child.vue'

// 一、Vue3 中 ref 访问元素
// 给 div 元素添加了 ref 属性，为了获取到这个元素，我们声明了一个与 ref 属性名称相同的变量 hello，
// 然后我们通过 hello.value 的形式便获取到了该 div 元素。
// 注意点：
//      · 变量名称必须要与 ref 命名的属性名称一致。
//      · 通过 hello.value 的形式获取 DOM 元素。
//      · 必须要在 DOM 渲染完成后才可以获取 hello.value，否则就是 null。
const hello = ref<any>(null)

onMounted(() => {
  console.log('hello.value:', hello.value) // hello.value: <div>​小猪课堂一​</div>​
  // innerHTML 获取HTML当前标签的起始符和结束符之间的内容
  console.log('hello.value.innerHTML:', hello.value.innerHTML) // hello.value.innerHTML: 小猪课堂一
})

// 二（1） v-for 中使用 ref
const itemRefs = ref<any>([])
onMounted(() => {
  console.log('itemRefs.value:', itemRefs.value) //Proxy(Array)
  // 使用变量的形式拿到了每一个 li 标签元素
  console.log('itemRefs.value[5]:', itemRefs.value[5])
  // <li><!-- item:1-10; index:0-9 -->6 - 小猪课堂二 </li>
})

// 二（2）获取 v-for 遍历的 DOM 或者 组件
// 总结： 先定义一个空数组，再定义一个函数获取元素，并把该函数绑定到 ref 上（必须动态绑定），
// 最后在函数中可以通过参数得到单个元素，这个元素一般可以放到数组中。
const cityList = reactive([
  { city: '武汉', id: '027' },
  { city: '南京', id: '025' },
  { city: '重庆', id: '023' },
])
// 1.定义一个空数组，接收所有的dom
const lis: any = []
// 2. 定义一个函数，往空数组push dom
const getDom = (el: any) => {
  lis.push(el)
}
onMounted(() => {
  console.log('二(2)  lis:', lis, 'lis[0]', lis[0])
})

// 三、ref 绑定函数
// 前面我们在组件上定义 ref 时，都是以一个字符串的形式作为 ref 的名字，其实我们的 ref 属性还可以
// 接收一个函数作为属性值，这个时候我们需要在 ref 前面加上 : 。
const setHelloRef = (
  el: HTMLElement | ComponentPublicInstance | HTMLAttributes,
) => {
  console.log(el) // <div>小猪课堂三</div>
}
// 这里ref 属性接收的是一个 setHelloRef 函数，该函数会默认接收一个 el 参数，这个参数就是我们需要获取
// 的 div 元素。假如需求中我们采用这种方式的话，那么完全可以把 el 保存到一个变量中去，供后面使用。

// 四、在v-for中使用ref绑定函数
let itemRefsArray: Array<any> = []
const setItemRefs = (
  el: HTMLElement | ComponentPublicInstance | HTMLAttributes,
  item: number,
) => {
  if (el) {
    itemRefsArray.push({
      id: item,
      el,
    })
  }
}
onMounted(() => {
  console.log('小猪课堂四：', itemRefsArray)
})
// ……
// 2: {id: 3, el: li}
// 3: {id: 4, el: li}
// 4: {id: 5, el: li}
// ……

// 五、组件上使用 ref
// 前面我们所使用 ref 时，都是在一个具体的 dom 元素上绑定，但是我们也可以将 ref 绑定在组件上；
// 我们将 ref 绑定在组件上时，便可以获取到该组件里面的所有数据和方法.
//
// Vue3 需要借助生命周期方法，因为在 setup 执行时，template 中的元素还没挂载到页面上，所以必须
// 在 mounted 之后才能获取到元素。
// 总结： 先申明 ref 响应式数据，再返回给模版使用，模板中通过 ref 绑定数据；
// 即： 先定义一个空数组，再定义一个函数获取

const childRef = ref<any>(null)
onMounted(() => {
  console.log('课堂五-childRef.value：', childRef.value) // child 组件实例
  console.log('课堂五-childRef.value.message：', childRef.value.message)
  childRef.value.onChange()
  // 课堂五-childRef.value： Proxy(Object) {message: RefImpl, __v_skip: true, onChange: ƒ}
  // Parent.vue:101 课堂五-childRef.value.message： 我是子组件
  // 我是子组件方法
})
</script>
