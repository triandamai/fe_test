import Vue from "vue";
import Router from "vue-router";
import { getUser } from "@/services/jwt.service";

// component

Vue.use(Router);

const routes = [
  { path: "", redirect: { name: "dashboard" } },
  {
    path: "/main",
    component: () => import("@/components/body"),
    meta: {
      reqiresAuth: true
    },
    children: [
      { path: "", redirect: { name: "dashboard" } },
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/pages/dashboard/dashboard.vue"),
        meta: {
          title: "Default Dashboard | Endless - Premium Admin Template",
          reqiresAuth: true
        }
      },
      //
      {
        path: "list",
        name: "list",
        component: () => import("@/pages/list/list.vue"),
        meta: {
          title: "Default Dashboard | Endless - Premium Admin Template",
          reqiresAuth: true
        }
      },
      //
      {
        path: "soal/:id",
        name: "soal",
        component: () => import("@/pages/soal/soal.vue"),
        meta: {
          title: "Default Dashboard | Endless - Premium Admin Template",
          reqiresAuth: true
        }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/auth/login.vue")
  }
];

const router = new Router({
  routes,
  base: "/",
  mode: "history",
  linkActiveClass: "active",
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  const user = getUser();
  if (to.meta.title) document.title = to.meta.title;
  if (to.meta.reqiresAuth) {
    if (user) {
      next();
    } else {
      next({ path: "/login" });
    }
  }
  next();
});

export default router;
