<template>
  <section class="hero">
    <div class="hero-inner container">
      <div class="hero-copy">
        <h1>Refresh your space with ReDecor</h1>
        <p>Curated decor and accessories that blend minimalism with warmth. Shop our latest arrivals.</p>
        <RouterLink to="/products" class="cta">Shop Now</RouterLink>
      </div>
      <div class="hero-art" aria-hidden="true"></div>
    </div>
  </section>
  <section class="home-products container">
    <h2>Trending Now</h2>
    <ProductList :products="featured" @add-to-cart="add" />
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import ProductList from '../components/ProductList.vue'
import { products } from '../data/products.js'
import { useCartStore } from '../store/cart.js'

const featured = products.slice(0, 4)
const cart = useCartStore()
function add(p) { cart.add(p) }
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #1f2937, #111827);
  color: #fff;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1rem;
  align-items: center;
  padding: 2.25rem 1.25rem;
}
.hero-copy h1 { margin: 0 0 .5rem; font-size: clamp(1.8rem, 3vw, 2.4rem); }
.hero-copy p { margin: 0 0 1rem; opacity: .9; }
.cta {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  text-decoration: none;
  padding: .7rem 1rem;
  border-radius: 12px;
}
.hero-art {
  height: 240px;
  border-radius: 16px;
  background: radial-gradient(80% 80% at 70% 30%, rgba(255,255,255,.15), rgba(255,255,255,0) 60%),
              linear-gradient(135deg, #f59e0b33, #10b98122, #60a5fa22);
  box-shadow: inset 0 0 50px rgba(0,0,0,.2);
}
.home-products h2 { margin-top: 2rem; }
@media (max-width: 860px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-art { height: 160px; }
}
</style>
