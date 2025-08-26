// src/stores/auth.ts

import { defineStore } from 'pinia';
import api from '@/plugins/axios';
import type { GenericObject } from 'vee-validate';
import type { AxiosResponse } from 'axios';

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
    token: localStorage.getItem('token') || '',
    refreshToken: localStorage.getItem('refreshToken') || '',
    user: null,
  }),

  actions: {
    async login(email: string, password: string): Promise<void> {
      interface LoginResponse {
        access_token: string;
        refresh_token: string;
      }
      const res = await api.post<LoginResponse>('http://localhost:3000/auth/login', {
        email,
        password,
      });
      this.token = res.data.access_token;
      localStorage.setItem('token', this.token);
      localStorage.setItem('refreshToken', res.data.refresh_token);

      await this.fetchUser(); // Kullanıcı bilgilerini al
    },

    async refreshAccessToken() {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw new Error('No refresh token found');
      }

      try {
        const res = await api.post('http://localhost:3000/auth/refresh', {
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
      const res = await api.get('http://localhost:3000/users/me', {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      this.user = res.data as User;
    },

    logout(): void {
      api
        .post(
          'http://localhost:3000/auth/logout',
          {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        )
        .then(() => {
          this.token = '';
          this.user = null;
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
        })
        .catch((err) => {
          console.error('Logout failed:', err);
        });
    },
  },
});
