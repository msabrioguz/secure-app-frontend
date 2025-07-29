<template>
  <div v-if="auth.user">
    <h2>Welcome, {{ auth.user.email }}</h2>
    <p>Role: {{ auth.user.role }}</p>
    <button @click="auth.logout">Logout</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';

const auth = useAuthStore();
auth.fetchUser();
</script>
