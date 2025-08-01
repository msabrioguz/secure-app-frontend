<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from './stores/auth';

onMounted(async () => {
  const auth = useAuthStore();
  if(auth.token && !auth.user) {
    try {
      await auth.fetchUser();
    } catch {
      auth.logout();
    }
  }
})
</script>

<style scoped></style>
