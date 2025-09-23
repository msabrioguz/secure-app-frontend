<template>
  <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg">
    <h3 class="mb-5">En Son Üye Olanlar</h3>
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
        <tr v-for="user in lastUsers" :key="user.id" class="text-gray-500 dark:text-gray-400">
          <td class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 text-center">
            <img
              :src="user.profilePic ? 'http://localhost:3000' + user.profilePic : '/user.png'"
              class="h-12 w-12 rounded-full border-2 border-gray-500 inline-block"
            />
          </td>
          <td class="border-t-0 align-middle text-xs font-medium whitespace-nowrap p-4">
            <a href="#">{{ user.email }}</a>
          </td>
          <td
            class="border-t-0 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4"
          >
            <span
              :class="`${roleMap[user.role as RoleKey].class} rounded-full py-2 px-4 text-xs text-white`"
            >
              {{ roleMap[user.role as RoleKey].text }}
            </span>
          </td>
          <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
            {{ dayjs(user.createdAt).format('DD.MM.YYYY - HH:mm:ss') }}
          </td>
          <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
            <span class="text-green-600">Aktif</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import dayjs from 'dayjs';
import { Role } from '@/enums/role.enum';
import { useLastRegisterUsers } from '@/stores/lastRegisterUsers';
import { storeToRefs } from 'pinia';

const lastUsersStore = useLastRegisterUsers();
onMounted(async () => {
  await lastUsersStore.fecthAttempts();
});
const { lastUsers } = storeToRefs(lastUsersStore);

const roleMap = {
  [Role.ADMIN]: { text: 'Admin', class: 'bg-red-500' },
  [Role.MODERATOR]: { text: 'Moderatör', class: 'bg-yellow-500' },
  [Role.USER]: { text: 'Normal', class: 'bg-green-500' },
} as const;

type RoleKey = keyof typeof roleMap;
</script>

<style scoped></style>
