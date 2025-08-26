// src/stores/user.ts

import { defineStore } from 'pinia';
import api from '@/plugins/axios';

// User interface tanımı
interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  role?: string;
}

export const useUserStore = defineStore('user', {
  state: (): {
    token: string;
    user: User | null;
  } => ({
    token: localStorage.getItem('token') || '',
    user: null,
  }),

  actions: {
    async getUserCount(): Promise<number> {
      const res = await api.get('/users/GetUserCount');
      return res.data;
    },

    async fetchUser(): Promise<void> {
      try {
        const res = await api.get<User>('/users/Profile');
        this.user = res.data;
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        this.user = null;
      }
    },
  },
});
