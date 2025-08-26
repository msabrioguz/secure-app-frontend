<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Giriş Yap</h2>
      <form @submit.prevent="onSubmit">
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
        <div class="mb-4">
          <label class="flex items-center space-x-3 cursor-pointer">
            <div class="relative">
              <input type="checkbox" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"
              ></div>
              <div
                class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:left-6"
              ></div>
            </div>
            <span class="text-sm">Beni Hatırla</span>
          </label>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="bg-blue-600 border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white font-bold py-2 px-2 rounded text-sm flex items-center justify-center"
          >
            <svg
              v-if="isSubmitting"
              class="animate-spin h-5 w-5 mr-2 text-white"
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
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>{{ isSubmitting ? 'Giriş Yapılıyor...' : 'Giriş Yap' }}</span>
          </button>
          <a
            href="./forgot-password.html"
            class="bg-transparent border-2 border-blue-600 hover:bg-blue-700 text-blue-600 hover:text-white font-bold py-2 px-2 rounded text-sm text-center"
            >Şifremi Unuttum</a
          >
        </div>
      </form>
      <p class="mt-4 text-center text-sm text-gray-600">
        Hesabınız yok mu?
        <router-link to="register" class="text-blue-600 hover:underline">Kayıt Olun</router-link>
      </p>
      <p class="mt-2 text-center text-sm text-gray-600">
        <router-link to="/" class="text-blue-600 hover:underline">Ana Sayfaya Dön</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useToast } from '@/composables/useToast';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const loginError = ref('');
const showToast = useToast();
const auth = useAuthStore();

const schema = yup.object({
  email: yup.string().email('Geçerli bir e-posta adresi girin').required('E-posta gerekli'),
  password: yup.string().min(6, 'Şifre en az 6 karakter olmalıdır').required('Şifre gerekli'),
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
});

const { value: email } = useField('email');
const { value: password } = useField('password');


const onSubmit = handleSubmit(async (formValues) => {
  loginError.value = '';
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 3 saniye gecikme
    await auth.login(formValues.email, formValues.password);
    const user = auth.user;
    console.log('Giriş başarılı:', user);
    showToast('Giriş başarılı!', 'success');
    router.push('/'); // Başarılı giriş sonrası yönlendirme
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    loginError.value = err.response?.data?.message || 'Giriş başarısız. Lütfen tekrar deneyin.';
    // console.error('Login error:', err);
    showToast(loginError.value, 'error');
  }
});
</script>

<style scoped></style>
