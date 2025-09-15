<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Kayıt Ol</h2>
      <form @submit.prevent="onSubmit">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">İsim</label>
          <input
            type="text"
            id="name"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            v-model="name"
          />
          <span class="text-red-500 text-sm">{{ errors.name }}</span>
        </div>
        <div class="mb-4">
          <label for="surName" class="block text-sm font-medium text-gray-700">Soyisim</label>
          <input
            type="text"
            id="surName"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            v-model="surname"
          />
          <span class="text-red-500 text-sm">{{ errors.surname }}</span>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">E-posta</label>
          <input
            type="email"
            id="email"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            v-model="email"
          />
          <span class="text-red-500 text-sm">{{ errors.email }}</span>
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Şifre</label>
          <input
            type="password"
            id="password"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            v-model="password"
          />
          <span class="text-red-500 text-sm">{{ errors.password }}</span>
        </div>
        <div class="mb-6">
          <label for="passwordAgain" class="block text-sm font-medium text-gray-700"
            >Şifre Tekrarı</label
          >
          <input
            type="password"
            id="passwordAgain"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            v-model="passwordAgain"
          />
          <span class="text-red-500 text-sm">{{ errors.passwordAgain }}</span>
        </div>
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        >
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
          <span>{{ isSubmitting ? 'Gönderiliyor...' : 'Kayıt Ol' }}</span>
        </button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        Hesabınız var mı?
        <router-link to="login" class="text-blue-600 hover:underline">Giriş Yapın</router-link>
      </p>
      <p class="mt-2 text-center text-sm text-gray-600">
        <router-link to="/" class="text-blue-600 hover:underline">Ana Sayfaya Dön</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useForm, useField } from 'vee-validate';
import { useToast } from '@/composables/useToast';
import { useAuthStore } from '@/stores/auth';
import userRegisterSchema from '@/schemas/userRegister.schema';

const router = useRouter();
const showToast = useToast();
const auth = useAuthStore();

// VeeValidation formu başlat
const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: userRegisterSchema,
});

const { value: name } = useField('name');
const { value: surname } = useField('surname');
const { value: email } = useField('email');
const { value: password } = useField('password');
const { value: passwordAgain } = useField('passwordAgain');

const onSubmit = handleSubmit(async (values) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 3 saniye gecikme
    const response = await auth.register(values);
    // const response = await axios.post('http://localhost:3000/auth/register', values);
    showToast('Kayıt başarılı! Lütfen giriş yapın.', 'success');
    console.log('Kayıt başarılı:', response);
    if (response.status === 201) {
      router.push('/user/login');
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // alert(err.response?.data?.message || 'Bir hata oluştu.');
    showToast(err.response?.data?.message || 'Bir hata oluştu.', 'error');
  }
});
</script>

<style scoped></style>
