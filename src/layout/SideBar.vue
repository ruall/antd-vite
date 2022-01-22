<template>
  <a-menu
    default-active="/home"
    class="el-menu-vertical-demo"
    :collapse="false"
    :router="true"
    @open="handleOpen"
    @close="handleClose"
  >
    <a-menu-item index="/home">
      <template #title>
        <el-icon> <i class="fa fa-gear"></i> </el-icon>
        <span>平台首页</span>
      </template>
    </a-menu-item>

    <a-sub-menu>
      <template #title>
        <a-icon><i class="fa fa-cloud"></i></a-icon>
        <span>集群管理</span>
      </template>
      <a-menu-item index="/echart"><i class="fa fa-address-card-o"></i> 添加集群 </a-menu-item>
      <a-menu-item index="/about"><i class="fa fa-envelope-o"></i> 删除集群 </a-menu-item>
    </a-sub-menu>

    <a-sub-menu>
      <template #title>
        <a-icon><i class="fa fa-bar-chart-o"></i></a-icon>
        <span>可观测性</span>
      </template>
      <a-menu-item index="/home"><i class="fa fa-address-card-o"></i> 网络变更 </a-menu-item>
      <a-menu-item index="/button"><i class="fa fa-envelope-o"></i> 路由规则 </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script setup lang="ts">
const handleOpen = (key: any, keyPath: any) => {
  console.log(key, keyPath)
}
const handleClose = (key: any, keyPath: any) => {
  console.log(key, keyPath)
}
</script>
