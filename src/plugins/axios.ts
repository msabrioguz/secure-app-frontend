import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import authapi from './auth.axios';
import { TokenService } from '@/services/tokens.service';
// import { useRouter } from 'vue-router'

// Axios örneği oluştur
const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// Request interceptor: her istekten önce çalışır
api.interceptors.request.use(
  (config) => {
    const auth = useAuthStore();
    if (auth.token) {
      config.headers.Authorization = `Bearer ${auth.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor: istek cevabı geldiğinde çalışır (opsiyonel)
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const auth = useAuthStore();
//       try {
//         await auth.refreshAccessToken(); // refreshToken fonksiyonunu yeni isimle çağırın
//         originalRequest.headers.Authorization = `Bearer ${auth.token}`;
//         return api(originalRequest);
//       } catch (refreshError) {
//         auth.logout(); // refresh başarısızsa çıkış yap
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   },
// );

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const auth = useAuthStore();

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await authapi.post('/refresh', {
          refreshToken: TokenService.getLocalRefreshToken(),
        });

        TokenService.updateLocalAccessToken(res.data.access_token);
        TokenService.updateLocalRefreshToken(res.data.refresh_token);
        console.log('Access token refreshed');
        auth.refreshTokens(res.data.access_token, res.data.refresh_token);

        originalRequest.headers.Authorization = `Bearer ${res.data.access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token expired or invalid:', refreshError);
        //refresh token de geçersiz → logout
        TokenService.removeTokens();
        window.location.href = '/user/login'; // yönlendirme
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
