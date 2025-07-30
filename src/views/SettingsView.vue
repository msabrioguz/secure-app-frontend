<template>
  <main class="p-6 mt-16 flex-1 overflow-y-auto dark:bg-gray-900 dark:text-white">
        <!-- Dashboard Content -->

        <nav class="flex mb-5" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2">
            <li class="inline-flex items-center">
              <router-link to="/"
                class="text-gray-700 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-600 inline-flex items-center">
                <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                  </path>
                </svg>
                Anasayfa
              </router-link>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <a href="#"
                  class="text-gray-700 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-600 ml-1 md:ml-2 text-sm font-medium">Ayarlar</a>
              </div>
            </li>
          </ol>
        </nav>
        <!--- Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg">
            <h1 class="text-xl">Parola Değiştirme</h1>
            <p class="text-gray-600 dark:text-gray-400 mt-2">Parolanızı buradan değiştirebilirsiniz.</p>

            <form class="mb-4">
              <label for="currentPassword" class="block text-gray-700 dark:text-gray-300 mb-2">Mevcut Parola</label>
              <input type="password" id="currentPassword"
                class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white mb-2"
                placeholder="Mevcut parolanızı girin">
              <label for="password" class="block text-gray-700 dark:text-gray-300 mb-2">Parola</label>
              <input type="password" id="password"
                class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white mb-2"
                placeholder="Yeni parolanızı girin">
              <label for="passwordAgain" class="block text-gray-700 dark:text-gray-300 mb-2">Parola Tekrarı</label>
              <input type="password" id="passwordAgain"
                class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                placeholder="Parolanızı tekrar girin">
              <div class="flex flex-col justify-center mt-4">
                <span class="text-gray-600 dark:text-gray-400 mb-2">Parolanızı değiştirmek için lütfen mevcut parolanızı
                  girin.</span>
                <button type="submit"
                  class="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                  Parola Değiştir
                </button>
              </div>
            </form>
          </div>

          <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg">
            <h1 class="text-lg">Güvenlik</h1>
            <p class="text-gray-600 dark:text-gray-400 mt-2">İkili doğrulama sistem ayarlarınızı buradan
              yönetebilirsiniz.</p>
            <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              <label class="flex items-center space-x-3 cursor-pointer">
                <div class="relative">
                  <input type="checkbox" class="sr-only peer dark:text-black" checked>
                  <div
                    class="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors duration-300">
                  </div>
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:left-6">
                  </div>
                </div>
                <span class="text-black dark:text-white text-sm">E-Posta</span>
              </label>
              <label class="flex items-center space-x-3 cursor-pointer">
                <div class="relative">
                  <input type="checkbox" class="sr-only peer dark:text-black">
                  <div
                    class="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors duration-300">
                  </div>
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:left-6">
                  </div>
                </div>
                <span class="text-black dark:text-white text-sm">Sms</span>
              </label>
              <label class="flex items-center space-x-3 cursor-pointer">
                <div class="relative">
                  <input type="checkbox" class="sr-only peer dark:text-black" checked>
                  <div
                    class="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors duration-300">
                  </div>
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:left-6">
                  </div>
                </div>
                <span class="text-black dark:text-white text-sm">Authenticator</span>
              </label>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg">
            <h1 class="text-lg">Bildirim</h1>
            <p class="text-gray-600 dark:text-gray-400 mt-2">Bildirim ayarlarınızı buradan yönetebilirsiniz.</p>
            <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              <label class="flex items-center space-x-3 cursor-pointer">
                <div class="relative">
                  <input type="checkbox" class="sr-only peer dark:text-black" checked>
                  <div
                    class="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors duration-300">
                  </div>
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:left-6">
                  </div>
                </div>
                <span class="text-black dark:text-white text-sm">E-Posta</span>
              </label>
              <label class="flex items-center space-x-3 cursor-pointer">
                <div class="relative">
                  <input type="checkbox" class="sr-only peer dark:text-black">
                  <div
                    class="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors duration-300">
                  </div>
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:left-6">
                  </div>
                </div>
                <span class="text-black dark:text-white text-sm">Sms</span>
              </label>
              <label class="flex items-center space-x-3 cursor-pointer">
                <div class="relative">
                  <input type="checkbox" class="sr-only peer dark:text-black" checked>
                  <div
                    class="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors duration-300">
                  </div>
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:left-6">
                  </div>
                </div>
                <span class="text-black dark:text-white text-sm">Uygulama</span>
              </label>
            </div>
          </div>
        </div>
        <!-- End Content -->
      </main>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
