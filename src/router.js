import { createRouter, createWebHistory } from "vue-router";
import Reviews from "./views/Reviews.vue";
import ReviewDetails from "./views/ReviewDetails.vue";

const routes = [
  { path: "/", name: "Reviews", component: Reviews },
  { path: "/reviews/:id", name: "ReviewDetails", component: ReviewDetails }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
