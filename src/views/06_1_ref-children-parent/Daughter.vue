<template>
  <div class="dau">
    <h1>
      我是闺女曹杰：
      <span style="color: white">{{ money }}</span>
    </h1>
    <button @click="handler($parent)">点击我爸爸给我10000元</button>
  </div>
</template>
<!-- 
$parent  子组件获取父组件的数据、调用父组件的方法

官方介绍：指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以
用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。
如果组件没有父组件，他的$parent为undefined，App组件(根组件)的$parent
不是undefined，也不是App本身。
如果组件有多个父亲，但是$parent只能找到一个，不知道是不是bug，建议慎用。
注意：节制地使用$parent 和 $children它们的主要目的是作为访问组件的应急
方法。更推荐用 props 和 events 实现父子组件通信。
-->
<script setup lang="ts">
import { ref } from 'vue'
//闺女钱数
let money = ref(999999)
//闺女按钮点击回调
//$parent:可以在子组件内部获取到父组件的实例
const handler = ($parent: any) => {
  money.value += 10000
  $parent.money -= 10000
}
</script>

<style scoped>
.dau {
  width: 30vw;
  height: 200px;
  background: hotpink;
}
</style>
