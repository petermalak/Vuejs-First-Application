import Vue from "vue";
import VueRouter from "vue-router";
import AllUsers from "../views/AllUsers.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Resource from "../views/Resource.vue";
import pages from "../views/pages.vue";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter);

const routes = [
  {
    path: "/AllUsers",
    name: "AllUsers",
    component: AllUsers
  },
  {
    path: "/pages",
    name: "pages",
    component: pages
  },
  {
    path: "/Register",
    name: "Register",
    component: Register
  },
  {
    path: "/Resource",
    name: "Resource",
    component: Resource
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/AllResources",
    name: "AllResources",
    component: () =>
      import("../views/AllResources.vue")
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
