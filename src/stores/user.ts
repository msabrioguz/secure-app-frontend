// src/stores/user.ts

import { defineStore } from 'pinia';
import api from '@/plugins/axios';
import type { IUser } from '@/interfaces/user.interface';
import type { GenericObject } from 'vee-validate';

export const useUserStore = defineStore('user', {
  state: (): {
    token: string;
    user: IUser | null;
    users: IUser[];
    total: number;
    loading: boolean;
    page: number;
    limit: number;
    search: string;
  } => ({
    token: localStorage.getItem('token') || '',
    user: null,
    users: [],
    total: 0,
    loading: false,
    limit: 10,
    page: 1,
    search: '',
  }),

  actions: {
    async getUserCount(): Promise<number> {
      const res = await api.get('/users/GetUserCount');
      return res.data;
    },

    async fetchUser(): Promise<void> {
      try {
        const res = await api.get<IUser>('/users/Profile');
        this.user = res.data;
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    },

    async updateUserProfile(updatedData: Partial<IUser>): Promise<void> {
      if (!this.user) {
        throw new Error('No user is currently logged in.');
      }
      try {
        const res = await api.patch<IUser>(`/users/Profile`, updatedData);
        this.user = res.data;
      } catch (error) {
        console.error('Failed to update user profile:', error);
        throw error;
      }
    },

    async fetchUsers() {
      this.loading = true;
      try {
        const res = await api.get('users/GetAllUsers', {
          params: {
            page: this.page,
            limit: this.limit,
            search: this.search,
          },
        });
        this.users = res.data.data;
        this.total = res.data.total;
      } catch (err) {
        console.log('Failed to fetch users:', err);
      } finally {
        this.loading = false;
      }
    },
    // Arama yapılması
    setSearch(search: string) {
      this.search = search;
      this.page = 1;
      this.fetchUsers();
    },
    // Sayfanın değiştirilmesi
    setPage(page: number) {
      this.page = page;
      this.fetchUsers();
    },

    async newUser(newUserData: GenericObject) {
      const response = await api.post('/auth/register', { ...newUserData });
      this.fetchUsers();
      return response;
    },

    async delete(ids: Array<number>) {
      console.log("Gelen değerler", ids);
      const response = await api.delete('/users', { data: { ids } });
      console.log(response);
    },
  },
});
