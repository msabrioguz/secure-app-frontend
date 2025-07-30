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
        <li>
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <a
              href="#"
              class="text-gray-700 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-600 ml-1 md:ml-2 text-sm font-medium"
              >Notlar</a
            >
          </div>
        </li>
      </ol>
    </nav>
    <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg mb-6 overflow-x-auto">
      <div class="flex justify-between mb-3">
        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Not Ekle <i class="fas fa-plus ml-2"></i>
        </button>
        <div class="flex items-center space-x-2">
          <button class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
            Düzenle <i class="fas fa-edit ml-2"></i>
          </button>
          <button class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Sil <i class="fas fa-trash ml-2"></i>
          </button>
        </div>
      </div>
      <table class="table-auto w-full">
        <thead
          class="align-middle text-xs whitespace-nowrap p-4 font-semibold text-center uppercase"
        >
          <!-- bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white -->
          <tr class="bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-white">
            <th class="px-4 py-3 w-10">
              <input type="checkbox" class="form-checkbox text-blue-600" aria-label="Seç" />
            </th>
            <th class="px-4 py-3">Başlık</th>
            <th class="px-4 py-3">İçerik</th>
            <th class="px-4 py-3">Türü</th>
            <th class="px-4 py-3">Başlangıç</th>
            <th class="px-4 py-3">Bitiş</th>
            <th class="px-4 py-3">Periyot</th>
            <th class="px-4 py-3">Kayıt Tarihi</th>
            <th class="px-4 py-3">Kayıt Eden</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-600 text-xs">
          <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
            <td class="p-4">
              <input type="checkbox" class="form-checkbox text-blue-600" aria-label="Seç" />
            </td>
            <td class="p-4 text-center">Not 1</td>
            <td class="p-4 text-center">Bu bir örnek nottur.</td>
            <td class="p-4 text-center">
              <span class="bg-green-500 rounded-full py-2 px-4 text-xs text-white">Normal</span>
            </td>
            <td class="p-4 text-center text-gray-400">01.01.2025</td>
            <td class="p-4 text-center text-gray-400"></td>
            <td class="p-4 text-center text-gray-400"></td>
            <td class="p-4 text-center text-gray-400">01.01.2025 - 09:10:10</td>
            <td class="p-4 text-center text-gray-400">Mustafa Oğuz</td>
          </tr>
          <tr class="bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
            <td class="p-4">
              <input type="checkbox" class="form-checkbox text-blue-600" aria-label="Seç" />
            </td>
            <td class="p-4 text-center">Not 2</td>
            <td class="p-4 text-center">Bu bir örnek nottur.</td>
            <td class="p-4 text-center">
              <span class="bg-red-500 rounded-full py-2 px-4 text-xs text-white">Tekrarlanan</span>
            </td>
            <td class="p-4 text-center text-gray-400">01.01.2025</td>
            <td class="p-4 text-center text-gray-400">31.01.2025</td>
            <td class="p-4 text-center text-gray-400">Aylık</td>
            <td class="p-4 text-center text-gray-400">01.01.2025 - 09:10:10</td>
            <td class="p-4 text-center text-gray-400">Mustafa Oğuz</td>
          </tr>
          <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
            <td class="p-4">
              <input type="checkbox" class="form-checkbox text-blue-600" aria-label="Seç" />
            </td>
            <td class="p-4 text-center">Not 3</td>
            <td class="p-4 text-center">Bu bir örnek nottur.</td>
            <td class="p-4 text-center">
              <span class="bg-yellow-500 rounded-full py-2 px-4 text-xs text-white"
                >Tek Seferlik</span
              >
            </td>
            <td class="p-4 text-center text-gray-400">01.01.2025</td>
            <td class="p-4 text-center text-gray-400"></td>
            <td class="p-4 text-center text-gray-400"></td>
            <td class="p-4 text-center text-gray-400">01.01.2025 - 09:10:10</td>
            <td class="p-4 text-center text-gray-400">Mustafa Oğuz</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex items-center justify-center">
      <div class="py-3 border rounded-lg dark:border-gray-600">
        <ol
          class="flex items-center text-sm text-gray-500 divide-x rtl:divide-x-reverse divide-gray-300 dark:text-gray-400 dark:divide-gray-600"
        >
          <li>
            <button
              type="button"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 transition text-yellow-600"
              aria-label="Previous"
              rel="prev"
            >
              <svg
                class="w-5 h-5 rtl:scale-x-[-1]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>

          <li>
            <button
              type="button"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none transition text-yellow-600 focus:underline bg-yellow-500/10 ring-2 ring-yellow-500"
            >
              <span>1</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
            >
              <span>2</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
            >
              <span>3</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
            >
              <span>4</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
            >
              <span>5</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
            >
              <span>6</span>
            </button>
          </li>
          <li>
            <button
              disabled
              type="button"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none filament-tables-pagination-item-disabled cursor-not-allowed pointer-events-none opacity-70"
            >
              <span>...</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
            >
              <span>9</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition"
            >
              <span>10</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 transition text-yellow-600"
              aria-label="Next"
              rel="next"
            >
              <svg
                class="w-5 h-5 rtl:scale-x-[-1]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ol>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg">
        <form class="mb-4">
          <label for="noteTitle" class="block text-gray-700 dark:text-gray-300 mb-2">Başlık</label>
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
              <lable class="text-sm">Periyot Tarihi</lable> <br />
              <input
                id="datepicker"
                class="border border-gray-300 rounded px-3 py-2 w-56 dark:text-white dark:bg-gray-700"
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
              class="mt-4 p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Notu Kaydet
            </button>
          </div>
        </form>
      </div>
      <div class="bg-white dark:bg-gray-800 shadow-md p-5 rounded-lg col-span-2">
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
                <div class="flex items-center">
                  <span class="mr-2 text-xs font-medium">10%</span>
                  <div class="relative w-full">
                    <div class="w-full bg-gray-200 rounded-sm h-2">
                      <div class="bg-green-600 h-2 rounded-sm" style="width: 10%"></div>
                    </div>
                  </div>
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
                <div class="flex items-center">
                  <span class="mr-2 text-xs font-medium">25%</span>
                  <div class="relative w-full">
                    <div class="w-full bg-gray-200 rounded-sm h-2">
                      <div class="bg-green-400 h-2 rounded-sm" style="width: 25%"></div>
                    </div>
                  </div>
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
                <div class="flex items-center">
                  <span class="mr-2 text-xs font-medium">35%</span>
                  <div class="relative w-full">
                    <div class="w-full bg-gray-200 rounded-sm h-2">
                      <div class="bg-teal-400 h-2 rounded-sm" style="width: 35%"></div>
                    </div>
                  </div>
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
                <div class="flex items-center">
                  <span class="mr-2 text-xs font-medium">50%</span>
                  <div class="relative w-full">
                    <div class="w-full bg-gray-200 rounded-sm h-2">
                      <div class="bg-yellow-500 h-2 rounded-sm" style="width: 50%"></div>
                    </div>
                  </div>
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
                <div class="flex items-center">
                  <span class="mr-2 text-xs font-medium">65%</span>
                  <div class="relative w-full">
                    <div class="w-full bg-gray-200 rounded-sm h-2">
                      <div class="bg-orange-600 h-2 rounded-sm" style="width: 65%"></div>
                    </div>
                  </div>
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
                <div class="flex items-center">
                  <span class="mr-2 text-xs font-medium">75%</span>
                  <div class="relative w-full">
                    <div class="w-full bg-gray-200 rounded-sm h-2">
                      <div class="bg-rose-600 h-2 rounded-sm" style="width: 75%"></div>
                    </div>
                  </div>
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
                <div class="flex items-center">
                  <span class="mr-2 text-xs font-medium">97%</span>
                  <div class="relative w-full">
                    <div class="w-full bg-gray-200 rounded-sm h-2">
                      <div class="bg-red-600 h-2 rounded-sm" style="width: 97%"></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
