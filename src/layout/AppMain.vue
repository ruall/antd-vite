<script setup lang="ts"></script>
<template>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive v-if="$route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else />
    </transition>
  </router-view>
</template>
