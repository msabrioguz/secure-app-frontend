// src/stores/auth.ts

import { defineStore } from 'pinia'
import axios from 'axios'

// User interface tanımı
interface User {
  id: number
  name: string
  email: string
  role?: string
}

export const useAuthStore = defineStore('auth', {
  state: (): {
    token: string
    user: User | null
  } => ({
    token: localStorage.getItem('token') || '',
    user: null,
  }),

  actions: {
    async login(email: string, password: string): Promise<void> {
      interface LoginResponse {
        access_token: string
      }
      const res = await axios.post<LoginResponse>('http://localhost:3000/auth/login', { email, password })
      this.token = res.data.access_token
      localStorage.setItem('token', this.token)
    },

    async register(email: string, password: string): Promise<void> {
      await axios.post('http://localhost:3000/auth/register', { email, password })
    },

    async fetchUser(): Promise<void> {
      const res = await axios.get('http://localhost:3000/users/me', {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      this.user = res.data as User
    },

    logout(): void {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')
    },
  },
})
