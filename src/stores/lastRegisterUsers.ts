import api from '@/plugins/axios';
import { defineStore } from 'pinia';

export const useLastRegisterUsers = defineStore('lastRegisterUsers', {
  state: () => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    users: [] as any[],
  }),
  actions: {
    async fecthAttempts() {
      const res = await api.get('/users/GetLastRegisterUsers');
      this.users = res.data;
    },
  },
});
