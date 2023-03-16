import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import questionView from "../view/questionView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
    },
    {
      name: "questionview",
      path: "/questionview/:id",
      component: questionView,
    },
  ],
});

export default router;
