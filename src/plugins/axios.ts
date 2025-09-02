/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';
import authapi from './auth.axios';
import { TokenService } from '@/services/tokens.service';
// import { useRouter } from 'vue-router'

// Axios örneği oluştur
const api = axios.create({
  baseURL: 'http://localhost:3000',
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

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

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const auth = useAuthStore();

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // refresh devam ediyorsa istekleri kuyruğa ekle
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token: string) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(api(originalRequest));
            },
            reject: (err: any) => reject(err),
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await authapi.post('/refresh', {
          refreshToken: TokenService.getLocalRefreshToken(),
        });

        const newAccessToken = res.data.access_token;
        const newRefreshToken = res.data.refresh_token;

        TokenService.updateLocalAccessToken(newAccessToken);
        TokenService.updateLocalRefreshToken(newRefreshToken);
        console.log('Access token refreshed');
        processQueue(null, newAccessToken);
        auth.refreshTokens(newAccessToken, newRefreshToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        console.error('Refresh token expired or invalid:', refreshError);
        //refresh token de geçersiz → logout
        TokenService.removeTokens();
        window.location.href = '/user/login'; // yönlendirme
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default api;
