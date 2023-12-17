<template>
  <div>
    <h1>ElementPlus 自动导入 示例</h1>
    <el-button type="primary">按钮</el-button>
    <el-button type="success" round>Success</el-button>
    <el-container>
      <el-header>Element-Plus常用组件</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>main</el-main>
      </el-container>
    </el-container>

    <div class="btn">
      <router-link to="" style="margin-right: 10px">
        <el-button type="primary" round>商品列表</el-button>
      </router-link>
      <router-link to="">
        <el-button type="primary" round>购物车</el-button>
      </router-link>
    </div>
  </div>

  <div>
    <h1>ElementPlus icon 图标使用</h1>
    <el-button type="primary" size="default" :icon="Plus">增加按钮</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>
    <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button>
  </div>

  <div>
    <h1>SVG测试</h1>

    <!-- 测试SVG图标使用 -->
    <!-- SVG：图标外层容器节点，内部需要与use标签结合使用 -->
    <svg style="width: 30px; height: 30px">
      <!-- xlink:href指定用哪一个图标，属性值务必 #icon-图标名字 -->
      <!-- use标签fill属性可以设置图标的颜色 -->
      <use xlink:href="#icon-phone" fill="red"></use>
    </svg>
    <br />
    <svg style="width: 30px; height: 30px">
      <use xlink:href="#icon-lock" fill="blue"></use>
    </svg>
    <br />
    <svg style="width: 30px; height: 30px">
      <use xlink:href="#icon-logout" fill="green"></use>
    </svg>
    <br />
    <svg style="width: 30px; height: 30px">
      <use xlink:href="#icon-home" fill="gold"></use>
    </svg>
  </div>

  <div>
    <h1>SVG-封装组件 非全局组件</h1>
    <!-- 两张写法都可以 -->
    <SvgIcon22 name="home" width="36px" height="36px" color="black"></SvgIcon22>
    <svg-icon22 name="phone" width="36px" height="36px" color="red"></svg-icon22>
    <svg-icon22 name="refresh" width="36px" height="36px" color="blue"></svg-icon22>
    <svg-icon22 name="welcome" width="36px" height="36px" color="red"></svg-icon22>
  </div>

  <div>
    <h1>SVG-封装组件 全局组件</h1>
    <!-- 两张写法都可以 -->
    <SvgIcon name="home" width="36px" height="36px" color="red"></SvgIcon>
    <svg-icon name="phone" width="36px" height="36px" color="pink"></svg-icon>
    <svg-icon name="refresh" width="36px" height="36px" color="yellow"></svg-icon>
    <svg-icon name="welcome" width="36px" height="36px" color="green"></svg-icon>
  </div>

  <div>
    <h2>测试scss全局变量</h2>
  </div>
</template>

<script setup lang="ts">
import { Plus, Edit, Delete } from '@element-plus/icons-vue'
import SvgIcon22 from '@/components/SvgIcon/index.vue'
console.log('获取环境变量import.meta.env：', import.meta.env)
</script>

<style lang="scss" scoped>
div {
  h2 {
    color: $color;
  }
}

.el-header {
  background-color: skyblue;
  text-align: center;
  line-height: 60px;
}

.btn {
  text-align: center;
}
</style>
