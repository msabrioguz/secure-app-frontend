<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-body">
          <h2 class="text-lg font-bold mb-2">Kullanıcı Oluştur</h2>
          <hr class="mb-4 border-gray-300 dark:border-gray-600" />
          <form class="mb-4">
            <label for="name" class="block text-gray-700 dark:text-gray-300 mt-4 mb-2">İsim</label>
            <input
              type="text"
              id="name"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="İsim girin"
              v-model="name"
            />
            <span class="text-red-500 text-sm">{{ errors.name }}</span>
            <label for="lastName" class="block text-gray-700 dark:text-gray-300 mt-4 mb-2"
              >Soyisim</label
            >
            <input
              type="text"
              id="lastName"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Soyisim girin"
              v-model="surname"
            />
            <span class="text-red-500 text-sm">{{ errors.surname }}</span>
            <label for="email" class="block text-gray-700 dark:text-gray-300 mt-4 mb-2"
              >E-Posta</label
            >
            <input
              type="text"
              id="email"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="email@eposta.com"
              v-model="email"
            />
            <span class="text-red-500 text-sm">{{ errors.email }}</span>
            <label for="password" class="block text-gray-700 dark:text-gray-300 mt-4 mb-2"
              >Parola</label
            >
            <input
              type="password"
              id="password"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Parola girin"
              v-model="password"
            />
            <span class="text-red-500 text-sm">{{ errors.password }}</span>
            <label for="passwordAgain" class="block text-gray-700 dark:text-gray-300 mt-4 mb-2"
              >Parola Tekrarı</label
            >
            <input
              type="password"
              id="passwordAgain"
              class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Parola tekrarı girin"
              v-model="passwordAgain"
            />
            <span class="text-red-500 text-sm">{{ errors.passwordAgain }}</span>
            <div class="flex flex-col justify-center mt-4">
              <span class="text-xs text-center text-gray-400"
                ><strong>Not:</strong> Bu formda ki tüm alanlar doldurulması zorunlu
                alanlardır.</span
              >
            </div>
          </form>
          <div class="flex flex-row justify-between">
            <button class="bg-red-500 rounded text-white px-4 py-2" @click="$emit('close')">
              Vazgeç
            </button>
            <button
            :disabled="isSubmitting"
            class="bg-blue-500 text-white rounded px-4 py-2 w-56" @click="onSubmit">
              <svg
            v-if="isSubmitting"
            class="animate-spin h-5 w-5 text-white mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <span>{{ isSubmitting ? 'Kayıt Ediliyor...' : 'Kaydet' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useToast } from '@/composables/useToast';
import userRegisterSchema from '@/schemas/userRegister.schema';
import { useUserStore } from '@/stores/user';
import { useField, useForm } from 'vee-validate';

const userStore = useUserStore();
const showToast = useToast();
const emit = defineEmits(['click', 'close']);
const props = defineProps({
  show: Boolean,
});

// VeeValidation
const { handleSubmit, errors, isSubmitting } = useForm({ validationSchema: userRegisterSchema });

const {value: name} = useField('name');
const {value: surname} = useField('surname');
const {value: email} = useField('email');
const {value: password} = useField('password');
const {value: passwordAgain} = useField('passwordAgain');

const onSubmit = handleSubmit(async (values) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 3 saniye gecikme
    userStore.newUser(values);
    showToast('Kullanıcı başarıyla eklendi.', 'success');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err.response?.data?.message || 'Bir hata oluştu.');
    showToast(err.response?.data?.message || 'Bir hata oluştu.', 'error');
  }finally {
    emit('close');
  }
});
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 600px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
