<template>
  <header
    class="bg-white dark:bg-gray-800 dark:text-white shadow-sm h-16 flex items-center justify-between px-4 fixed top-0 right-0 left-0 md:left-64 z-30">
    <button @click="sidebarOpen.toggle" class="text-gray-500 dark:text-white md:hidden" aria-label="Open sidebar">
      <i class="fas fa-bars text-2xl"></i>
    </button>
    <div></div>
    <div class="flex items-center">
      <div class="mr-5">
        <button id="theme-toggle" class="h-10 w-10 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700" @click="isDark = !isDark">
          <svg class="fill-violet-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg class="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div class="relative">
        <input type="text" placeholder="Arama yap..."
          class="pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          aria-label="Search">
        <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
      </div>
      <div class="ml-4 flex items-center">
        <button class="text-gray-500 mr-4" aria-label="Notifications">
          <i class="fas fa-bell"></i>
        </button>
        <div class="w-8 h-8 rounded-full bg-gray-300" role="img" aria-label="User avatar">
          <router-link to="/profile"><img src="https://placebeard.it/320/320" alt="User Avatar"
              class="w-full h-full rounded-full"></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar';
import { ref, onMounted, watch } from 'vue';

const sidebarOpen = useSidebarStore();
const isDark = ref(false);

// İlk açılışta localStorage kontrolü
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme === 'dark'
  document.documentElement.classList.toggle('dark', isDark.value)
})

// Kullanıcı tema değiştirince class ve localStorage güncelle
watch(isDark, (val) => {
  document.documentElement.classList.toggle('dark', val)
  localStorage.setItem('theme', val ? 'dark' : 'light')
})
</script>

<style scoped></style>
