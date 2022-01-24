<script setup lang="ts">
import { ref } from 'vue'

const res = ref('Index首页')
</script>
<template>
  <el-button type="primary">首页</el-button>
  <div>{{ res }}</div>
</template>
