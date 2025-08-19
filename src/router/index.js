import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import ProductDetails from '../pages/ProductDetails.vue'
import Cart from '../pages/Cart.vue'
import Checkout from '../pages/Checkout.vue'
import Login from "../views/Login.vue";
import App from "../App.vue";
import Register from "../pages/Register.vue";
import ForgotPassword from "../pages/ForgotPassword.vue";

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/products', name: 'products', component: Products },
  { path: '/product/:id', name: 'product-details', component: ProductDetails, props: true },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/checkout', name: 'checkout', component: Checkout },
  { path: "/", component: App },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
   { path: "/forgot-password", name: "ForgotPassword", component: ForgotPassword },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router