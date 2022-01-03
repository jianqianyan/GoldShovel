import Vue from "vue";
import Router from "vue-router";

const Index = () => import("../view/Index");
const Login = () => import("../view/Login");
const Register = () => import("../view/Register");
const Menu = () => import("../view/Menu");
const Rank = () => import("../view/Rank");
const Dish = () => import("../view/Dish");
const Details = () => import("../components/MenuComponents/Details");
const Center = () => import("../view/Center");
const ChangeMessage = () =>
  import("../components/CenterComponents/ChangeMessage");
const MenuCreate = () => import("../components/MenuComponents/MenuCreate");
const MenuChange = () => import("../components/MenuComponents/MenuChange");

Vue.use(Router);

const routes = [
  {
    path: "",
    redirect: "/Login"
  },
  {
    path: "/Index",
    name: "首页",
    component: Index
  },
  {
    path: "/Login",
    name: "登录",
    component: Login
  },
  {
    path: "/Register",
    name: "注册",
    component: Register
  },
  {
    path: "/Menu",
    name: "菜谱",
    component: Menu
  },
  {
    path: "/Rank",
    name: "排行榜",
    component: Rank
  },
  {
    path: "/Dish",
    name: "菜品",
    component: Dish
  },
  {
    path: "/Details",
    name: "详情",
    component: Details
  },
  {
    path: "/Center",
    name: "个人中心",
    component: Center
  },
  {
    path: "/ChangeMessage",
    name: "更改信息",
    component: ChangeMessage
  },
  {
    path: "/MenuCreate",
    name: "新建菜谱",
    component: MenuCreate
  },
  {
    path: "/MenuChange",
    name: "更改菜谱",
    component: MenuChange
  }
];

const router = new Router({
  routes,
  mode: "history",
  linkActiveClass: "active"
});

export default router;

router.beforeEach((to, from, next) => {
  if (
    to.path == "/Login" ||
    router.app.$store.state.User != "" ||
    to.path == "/Register"
  ) {
    next();
  } else {
    alert("请先进行登录");
    next("/Login");
  }
  document.title = to.name;
});
