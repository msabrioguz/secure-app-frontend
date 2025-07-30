<template>
  <div class="min-h-screen flex">
    <SidebarComponents />
    <div class="flex-1 flex flex-col md:ml-64">
      <HeaderComponents />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponents from '@/components/HeaderComponent.vue';
import SidebarComponents from '@/components/SidebarComponent.vue';



</script>

<style scoped></style>
