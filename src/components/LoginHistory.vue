<template>
  <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg">
    <h3 class="mb-5">En Son Yapılan Girişler</h3>
    <table class="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th
            class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-center uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"
          >
            Profil
          </th>
          <th
            class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap"
          >
            E-Posta
          </th>
          <th
            class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap"
          >
            Rolü
          </th>
          <th
            class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap"
          >
            İşlem Zamanı
          </th>
          <th
            class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap"
          >
            Durum
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100 dark:divide-gray-600">
        <tr v-for="attempt in attempts" :key="attempt.id" class="text-gray-500 dark:text-gray-400">
          <td class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 text-center">
            <img
              :src="
                attempt.user.profilePic
                  ? 'http://localhost:3000' + attempt.user.profilePic
                  : '/user.png'
              "
              class="h-12 w-12 rounded-full border-2 border-gray-500 inline-block"
            />
          </td>
          <td class="border-t-0 align-middle text-xs font-medium whitespace-nowrap p-4">
            <a href="#">{{ attempt.user.email }}</a>
          </td>
          <td
            class="border-t-0 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4"
          >
            <span :class="`${roleMap[attempt.user.role].class} rounded-full py-2 px-4 text-xs text-white`">
              {{ roleMap[attempt.user.role].text }}
            </span>
          </td>
          <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
            {{ dayjs(attempt.createdAt).format('DD.MM.YYYY - HH:mm:ss') }}
          </td>
          <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
            <span class="text-green-600" v-if="attempt.success">Başarılı</span>
            <span class="text-red-600" v-else>Hatalı</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useLoginAttemptsStore } from '@/stores/loginAttempts';
import { onMounted } from 'vue';
import dayjs from 'dayjs';
import { roleMap } from '@/constants/map';
import { storeToRefs } from 'pinia';

const loginHistoryStore = useLoginAttemptsStore();
onMounted(() => {
  loginHistoryStore.fecthAttempts();
});
const { attempts } = storeToRefs(loginHistoryStore);
</script>

<style scoped></style>
