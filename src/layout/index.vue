<script setup lang="ts">
import Aside from './components/aside.vue'
import Header from './components/header.vue'
import Container from './components/container.vue'
import { ref } from 'vue'

const showclass = ref('asideshow')
</script>
<template>
  <el-container style="height: 100%" class="index-con">
    <el-aside width="200px" :class="showclass">
      <Aside />
    </el-aside>
    <el-container class="main-con">
      <el-header class="index-header">
        <Header />
      </el-header>
      <el-main clss="index-main">
        <Container />
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
/* .el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
} */
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.index-con {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.aside {
  width: 64px !important;
  height: 100%;
  background-color: #334157;
  margin: 0px;
}
.asideshow {
  width: 240px !important;
  height: 100%;
  background-color: #334157;
  margin: 0px;
}
.index-header,
.index-main {
  padding: 0px;
  //   border-left: 2px solid #333;
}
</style>
