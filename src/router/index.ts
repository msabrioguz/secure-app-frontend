import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import BlankLayout from "../layouts/BlankLayout.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProfileView from "../views/ProfileView.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: BlankLayout,
    children: [
      { path: "", redirect: "/login" },
      { path: "/login", name: "login", component: LoginView },
      { path: "/register", name: "register", component: RegisterView },
      { path: "/profile", name: "profile", component: ProfileView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
