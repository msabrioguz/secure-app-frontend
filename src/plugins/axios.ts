import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
// import { useRouter } from 'vue-router'

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
  async (error) => {
    const originalRequest = error.config;
    if(error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const auth = useAuthStore();
      await auth.refreshToken();
      originalRequest.headers.Authorization = `Bearer ${auth.token}`;
      return api(originalRequest);
    }
    return Promise.reject(error)
  }
)

export default api
