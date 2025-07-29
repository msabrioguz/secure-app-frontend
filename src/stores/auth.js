import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || '',
    user: null,
  }),
  actions: {
    async login(email, password) {
      const res = await axios.post('http://localhost:3000/auth/login', { email, password });
      this.token = res.data.access_token;
      localStorage.setItem("token", this.token);
    },
    async register(email, password) {
      await axios.post('http://localhost:3000/auth/register', { email, password });
    },
    async fetchUser() {
      const res = await axios.get('http://localhost:3000/users/me', {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      this.user = res.data;
    },
    logout() {
      this.token = '';
      this.user = null;
      localStorage.removeItem("token");
    },
  },
});