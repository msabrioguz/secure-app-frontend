import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

// Axios örneği oluştur
const api = axios.create({
  baseURL: 'http://localhost:3000',
})

// Request interceptor: her istekten önce çalışır
api.interceptors.request.use(
  (config) => {
    const auth = useAuthStore()
    if (auth.token) {
      config.headers.Authorization = `Bearer ${auth.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor: istek cevabı geldiğinde çalışır (opsiyonel)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const auth = useAuthStore();
    const router = useRouter();

    if (error.response && error.response?.status === 401) {
      auth.logout()
      // Giriş sayfasına yönlendirme veya kullanıcıya mesaj gösterme
      console.error('Unauthorized access - logging out');
      router.push('/user/login');
    }
    return Promise.reject(error)
  }
)

export default api
