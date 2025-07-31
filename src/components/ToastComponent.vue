<template>
  <transition name="toast-fade" mode="out-in">
    <div
      v-if="visible"
      :class="[
        'fixed bottom-5 right-5 z-50 px-4 py-2 rounded shadow-lg text-white',
        type === 'success' ? 'bg-green-500' : 'bg-red-500',
      ]"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  message: String,
  type: {
    type: String,
    default: 'success', // or 'error'
  },
});

const visible = ref(true);

onMounted(() => {
  setTimeout(() => {
    visible.value = false;
  }, 3000); // 3 saniye sonra otomatik kaybolur
});
</script>

<style scoped>
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 0.3s ease;
}
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
}
</style>
