<script setup lang="ts">
const handleOpen = (key: string, path: string[]) => {
  console.log(key, path)
}
const handleClose = (key: string, path: string[]) => {
  console.log(key, path)
}
</script>
<template>
  <div style="height: 100%">
    <div class="left-nav">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#334157"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        @open="handleOpen"
        @close="handleClose"
      >
        <h3 class="logobox">后台管理系统</h3>
        <el-menu-item index="/index">
          <i class="el-icon-menu"></i>
          <span>企业管理</span>
        </el-menu-item>
        <el-menu-item index="/user">
          <i class="el-icon-menu"></i>
          <span>用户管理</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.left-nav {
  /* width: 12%; */
  height: 100vh;
  background-color: #334157;
}
.logobox {
  height: 60px;
  line-height: 60px;
  color: #9d9d9d;
  font-size: 20px;
  text-align: center;
  margin: 0px;
  /* padding: 20px 0px; */
}
</style>
