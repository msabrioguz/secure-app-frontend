import BlankLayout from '@/layouts/BlankLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import LogoutView from '@/views/LogoutView.vue'
import NotesView from '@/views/NotesView.vue'
import ProfileView from '@/views/ProfileView.vue'
import RegisterView from '@/views/RegisterView.vue'
import SettingsView from '@/views/SettingsView.vue'
import UsersView from '@/views/UsersView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Home', component: HomeView, meta: { title: 'Anasayfa' } },
      { path: 'about', name: 'About', component: AboutView, meta: { title: 'Hakkımda'} },
      { path: 'profile', name: 'Profile', component: ProfileView, meta: { title: 'Profil' } },
      { path: 'notes', name: 'Notes', component: NotesView, meta: { title: 'Notlar' } },
      { path: 'users', name: 'Users', component: UsersView, meta: { title: 'Kullanıcılar' } },
      { path: 'settings', name: 'Settings', component: SettingsView, meta: { title: 'Ayarlar' } },
    ],
  },
  {
    path: '/user',
    component: BlankLayout,
    children: [
      { path: '', redirect: '/login' },
      { path: 'login', name: 'Login', component: LoginView, meta: { title: 'Giriş Yap' } },
      { path: 'register', name: 'Register', component: RegisterView, meta: { title: 'Kayıt Ol' } },
      { path: 'logout', name:'Logout', component: LogoutView },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  const defaultTitle = 'MsoApp'
  if (!to.meta?.title) {
    document.title = defaultTitle
  }else{
    document.title = to.meta.title + ' - ' + defaultTitle || defaultTitle
  }
})

export default router
