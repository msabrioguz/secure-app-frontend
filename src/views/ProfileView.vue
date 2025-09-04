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
              >Profil</a
            >
          </div>
        </li>
      </ol>
    </nav>
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">Profil Bilgileri</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        Profil bilgilerinizi buradan düzenleyebilirsiniz.
      </p>
      <div>
        <div class="text-center justify-center mb-4">
          <div class="relative group inline-block">
            <div class="bg-gray-200 w-48 h-48 mx-auto rounded-full mb-4">
              <img
                :src="profilePicture"
                alt="User Avatar"
                class="w-48 h-48 p-2 rounded-full mx-auto"
                id="show-modal"
                @click="showModal = true"
              />
              <Teleport to="body">
                <!-- use the modal component, pass in the prop -->
                <UploadAvatarComponent :show="showModal" @close="showModal = false">
                  <template #header>
                    <h3>Profil Resmi Yükleyin</h3>
                  </template>
                  <template #body>
                    <profile-upload :show="showModal" @close="showModal = false" />
                  </template>
                </UploadAvatarComponent>
              </Teleport>
              <div
                class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10"
              >
                Profil resmini değiştirmek için tıklayın.
              </div>
            </div>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
            {{ name + ' ' + surName }}
          </h3>
        </div>
      </div>
      <form class="space-y-6" @submit.prevent="onSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-gray-700 dark:text-gray-300 mb-2">Adınız</label>
            <input
              type="text"
              id="name"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              :placeholder="name"
              disabled
            />
          </div>
          <div>
            <label for="surName" class="block text-gray-700 dark:text-gray-300 mb-2"
              >Soyadınız</label
            >
            <input
              type="text"
              id="surName"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              :placeholder="surName"
              disabled
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700 dark:text-gray-300 mb-2">E-Posta</label>
            <input
              type="email"
              id="email"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              :placeholder="email"
              disabled
            />
          </div>
          <div>
            <label for="phone" class="block text-gray-700 dark:text-gray-300 mb-2">Telefon</label>
            <input
              type="tel"
              id="phone"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="+90 555 555 55 55"
              v-model="phone"
            />
          </div>
          <div>
            <label for="datepicker" class="block text-gray-700 dark:text-gray-300 mb-2"
              >Doğum Tarihi</label
            >
            <input
              id="datepicker"
              class="border border-gray-300 rounded w-full px-3 py-2 dark:text-white dark:bg-gray-700"
              type="text"
              placeholder="01.01.1995"
              v-model="birthdate"
            />
          </div>
          <div>
            <label for="role" class="block text-gray-700 dark:text-gray-300 mb-2">Yetki</label>
            <input
              type="text"
              id="role"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              :placeholder="role"
              disabled
            />
          </div>
          <div class="col-span-2 text-center">
            <button
              type="submit"
              class="bg-green-600 text-white p-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
            >
              Güncelle
            </button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import flatpickr from 'flatpickr';
import { onMounted, ref, watch } from 'vue';
import { useToast } from '@/composables/useToast';
import ProfileUpload from '@/components/UploadAvatarComponent.vue';
import UploadAvatarComponent from '@/components/UploadAvatarComponent.vue';

const userStore = useUserStore();
const name = ref('');
const surName = ref('');
const email = ref('');
const role = ref('');
const birthdate = ref('');
const phone = ref('');
const profilePicture = ref('');
const showToast = useToast();
const showModal = ref(false);

userStore.fetchUser().then(() => {
  if (userStore.user) {
    name.value = userStore.user.name;
    surName.value = userStore.user.surname;
    email.value = userStore.user.email;
    role.value = userStore.user.role == 'user' ? 'Kullanıcı' : 'Yönetici';
    phone.value = userStore.user.phoneNumber || '';
    if (userStore.user.profilePic)
      profilePicture.value = `http://localhost:3000${userStore.user.profilePic}`;
    else profilePicture.value = '/user.png';
    birthdate.value = userStore.user.birthDate
      ? new Date(userStore.user.birthDate).toLocaleDateString('tr-TR')
      : '';
  }
});

const onSubmit = () => {
  console.log('Form submitted with:', { phone: phone.value, birthdate: birthdate.value });
  // Burada form verilerini işleyebilirsiniz
  try {
    userStore.updateUserProfile({
      phoneNumber: phone.value,
      birthDate: new Date(birthdate.value),
    });
    showToast('Profiliniz başarıyla güncellendi.', 'success');
  } catch (error) {
    console.error('Profil güncellenirken hata oluştu:', error);
    showToast('Profil güncellenirken bir hata oluştu. Lütfen tekrar deneyin.', 'error');
  }
};

watch(showModal, () => {
  console.log(showModal.value);
  userStore.fetchUser().then(() => {
     if (userStore.user?.profilePic)
      profilePicture.value = `http://localhost:3000${userStore.user.profilePic}`;
    else profilePicture.value = '/user.png';
  })
});

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
  });
});
</script>

<style scoped></style>
