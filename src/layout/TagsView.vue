<template>
  <div class="tags-container">
    <router-link ref="tag" class="scroll-item" to="/home">
      Home
      <span class="el-icon-close"></span>
    </router-link>
    <router-link ref="tag" class="scroll-item" to="/button">
      Button
      <span class="el-icon-close"></span>
    </router-link>
    <router-link v-for="item in 8" :key="item" ref="tag" class="scroll-item" to="/echart">
      Echart
      <span class="el-icon-close"></span>
    </router-link>
  </div>
</template>

<style scoped>
.tags-container {
  height: 30px;
  width: 100%;
  white-space: nowrap;
}
.el-scrollbar {
  height: 100%;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%), 0 0 3px 0 rgb(0 0 0 / 4%);
}
.el-scrollbar .el-scrollbar__wrap .el-scrollbar__view {
  white-space: nowrap;
  overflow: hidden;
}
.scroll-item {
  display: inline-block;
  white-space: nowrap;
  width: 80px;
  height: 28px;
  margin-right: 5px;
  border: 1px solid #d8dce5;
  color: #495060;
  background: #fff;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
}
</style>
