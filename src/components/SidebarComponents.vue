<template>
  <!-- Overlay -->
  <div class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" x-transition:enter="transition ease-out duration-200"
    x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
    x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100"
    x-transition:leave-end="opacity-0">
  </div>

  <!-- Sidebar -->
  <aside
    class="fixed inset-y-0 left-0 z-50 w-64 bg-gray-300 dark:bg-gray-800 transform transition-transform duration-300 ease-in-out md:translate-x-0">
    <div class="flex items-center justify-between h-16 px-4 bg-gray-100 dark:bg-gray-900">
      <span class="text-gray-600 dark:text-white text-lg font-bold">Superadmin</span>
      <button @click="sidebarOpen = false" class="text-white md:hidden" aria-label="Close sidebar">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <nav class="mt-5 overflow-y-auto h-[calc(100vh-4rem)]">
      <router-link to="/"
        class="flex items-center px-4 py-2 text-gray-600 bg-gray-300 hover:bg-gray-400 dark:text-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800">
        <i class="fas fa-tachometer-alt mr-3"></i>Anasayfa
      </router-link>
      <router-link to="/notes"
        class="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-400 dark:text-gray-100 dark:hover:bg-gray-700">
        <i class="fas fa-sticky-note mr-3"></i>Notlar
      </router-link>
      <router-link to="/users"
        class="w-full flex items-center justify-between px-4 py-2 text-gray-600 bg-gray-300 hover:bg-gray-400 dark:text-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800">
        <div class="flex items-center">
          <i class="fas fa-users mr-3"></i>Kullanıcılar
        </div>
      </router-link>
      <router-link to="/settings"
        class="w-full flex items-center justify-between px-4 py-2 text-gray-600 bg-gray-300 hover:bg-gray-400 dark:text-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800">
        <div class="flex items-center">
          <i class="fas fa-cog mr-3"></i>Ayarlar
        </div>
      </router-link>
      <a href="#"
        class="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-400 dark:text-gray-100 dark:hover:bg-gray-700">
        <i class="fas fa-sign-out-alt mr-3"></i>Çıkış Yap
      </a>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const sidebarOpen = ref(false);
</script>

<style scoped></style>
