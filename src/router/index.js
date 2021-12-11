import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Tasks from "../views/Tasks.vue";
import Walk from "../views/Walk.vue";
import Will from "../views/Will.vue";
import Relax from "../views/Relax.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks,
  },
  {
    path: "/will",
    name: "Will",
    component: Will,
  },
  {
    path: "/walk",
    name: "Walk",
    component: Walk,
  },
  {
    path: "/relax",
    name: "Relax",
    component: Relax,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
