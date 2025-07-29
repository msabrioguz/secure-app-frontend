<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Giriş Yap</h2>
      <form>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">E-posta</label>
          <input type="email" id="email"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Şifre</label>
          <input type="password" id="password"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required>
        </div>
        <div class="mb-4">
          <label class="flex items-center space-x-3 cursor-pointer">
            <div class="relative">
              <input type="checkbox" class="sr-only peer">
              <div class="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors duration-300">
              </div>
              <div
                class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:left-6">
              </div>
            </div>
            <span class="text-sm">Beni Hatırla</span>
          </label>
        </div>
        <div class="flex items-center justify-between mb-4">
          <button type="submit"
            class="bg-blue-600 border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white font-bold py-2 px-4 rounded">Giriş
            Yap</button>
          <a href="./forgot-password.html"
            class="bg-transparent border-2 border-blue-600 hover:bg-blue-700 text-blue-600 hover:text-white font-bold py-2 px-4 rounded">Şifremi
            Unuttum</a>
        </div>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">Hesabınız yok mu? <router-link to="register"
          class="text-blue-600 hover:underline">Kayıt Olun</router-link></p>
      <p class="mt-2 text-center text-sm text-gray-600"><router-link to="/" class="text-blue-600 hover:underline">Ana
          Sayfaya Dön</router-link></p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
