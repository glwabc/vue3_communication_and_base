<template>
  <div class="com">
    <h1>
      各种Vue组件间通信/传值
      <span style="color: red">非常重要, 面试必备</span>
    </h1>

    <div>
      <h2 style="display: inline">演示1:</h2>
      &nbsp;&nbsp;
      <router-link to="/props_pre">props</router-link>
      &nbsp;&nbsp;
      <router-link to="/event_pre">custom event</router-link>
      &nbsp;&nbsp;
      <router-link to="/bus_pre">event bus</router-link>
      &nbsp;&nbsp;
      <router-link to="/model_pre">v-model</router-link>
      &nbsp;&nbsp;
      <router-link to="/attrs-listeners_pre">useAttrs</router-link>
      &nbsp;&nbsp;
      <router-link to="/proxy_demo">proxy demo</router-link>
      &nbsp;&nbsp;
      <router-link to="/ref_parent_pre">ref$parent</router-link>
      &nbsp;&nbsp;
      <router-link to="/ref_of_vue3">ref_of_vue3</router-link>
      &nbsp;&nbsp;
      <router-link to="/ref_and_active">ref_and_active</router-link>
      &nbsp;&nbsp;
      <router-link to="/provide-inject_pre">provide-inject</router-link>
      &nbsp;&nbsp;
      <router-link to="/vuex_pre">pinia</router-link>
      &nbsp;&nbsp;
      <router-link to="/slot_pre">slot</router-link>
      &nbsp;&nbsp;
    </div>
    <div>
      <h2 style="display: inline">演示2:</h2>
      &nbsp;&nbsp;
      <router-link to="/sanmu_study">三木笔记-通信方式</router-link>
      &nbsp;&nbsp;
    </div>
    <div>
      <h2 style="display: inline">演示3(vue2 vs vue3):</h2>
      &nbsp;&nbsp;
      <router-link to="/FooScriptSetup">
        ScriptSetup vue3 setup语法糖写法
      </router-link>
      &nbsp;&nbsp;
      <router-link to="/FooSetup">vue2 setup函数写法</router-link>
      &nbsp;&nbsp;
      <router-link to="/FooView">FooView</router-link>
      &nbsp;&nbsp;
    </div>
    <div>
      <h2 style="display: inline">演示4(vue3 setup语法糖的特性):</h2>
      &nbsp;&nbsp;
      <router-link to="/father">父组件 vue3 setup语法糖写法</router-link>
      &nbsp;&nbsp;
      <router-link to="/son">子组件 vue3 setup语法糖写法</router-link>
      &nbsp;&nbsp;
    </div>
    <div>
      <h2 style="display: inline">演示5：项目（插件）集成</h2>
      &nbsp;&nbsp;
      <router-link to="/test">项目集成测试</router-link>
    </div>
    <br />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>
<script lang="ts" setup></script>
<style lang="less" scoped>
.com {
  margin: 10px;

  a {
    font-size: 16px;
    margin-right: 5px;

    &.router-link-active {
      color: red;
    }
  }
}
</style>
<style>
.box {
  border: solid 1px #aaa;
  margin: 5px;
  padding: 5px;
}
</style>
