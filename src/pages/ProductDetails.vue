<template>
  <div v-if="product" class="wrap">
    <div class="media">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="info">
      <h1>{{ product.name }}</h1>
      <p class="desc">{{ product.description }}</p>
      <p class="price">{{ currency(product.price) }}</p>
      <div class="qty">
        <label>Qty</label>
        <input type="number" v-model.number="qty" min="1" />
      </div>
      <button class="btn" @click="add(product, qty)">Add to Cart</button>
    </div>
  </div>
  <p v-else>Product not found.</p>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products.js'
import { useCartStore } from '../store/cart.js'

const route = useRoute()
const cart = useCartStore()
const qty = ref(1)

const product = computed(() => products.find(p => p.id === route.params.id))

function add(p, q) { cart.add(p, q) }
function currency(v) { return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(v) }
</script>

<style scoped>
.wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.media { background: var(--card); border-radius: var(--radius); overflow: hidden; box-shadow: 0 10px 24px rgba(0,0,0,0.08); }
.media img { width: 100%; height: auto; display: block; }
.info h1 { margin-top: 0; }
.desc { color: var(--muted); }
.price { color: var(--accent); font-weight: 800; }
.qty { display: flex; align-items: center; gap: .6rem; margin: .6rem 0 1rem; }
.qty input { width: 70px; padding: .5rem .6rem; border: 1px solid #e5e7eb; border-radius: 10px; }
.btn { border: 0; background: var(--accent-2); color: #fff; padding: .7rem 1rem; border-radius: 12px; cursor: pointer; }
.btn:hover { background: var(--accent); }
@media (max-width: 900px) { .wrap { grid-template-columns: 1fr; } }
</style>
