import { TokenService } from '@/services/tokens.service';
import axios from 'axios';

const authapi = axios.create({
  baseURL: 'http://localhost:3000/auth',
});

authapi.interceptors.request.use(
  (config) => {
    const refresh_token = TokenService.getLocalRefreshToken();
    if (refresh_token) {
      config.headers.Authorization = `Bearer ${refresh_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// authapi.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const refresh_token = TokenService.getLocalRefreshToken();
//         if (!refresh_token) {
//           throw new Error('No refresh token found');
//         }
//         const res = await authapi.post('/refresh', {
//           refreshToken: refresh_token,
//         });
//         const { access_token, refresh_token: new_refresh_token } = res.data;
//         TokenService.updateLocalAccessToken(access_token);
//         TokenService.updateLocalRefreshToken(new_refresh_token);
//         originalRequest.headers.Authorization = `Bearer ${access_token}`;
//         return authapi(originalRequest);
//       } catch (refreshError) {
//         TokenService.removeTokens(); // refresh başarısızsa tokenları temizle
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   },
// );

export default authapi;
