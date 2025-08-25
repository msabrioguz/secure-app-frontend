// src/stores/user.ts

import { defineStore } from 'pinia';
import api from '@/plugins/axios';

// User interface tanımı
interface User {
  id: number;
  name: string;
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
      const res = await api.get('http://localhost:3000/users/GetUserCount', {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      return res.data;
    },
  },
});
