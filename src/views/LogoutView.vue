<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Oturum Sonlandırıldı</h2>
      <form>
        <div class="mb-6 flex items-center">
          <i class="fas fa-sign-out-alt text-blue-600 text-2xl mr-5"></i>
          <p class="text-sm text-justify">Sistemden başarılı bir şekilde çıkış yaptınız.</p>
        </div>
        <div class="flex items-center justify-between mb-4">
          <!-- <button type="submit" class="bg-blue-600 border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white font-bold py-2 px-4 rounded">Sıfırla</button> -->
          <router-link to="login"
            class="w-full bg-blue-600 border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white font-bold py-2 px-4 rounded text-center">Anasayfaya
            Dön</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';


const auth = useAuthStore();
auth.logout(); // Oturumu kapatmak için auth store'daki logout metodunu çağ
</script>

<style scoped>

</style>
