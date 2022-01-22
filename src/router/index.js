import Router from "vue-router";
import Vue from "vue";
import { routes } from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);
const router = new Router({
  linkActiveClass: "active",
  // mode: 'history',
  routes,
});

/**
 * 路由守卫
 */
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
