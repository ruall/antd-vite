<script setup lang="ts">
console.log(1)
</script>
<template>
  <div style="height: 100%" class="bwt bg">
    <el-dropdown class="f-right">
      <span>
        管理员
        <el-icon class="el-icon-arrow-right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<style lang="scss" scoped>
/* .left-nav{
  width: 12%;
  height: 93.5%;
  background-color:#545c64;
} */
.bwt {
  justify-content: space-between;
  width: 100%;
  display: flex;
}
.bg {
  background-color: #334157;
}
.f-right {
  position: fixed;
  right: 20px;
  color: #fff;
  line-height: 60px;
  cursor: pointer;
  text-align: center;
}
</style>
