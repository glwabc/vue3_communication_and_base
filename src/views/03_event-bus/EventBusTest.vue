<template>
  <div class="box">
    <h1>全局事件总线$bus</h1>
    <!-- 
    vue3项目中使用mitt进行 兄弟组件 传值

    全局事件总线可以实现任意组件通信，在vue2中可以根据VM与VC关系推出全局事件总线。
    但是在vue3中没有Vue构造函数，也就没有Vue.prototype.以及组合式API写法没有this，
    那么如果想在Vue3中使用全局事件总线功能可以使用插件mitt实现。 
  
    安装mitt：npm install mitt -save
             npm install --save mitt
    
    发送事件/发布
    mybus.emit('自定义事件名称','数据');

    接收事件/订阅
    mybus.on('自定义事件名称',data=>{
        console.log(data);//接收到的数据
    })

    移除总线事件监听
    mybus.off('自定义事件名称');

    // 创建mitt实例
    mitt()
    //触发事件，两个参数：name：触发的方法名，data：需要传递的参数
    emit(name,data) 
    // 绑定事件，两个参数：name：绑定的方法名，callback：触发后执行的回调函数
    on(name,callback) 
    // 解绑事件，一个参数：name：需要解绑的方法名
    off(name)

    清空所有事件
    Bus.all.clear();
    -->
    <hr />
    <div class="container">
      <Child1></Child1>
      <Child2></Child2>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入子组件
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
</script>

<style scoped>
.box {
  width: 100vw;
  height: 400px;
  background: yellowgreen;
}

.container {
  display: flex;
  /* 弹性布局 */
  /* 两端对齐 */
  /* 第一个子元素与容器的起始端之间没有间距，最后一个子元素与容器的末尾端之间也没有间距。 */
  /* 这意味着空白空间仅在子元素之间进行分配。 */
  justify-content: space-between;
}
</style>
