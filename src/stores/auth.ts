// src/stores/auth.ts

import { defineStore } from 'pinia';
import api from '@/plugins/axios';
import type { GenericObject } from 'vee-validate';
import type { AxiosResponse } from 'axios';
import { TokenService } from '@/services/tokens.service';

// User interface tanımı
interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

export const useAuthStore = defineStore('auth', {
  state: (): {
    token: string;
    refreshToken: string;
    user: User | null;
  } => ({
    token: TokenService.getLocalAccessToken() || '',
    refreshToken: TokenService.getLocalRefreshToken() || '',
    user: null,
  }),

  actions: {
    setTokens(access: string, refresh: string) {
      this.token = access;
      this.refreshToken = refresh;
      TokenService.updateLocalAccessToken(access);
      TokenService.updateLocalRefreshToken(refresh);
    },

    clearTokens() {
      this.token = '';
      this.refreshToken = '';
      TokenService.removeTokens();
    },

    async login(email: string, password: string): Promise<void> {
      interface LoginResponse {
        access_token: string;
        refresh_token: string;
      }
      const res = await api.post<LoginResponse>('/auth/login', {
        email,
        password,
      });
      this.token = res.data.access_token;
      localStorage.setItem('token', this.token);
      localStorage.setItem('refreshToken', res.data.refresh_token);

      await this.fetchUser(); // Kullanıcı bilgilerini al
    },

    async refreshTokens(access_token: string, refresh_token: string): Promise<void> {
      this.token = access_token;
      this.refreshToken = refresh_token;
    },

    async refreshAccessToken() {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw new Error('No refresh token found');
      }

      try {
        const res = await api.post('/auth/refresh', {
          refreshToken: refreshToken,
        });
        this.token = res.data.access_token;
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem('refreshToken', res.data.refresh_token);
      } catch (err) {
        console.error('Token refresh failed:', err);
        // Eğer token yenileme başarısız olursa, kullanıcıyı çıkış yaptır
        this.logout();
      }
    },

    async register(values: GenericObject): Promise<AxiosResponse> {
      console.log(values);
      const response = await api.post('/auth/register', { ...values });
      return response;
    },

    async fetchUser(): Promise<void> {
      const res = await api.get('/users/me', {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      this.user = res.data as User;
    },

    logout(): void {
      api
        .post(
          '/auth/logout',
          {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        )
        .then(() => {
          this.clearTokens();
          this.user = null;
          // window.location.href = '/user/login'; // yönlendirme
        })
        .catch((err) => {
          console.error('Logout failed:', err);
        });
    },
  },
});
