import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MonkeyIndex from "../views/MonkeyIndex.vue";
import MonkeyShow from "../views/MonkeyShow.vue";
import RandomShow from "../views/RandomShow.vue";
import GalleryView from "../views/GalleryView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/monkeys",
    name: "monkeys-index",
    component: MonkeyIndex,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
  {
    path: "/monkeys/:id",
    name: "monkeys-show",
    component: MonkeyShow,
  },
  {
    path: "/random",
    name: "random-monkey",
    component: RandomShow.vue,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
