import api from '@/plugins/axios';
import { defineStore } from 'pinia';

export const useLoginAttemptsStore = defineStore('loginAttempts', {
  state: () => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    attempts: [] as any[],
  }),
  actions: {
    async fecthAttempts() {
      const res = await api.get('/logonHistory/GetAll');
      this.attempts = res.data;
    },
  },
});
