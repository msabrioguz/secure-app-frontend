import type { IUser } from '@/interfaces/user.interface';
import api from '@/plugins/axios';
import { defineStore } from 'pinia';

export const useLastRegisterUsers = defineStore('lastRegisterUsers', {
  state: () => ({
    lastUsers: [] as IUser[],
  }),
  actions: {
    async fecthAttempts() {
      const res = await api.get('/users/GetLastRegisterUsers');
      this.lastUsers = res.data;
    },
  },
});
