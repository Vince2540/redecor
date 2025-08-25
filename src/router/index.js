import { createRouter, createWebHistory } from "vue-router";
import SplashScreen from "../components/SplashScreen.vue";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import ForgotPassword from "../pages/ForgotPassword.vue";
import Products from "../pages/Products.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import Cart from "../pages/Cart.vue";
import Checkout from "../pages/Checkout.vue";

import { useAuthStore } from "../store/auth";

const routes = [
  { path: "/", name: "splash", component: SplashScreen },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register },
  { path: "/forgot-password", name: "forgotPassword", component: ForgotPassword },

  // Protected routes
  { path: "/home", name: "home", component: Home, meta: { requiresAuth: true } },
  { path: "/products", name: "products", component: Products, meta: { requiresAuth: true } },
  { path: "/products/:id", name: "productDetails", component: ProductDetails, meta: { requiresAuth: true } },
  { path: "/cart", name: "cart", component: Cart, meta: { requiresAuth: true } },
  { path: "/checkout", name: "checkout", component: Checkout, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔒 Navigation Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Use `authStore.user?.uid` instead of `authStore.user`
  if (to.meta.requiresAuth && !authStore.user?.uid) {
    next({ name: "login" });
  } else if ((to.name === "login" || to.name === "register") && authStore.user?.uid) {
    // Prevent logged-in users from going back to login/register
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
