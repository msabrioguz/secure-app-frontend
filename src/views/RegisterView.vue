<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Kayıt Ol</h2>
      <form>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">İsim</label>
          <input type="text" id="name"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required>
        </div>
        <div class="mb-4">
          <label for="surName" class="block text-sm font-medium text-gray-700">Soyisim</label>
          <input type="text" id="surName"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required>
        </div>
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
        <div class="mb-6">
          <label for="passwordAgain" class="block text-sm font-medium text-gray-700">Şifre Tekrarı</label>
          <input type="password" id="passwordAgain"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required>
        </div>
        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Kayıt
          Ol</button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">Hesabınız var mı? <router-link to="login"
          class="text-blue-600 hover:underline">Giriş Yapın</router-link></p>
      <p class="mt-2 text-center text-sm text-gray-600"><router-link to="/" class="text-blue-600 hover:underline">Ana
          Sayfaya Dön</router-link></p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
