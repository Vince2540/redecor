<template>
  <nav class="navbar">
    <div class="nav-inner container">
      <RouterLink to="/" class="brand">ReDecor</RouterLink>
      <ul class="links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/products">Shop</RouterLink></li>
        <li><RouterLink to="/cart">Cart 🛒 <span v-if="count">({{ count }})</span></RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCartStore } from '../store/cart.js'

const cart = useCartStore()
const { count } = storeToRefs(cart)
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 40;
  background: var(--accent-2);
  color: #fff;
  box-shadow: 0 6px 18px rgba(0,0,0,0.2);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.25rem;
}
.brand {
  color: #fff;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-decoration: none;
  font-size: 1.25rem;
}
.links { list-style: none; display: flex; gap: 1rem; padding: 0; margin: 0; }
.links a { color: #fff; text-decoration: none; opacity: 0.9; }
.links a:hover { opacity: 1; color: var(--accent); }
</style>