<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import Layout from '/@/layout/Layout.vue'

dayjs.locale('zh-cn')
const locale = zhCN
</script>

<template>
  <a-config-provider :locale="locale">
    <Layout />
  </a-config-provider>
</template>
