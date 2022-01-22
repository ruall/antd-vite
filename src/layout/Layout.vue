<template>
  <a-layout>
    <a-layout-sider class="grid-content"> <Sidebar /> </a-layout-sider>
    <a-layout>
      <a-layout-header> <Navbar /> <ScrollTabs /> </a-layout-header>
      <a-layout-content> <AppMain /> </a-layout-content>
      <a-layout-footer> 页脚 </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Navbar from '/@/layout/NavBar.vue'
import Sidebar from '/@/layout/SideBar.vue'
import AppMain from '/@/layout/AppMain.vue'
</script>

<style scoped lang="scss">
/*整体显示区域布局样式*/
.ant-layout {
  height: 100vh;
}
body > .ant-layout {
  margin-bottom: 40px;
}
.ant-layout-sider {
  line-height: 150px;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}
.ant-layout-content {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.ant-layout-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 50px;
}
.ant-layout-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 20px;
  font-size: 14px;
}
</style>
