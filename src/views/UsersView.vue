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
              class="text-gray-700 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-600 ml-1 md:ml-2 text-sm font-medium">Kullanıcılar</a>
          </div>
        </li>
      </ol>
    </nav>
    <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg mb-6">
      <div class="flex justify-between mb-3">
        <div class="flex items-center space-x-2">
          <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Kullanıcı Ekle <i class="fas fa-plus ml-2"></i>
          </button>
          <!-- Arama -->
          <input v-model="search" @input="userStore.setSearch(search)" placeholder="Ara (isim / e-posta)"
            class="border px-3 py-2 rounded w-full sm:w-64 text-black" />
        </div>
        <div class="flex items-center space-x-2">
          <button class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
            Düzenle <i class="fas fa-edit ml-2"></i>
          </button>
          <button class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Sil <i class="fas fa-trash ml-2"></i>
          </button>
        </div>
      </div>
      <!-- Tablo -->
      <div v-if="userStore.loading" class="text-gray-500">Yükleniyor...</div>
      <table v-else class="table-auto w-full">
        <thead class="align-middle text-xs whitespace-nowrap p-4 font-semibold text-center uppercase">
          <!-- bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white -->
          <tr class="bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white">
            <th class="px-4 py-3 w-10">
              <input type="checkbox" class="form-checkbox text-blue-600" aria-label="Seç" />
            </th>
            <th class="px-4 py-3">Profil</th>
            <th class="px-4 py-3">Adı Soyadı</th>
            <th class="px-4 py-3">E-Posta Adresi</th>
            <th class="px-4 py-3">Rolü</th>
            <th class="px-4 py-3">Kayıt Zamanı</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-600 text-xs">
          <tr v-for="user in userStore.users" :key="user.id">
            <td class="px-4 py-2">
              <input type="checkbox" class="form-checkbox text-blue-600" aria-label="Seç" />
            </td>
            <td class="px-4 py-2 text-center">
              <img :src="user.profilePic ? 'http://localhost:3000' + user.profilePic : '/user.png'"
                class="h-12 w-12 rounded-full border-2 border-gray-500 inline-block">
            </td>
            <td class="px-4 py-2 text-center">{{ user.name }} {{ user.surname }}</td>
            <td class="px-4 py-2 text-center text-gray-400">{{ user.email }}</td>
            <td class="px-4 py-2 text-center">
              <span :class="`${roleMap[user.role as RoleKey].class} rounded-full py-2 px-4 text-xs text-white`">
                {{ roleMap[user.role as RoleKey].text }}
              </span>

            </td>
            <td class="px-4 py-2 text-center text-gray-400">{{ dayjs(user.createdAt).format('DD.MM.YYYY - HH:mm:ss') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Pagination -->
    <div class="flex items-center justify-center">
      <div class="py-3 border rounded-lg dark:border-gray-600">
        <ol
          class="flex items-center text-sm text-gray-500 divide-x rtl:divide-x-reverse divide-gray-300 dark:text-gray-400 dark:divide-gray-600">
          <!-- Prev -->
          <li>
            <button type="button" :disabled="userStore.page === 1" @click="userStore.setPage(userStore.page - 1)"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 transition text-yellow-600"
              aria-label="Previous" rel="prev">
              <svg class="w-5 h-5 rtl:scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </li>

          <li v-for="p in totalPages" :key="p">
            <button type="button" @click="userStore.setPage(p)"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none"
              :class="[userStore.page === p ? 'transition text-yellow-600 focus:underline bg-yellow-500/10 ring-2 ring-yellow-500' : 'hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition']">
              <span>{{ p }}</span>
            </button>
          </li>
          <!-- Next -->
          <li>
            <button type="button" :disabled="userStore.page >= totalPages"
              @click="userStore.setPage(userStore.page + 1)"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 transition text-yellow-600"
              aria-label="Next" rel="next">
              <svg class="w-5 h-5 rtl:scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </li>
        </ol>
      </div>
    </div>
    <!-- Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg">
        <h2 class="text-lg font-bold mb-2">Kullanıcı Oluştur</h2>
        <hr class="mb-4 border-gray-300 dark:border-gray-600" />
        <form class="mb-4">
          <label for="userName" class="block text-gray-700 dark:text-gray-300 mb-2">Kullanıcı Adı</label>
          <input type="text" id="userName" class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Kullanıcı adı girin" />
          <label for="name" class="block text-gray-700 dark:text-gray-300 mt-4 mb-2">İsim</label>
          <input type="text" id="name" class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="İsim girin" />
          <label for="lastName" class="block text-gray-700 dark:text-gray-300 mt-4 mb-2">Soyisim</label>
          <input type="text" id="lastName" class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Soyisim girin" />
          <label for="email" class="block text-gray-700 dark:text-gray-300 mt-4 mb-2">E-Posta</label>
          <input type="text" id="email" class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="email@eposta.com" />
          <label for="password" class="block text-gray-700 dark:text-gray-300 mt-4 mb-2">Parola</label>
          <input type="password" id="password" class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Parola girin" />
          <label for="passwordAgain" class="block text-gray-700 dark:text-gray-300 mt-4 mb-2">Parola Tekrarı</label>
          <input type="password" id="passwordAgain" class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Parola tekrarı girin" />
          <div class="flex flex-col justify-center mt-4">
            <span class="text-xs text-center text-gray-400"><strong>Not:</strong> Bu formda ki tüm alanlar doldurulması
              zorunlu alanlardır.</span>
            <button type="submit"
              class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Kullanıcı Oluştur
            </button>
          </div>
        </form>
      </div>
      <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg col-span-2">
        <h3 class="mb-5">En Son Yapılan Girişler</h3>
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-center uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                Profil
              </th>
              <th
                class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                Kullanıcı Adı
              </th>
              <th
                class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                Rolü
              </th>
              <th
                class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                İşlem Zamanı
              </th>
              <th
                class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                Durum
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-gray-600">
            <tr class="text-gray-500 dark:text-gray-400">
              <td class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 text-center">
                <image src="https://placebeard.it/320/320"
                  class="h-10 w-10 rounded-full border-2 border-gray-500 inline-block">
                </image>
              </td>
              <td class="border-t-0 align-middle text-xs font-medium whitespace-nowrap p-4">
                <a href="#">mustafa.oguz</a>
              </td>
              <td
                class="border-t-0 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4">
                <span class="bg-red-500 rounded-full py-2 px-4 text-xs text-white">Admin</span>
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                20.07.2025 - 09:47:12
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                <span class="text-green-600">Başarılı</span>
              </td>
            </tr>
            <tr class="text-gray-500 dark:text-gray-400">
              <td class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 text-center">
                <image src="https://placebeard.it/320/320"
                  class="h-10 w-10 rounded-full border-2 border-gray-500 inline-block">
                </image>
              </td>
              <td class="border-t-0 align-middle text-xs font-medium whitespace-nowrap p-4">
                <a href="#">yasin.cihan</a>
              </td>
              <td
                class="border-t-0 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4">
                <span class="bg-yellow-500 rounded-full py-2 px-4 text-xs text-white">Moderatör</span>
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                20.07.2025 - 09:47:12
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                <span class="text-red-600">Hatalı</span>
              </td>
            </tr>
            <tr class="text-gray-500 dark:text-gray-400">
              <td class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 text-center">
                <image src="https://placebeard.it/320/320"
                  class="h-10 w-10 rounded-full border-2 border-gray-500 inline-block">
                </image>
              </td>
              <td class="border-t-0 align-middle text-xs font-medium whitespace-nowrap p-4">
                <a href="#">ali.veli</a>
              </td>
              <td
                class="border-t-0 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4">
                <span class="bg-green-500 rounded-full py-2 px-4 text-xs text-white">Üye</span>
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                20.07.2025 - 09:47:12
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                <span class="text-green-600">Başarılı</span>
              </td>
            </tr>
            <tr class="text-gray-500 dark:text-gray-400">
              <td class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 text-center">
                <image src="https://placebeard.it/320/320"
                  class="h-10 w-10 rounded-full border-2 border-gray-500 inline-block">
                </image>
              </td>
              <td class="border-t-0 align-middle text-xs font-medium whitespace-nowrap p-4">
                <a href="#">ali.veli</a>
              </td>
              <td
                class="border-t-0 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4">
                <span class="bg-green-500 rounded-full py-2 px-4 text-xs text-white">Üye</span>
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                20.07.2025 - 09:47:12
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                <span class="text-red-600">Hatalı</span>
              </td>
            </tr>
            <tr class="text-gray-500 dark:text-gray-400">
              <td class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 text-center">
                <image src="https://placebeard.it/320/320"
                  class="h-10 w-10 rounded-full border-2 border-gray-500 inline-block">
                </image>
              </td>
              <td class="border-t-0 align-middle text-xs font-medium whitespace-nowrap p-4">
                <a href="#">ali.veli</a>
              </td>
              <td
                class="border-t-0 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4">
                <span class="bg-green-500 rounded-full py-2 px-4 text-xs text-white">Üye</span>
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                20.07.2025 - 09:47:12
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                <span class="text-red-600">Hatalı</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg col-span-2 -col-start-3">
        <h3 class="mb-5">En Son Üye Olanlar</h3>
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-center uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                Profil
              </th>
              <th
                class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                Kullanıcı Adı
              </th>
              <th
                class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                Rolü
              </th>
              <th
                class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                İşlem Zamanı
              </th>
              <th
                class="px-4 bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                Durum
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-gray-600">
            <tr class="text-gray-500 dark:text-gray-400">
              <td class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 text-center">
                <image src="https://placebeard.it/320/320"
                  class="h-10 w-10 rounded-full border-2 border-gray-500 inline-block">
                </image>
              </td>
              <td class="border-t-0 align-middle text-xs font-medium whitespace-nowrap p-4">
                <a href="#">mustafa.oguz</a>
              </td>
              <td
                class="border-t-0 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4">
                <span class="bg-red-500 rounded-full py-2 px-4 text-xs text-white">Admin</span>
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                20.07.2025 - 09:47:12
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                <span class="text-green-600">Aktif</span>
              </td>
            </tr>
            <tr class="text-gray-500 dark:text-gray-400">
              <td class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 text-center">
                <image src="https://placebeard.it/320/320"
                  class="h-10 w-10 rounded-full border-2 border-gray-500 inline-block">
                </image>
              </td>
              <td class="border-t-0 align-middle text-xs font-medium whitespace-nowrap p-4">
                <a href="#">yasin.cihan</a>
              </td>
              <td
                class="border-t-0 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4">
                <span class="bg-yellow-500 rounded-full py-2 px-4 text-xs text-white">Moderatör</span>
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                20.07.2025 - 09:47:12
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                <span class="text-red-600">Admin Onayı</span>
              </td>
            </tr>
            <tr class="text-gray-500 dark:text-gray-400">
              <td class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 text-center">
                <image src="https://placebeard.it/320/320"
                  class="h-10 w-10 rounded-full border-2 border-gray-500 inline-block">
                </image>
              </td>
              <td class="border-t-0 align-middle text-xs font-medium whitespace-nowrap p-4">
                <a href="#">ali.veli</a>
              </td>
              <td
                class="border-t-0 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4">
                <span class="bg-green-500 rounded-full py-2 px-4 text-xs text-white">Üye</span>
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                20.07.2025 - 09:47:12
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                <span class="text-green-600">Aktif</span>
              </td>
            </tr>
            <tr class="text-gray-500 dark:text-gray-400">
              <td class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 text-center">
                <image src="https://placebeard.it/320/320"
                  class="h-10 w-10 rounded-full border-2 border-gray-500 inline-block">
                </image>
              </td>
              <td class="border-t-0 align-middle text-xs font-medium whitespace-nowrap p-4">
                <a href="#">ali.veli</a>
              </td>
              <td
                class="border-t-0 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4">
                <span class="bg-green-500 rounded-full py-2 px-4 text-xs text-white">Üye</span>
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                20.07.2025 - 09:47:12
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                <span class="text-yellow-600">E-Posta Onayı</span>
              </td>
            </tr>
            <tr class="text-gray-500 dark:text-gray-400">
              <td class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 text-center">
                <image src="https://placebeard.it/320/320"
                  class="h-10 w-10 rounded-full border-2 border-gray-500 inline-block">
                </image>
              </td>
              <td class="border-t-0 align-middle text-xs font-medium whitespace-nowrap p-4">
                <a href="#">ali.veli</a>
              </td>
              <td
                class="border-t-0 align-middle text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap p-4">
                <span class="bg-green-500 rounded-full py-2 px-4 text-xs text-white">Üye</span>
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                20.07.2025 - 09:47:12
              </td>
              <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4">
                <span class="text-yellow-600">E-Posta Onayı</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Role } from '@/enums/role.enum';
import { useUserStore } from '@/stores/user';
import dayjs from 'dayjs';
import { computed, onMounted, ref } from 'vue';


const userStore = useUserStore();
const search = ref('');

const roleMap = {
  [Role.ADMIN]: { text: 'Admin', class: 'bg-red-500' },
  [Role.MODERATOR]: { text: 'Moderatör', class: 'bg-yellow-500' },
  [Role.USER]: { text: 'Normal', class: 'bg-green-500' },
} as const;

type RoleKey = keyof typeof roleMap;

onMounted(async () => {
  await userStore.fetchUsers();
})

const totalPages = computed(() => Math.ceil(userStore.total / userStore.limit));
</script>

<style scoped></style>
