import type { IAuthHistory } from '@/interfaces/authHistory.interface';
import api from '@/plugins/axios';
import { defineStore } from 'pinia';

export const useAuthHistoryStore = defineStore('authHistory', {
  state: () => ({
    attempts: [] as IAuthHistory[],
  }),
  actions: {
    async fecthAttempts() {
      const res = await api.get('/authHistory/GetAll');
      this.attempts = res.data;
    },
  },
});
