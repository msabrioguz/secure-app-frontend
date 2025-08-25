<template>
  <main class="p-6 mt-16 flex-1 overflow-y-auto dark:bg-gray-900 dark:text-white">
    <!-- Dashboard Content -->
    <nav class="flex mb-5" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2">
        <li class="inline-flex items-center">
          <router-link
            to="/"
            class="text-gray-700 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-600 inline-flex items-center"
          >
            <svg
              class="w-5 h-5 mr-2.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            Anasayfa
          </router-link>
        </li>
      </ol>
    </nav>
    <!-- Content -->
    <div>
      <h1 class="text-2xl font-bold mb-6">Özet Bilgiler</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow dark:border-gray-300 dark:border-solid dark:border"
        >
          <div class="flex items-center">
            <i class="fas fa-users text-blue-500 text-2xl mr-4"></i>
            <div>
              <p class="text-gray-500 dark:text-gray-200">Toplam Kullanıcılar</p>
              <h3 class="text-xl font-bold dark:text-white">{{ userCount }}</h3>
            </div>
          </div>
        </div>
        <div
          class="bg-white p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-300 dark:border-solid dark:border"
        >
          <div class="flex items-center">
            <i class="fas fa-dollar-sign text-green-500 text-2xl mr-4"></i>
            <div>
              <p class="text-gray-500 dark:text-gray-200">Gelir</p>
              <h3 class="text-xl font-bold dark:text-white">$12,345</h3>
            </div>
          </div>
        </div>
        <div
          class="bg-white p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-300 dark:border-solid dark:border"
        >
          <div class="flex items-center">
            <i class="fas fa-chart-line text-purple-500 text-2xl mr-4"></i>
            <div>
              <p class="text-gray-500 dark:text-gray-200">Büyüme</p>
              <h3 class="text-xl font-bold dark:text-white">+15%</h3>
            </div>
          </div>
        </div>
        <div
          class="bg-white p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-300 dark:border-solid dark:border"
        >
          <div class="flex items-center">
            <i class="fas fa-tasks text-yellow-500 text-2xl mr-4"></i>
            <div>
              <p class="text-gray-500 dark:text-gray-200">Notlar</p>
              <h3 class="text-xl font-bold dark:text-white">23</h3>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg col-span-1 md:col-span-2 lg:col-span-2">
          <h1 class="text-xl">Hızlı Not</h1>
          <p class="text-gray-600 dark:text-gray-400 mb-4">Notlarınızı hızlıca ekleyin.</p>
          <form class="mb-4">
            <label for="noteTitle" class="block text-gray-700 dark:text-gray-300 mb-2"
              >Başlık</label
            >
            <input
              type="text"
              id="noteTitle"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Not başlığını girin"
            />
            <label for="noteContent" class="block text-gray-700 dark:text-gray-300 mt-4 mb-2"
              >İçerik</label
            >
            <textarea
              id="noteContent"
              rows="4"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Not içeriğini girin"
            ></textarea>
            <div class="flex justify-between my-4">
              <div>
                <label class="text-sm">Periyot Tarihi</label> <br />
                <input
                  id="datepicker"
                  class="border border-gray-300 rounded px-3 py-2 w-40 dark:text-white dark:bg-gray-700"
                  type="text"
                  placeholder="Tarih Seçin"
                />
              </div>
              <div class="flex items-center justify-center">
                <div class="group relative cursor-pointer">
                  <span class="text-sm">Periyot</span>
                  <div
                    class="flex items-center justify-between space-x-5 border dark:bg-gray-700 px-4"
                  >
                    <a class="menu-hover my-1 py-1 text-gray-400 lg:mx-4"> Periyot </a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                  >
                    <a
                      class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                      >Günlük</a
                    >
                    <a
                      class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                      >Aylık</a
                    >
                    <a
                      class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                      >Yıllık</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between mt-4">
              <label class="flex items-center space-x-3 cursor-pointer">
                <div class="relative">
                  <input type="checkbox" class="sr-only peer dark:text-black" />
                  <div
                    class="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"
                  ></div>
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:left-6"
                  ></div>
                </div>
                <span class="text-black dark:text-white text-sm">Tekrarlanan</span>
              </label>
              <label class="flex items-center space-x-3 cursor-pointer">
                <div class="relative">
                  <input type="checkbox" class="sr-only peer" />
                  <div
                    class="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-yellow-600 transition-colors duration-300"
                  ></div>
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:left-6"
                  ></div>
                </div>
                <span class="text-black dark:text-white text-sm">Tek Seferlik</span>
              </label>
            </div>
            <div class="flex flex-col justify-center mt-4">
              <button
                type="submit"
                class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Notu Kaydet
              </button>
            </div>
          </form>
        </div>
        <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-3 overflow-x-auto">
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap"
                >
                  Yapılacaklar
                </th>
                <th
                  class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap"
                >
                  Periyot
                </th>
                <th
                  class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap"
                >
                  Tarih
                </th>
                <th
                  class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"
                >
                  Durumu
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-600">
              <tr class="text-gray-500 dark:text-gray-400">
                <td
                  class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
                >
                  <a href="#">Yedek Kontrol</a>
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-green-600 whitespace-nowrap p-4"
                >
                  Günlük
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4"
                >
                  1 Mayıs 2025
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex">
                    <span class="mr-2 text-xs font-medium text-red-600">02:15:55</span>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500 dark:text-gray-400">
                <td
                  class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
                >
                  <a href="#">Wsus Update</a>
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-yellow-600 whitespace-nowrap p-4"
                >
                  Aylık
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4"
                >
                  10 Temmuz 2025
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex">
                    <span class="mr-2 text-xs font-medium text-yellow-500">2 Gün</span>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500 dark:text-gray-400">
                <td
                  class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
                >
                  <a href="#">STDS Evrakları</a>
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-yellow-600 whitespace-nowrap p-4"
                >
                  Aylık
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4"
                >
                  31 Kasım 2025
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex">
                    <span class="mr-2 text-xs font-medium text-teal-500">1 Hafta</span>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500 dark:text-gray-400">
                <td
                  class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
                >
                  <a href="#">Veritabanı Geri Yükleme Testi</a>
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-yellow-600 whitespace-nowrap p-4"
                >
                  Aylık
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4"
                >
                  25 Aralık 2025
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex">
                    <span class="mr-2 text-xs font-medium text-green-600">1 Ay</span>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500 dark:text-gray-400">
                <td
                  class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
                >
                  <a href="#">SYPD Evrakları</a>
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-red-600 whitespace-nowrap p-4"
                >
                  Yıllık
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4"
                >
                  1 Ocak 2026
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex">
                    <span class="mr-2 text-xs font-medium text-orange-600">6 Ay</span>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500 dark:text-gray-400">
                <td
                  class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
                >
                  <a href="#">Hbys Güncellemesi</a>
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-green-600 whitespace-nowrap p-4"
                >
                  Günlük
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4"
                >
                  1 Ocak 2026
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex">
                    <span class="mr-2 text-xs font-medium text-rose-600">1 Yıl</span>
                  </div>
                </td>
              </tr>
              <tr class="text-gray-500 dark:text-gray-400">
                <td
                  class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
                >
                  <a href="#">Yazıcı Sayaç</a>
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-yellow-600 whitespace-nowrap p-4"
                >
                  Aylık
                </td>
                <td
                  class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4"
                >
                  1 Mart 2026
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex">
                    <span class="mr-2 text-xs font-medium text-red-600">2 Yıl</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </main>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import flatpickr from 'flatpickr'
import { onMounted, ref } from 'vue'

onMounted(() => {
  flatpickr('#datepicker', {
    dateFormat: 'd.m.Y',
    locale: {
      firstDayOfWeek: 1, // Pazartesi
      weekdays: {
        shorthand: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
        longhand: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
      },
      months: {
        shorthand: [
          'Oca',
          'Şub',
          'Mar',
          'Nis',
          'May',
          'Haz',
          'Tem',
          'Ağu',
          'Eyl',
          'Eki',
          'Kas',
          'Ara',
        ],
        longhand: [
          'Ocak',
          'Şubat',
          'Mart',
          'Nisan',
          'Mayıs',
          'Haziran',
          'Temmuz',
          'Ağustos',
          'Eylül',
          'Ekim',
          'Kasım',
          'Aralık',
        ],
      },
    },
  })
})

const userCount = ref(0);
const userStore = useUserStore();

userStore.getUserCount().then((count) => {
  userCount.value = count;
});
</script>

<style scoped></style>
