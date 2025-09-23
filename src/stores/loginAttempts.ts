import type { ILogonHistory } from '@/interfaces/logonHistory.interface';
import api from '@/plugins/axios';
import { defineStore } from 'pinia';

export const useLoginAttemptsStore = defineStore('loginAttempts', {
  state: () => ({
    attempts: [] as ILogonHistory[],
  }),
  actions: {
    async fecthAttempts() {
      const res = await api.get('/logonHistory/GetAll');
      this.attempts = res.data;
    },
  },
});
