<template>
  <h1>Your Cart</h1>
  <div v-if="!items.length" class="empty">Your cart is empty.</div>
  <div v-else class="cart">
    <ul class="list">
      <li v-for="it in items" :key="it.id" class="row">
        <img :src="it.image" :alt="it.name" />
        <div class="meta">
          <h3>{{ it.name }}</h3>
          <p class="muted">{{ currency(it.price) }} each</p>
        </div>
        <div class="qty">
          <input type="number" :min="1" v-model.number="quantities[it.id]" @change="updateQty(it.id)" />
        </div>
        <div class="line">{{ currency(it.price * it.qty) }}</div>
        <button class="link" @click="remove(it.id)">Remove</button>
      </li>
    </ul>

    <div class="summary">
      <p><span>Items:</span> <strong>{{ count }}</strong></p>
      <p><span>Subtotal:</span> <strong>{{ currency(total) }}</strong></p>
      <RouterLink to="/checkout" class="checkout">Proceed to Checkout</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCartStore } from '../store/cart.js'

const cart = useCartStore()
const { items, count, total } = storeToRefs(cart)

const quantities = reactive({})
watch(items, (arr) => {
  arr.forEach(i => { quantities[i.id] = i.qty })
}, { immediate: true, deep: true })

function currency(v) { return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(v) }
function updateQty(id) { cart.setQty(id, quantities[id] || 1) }
function remove(id) { cart.remove(id) }
</script>

<style scoped>
.empty { padding: 2rem 0; color: var(--muted); }
.cart { display: grid; grid-template-columns: 1.5fr 1fr; gap: 2rem; align-items: start; }
.list { list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem; }
.row { display: grid; grid-template-columns: 90px 1fr 120px 120px auto; align-items: center; gap: 1rem; background: var(--card); padding: .75rem; border-radius: var(--radius); box-shadow: 0 10px 24px rgba(0,0,0,.06); }
.row img { width: 90px; height: 70px; object-fit: cover; border-radius: 10px; }
.meta h3 { margin: 0 0 .2rem; }
.muted { color: var(--muted); margin: 0; }
.qty input { width: 80px; padding: .45rem .55rem; border: 1px solid #e5e7eb; border-radius: 10px; }
.line { font-weight: 700; text-align: right; }
.link { background: transparent; border: 0; color: #ef4444; cursor: pointer; }
.summary { background: var(--card); padding: 1rem; border-radius: var(--radius); box-shadow: 0 10px 24px rgba(0,0,0,.06); display: grid; gap: .5rem; }
.summary p { display: flex; align-items: center; justify-content: space-between; margin: 0; }
.checkout { display: inline-block; text-align: center; margin-top: .5rem; padding: .7rem 1rem; background: var(--accent-2); color: #fff; border-radius: 12px; text-decoration: none; }
.checkout:hover { background: var(--accent); }
@media (max-width: 980px) { .cart { grid-template-columns: 1fr; } .row { grid-template-columns: 70px 1fr 100px 100px auto; } }
</style>
