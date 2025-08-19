<template>
  <header class="page-head">
    <h1>All Products</h1>
    <input v-model="q" class="search" placeholder="Search products..." />
  </header>
  <ProductList :products="filtered" @add-to-cart="add" />
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductList from '../components/ProductList.vue'
import { products } from '../data/products.js'
import { useCartStore } from '../store/cart.js'

const q = ref('')
const filtered = computed(() => {
  if (!q.value) return products
  return products.filter(p => p.name.toLowerCase().includes(q.value.toLowerCase()))
})

const cart = useCartStore()
function add(p) { cart.add(p) }
</script>

<style scoped>
.page-head { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.search {
  width: 260px; max-width: 50vw; border: 1px solid #e5e7eb; border-radius: 10px;
  padding: .6rem .8rem;
}
</style>
