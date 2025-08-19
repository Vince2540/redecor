<template>
  <h1>Checkout</h1>
  <div class="wrap">
    <form class="card" @submit.prevent="submit">
      <h2>Shipping</h2>
      <div class="grid">
        <label>Full Name <input v-model="name" required /></label>
        <label>Email <input v-model="email" type="email" required /></label>
        <label>Address <input v-model="address" required /></label>
        <label>City <input v-model="city" required /></label>
        <label>Postal Code <input v-model="zip" required /></label>
      </div>
      <h2>Payment</h2>
      <div class="grid">
        <label>Card Number <input v-model="card" required /></label>
        <label>Expiry <input v-model="exp" placeholder="MM/YY" required /></label>
        <label>CVC <input v-model="cvc" required /></label>
      </div>
      <button class="btn" :disabled="!canSubmit">Pay {{ currency(total) }}</button>
    </form>
    <aside class="summary card">
      <h2>Order Summary</h2>
      <ul>
        <li v-for="it in items" :key="it.id">
          <span>{{ it.name }} × {{ it.qty }}</span>
          <strong>{{ currency(it.price * it.qty) }}</strong>
        </li>
      </ul>
      <p class="total"><span>Total</span> <strong>{{ currency(total) }}</strong></p>
    </aside>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '../store/cart.js'

const cart = useCartStore()
const { items, total } = storeToRefs(cart)

const name = ref('')
const email = ref('')
const address = ref('')
const city = ref('')
const zip = ref('')
const card = ref('')
const exp = ref('')
const cvc = ref('')

const canSubmit = computed(() => items.value.length > 0 && name.value && email.value && address.value && city.value && zip.value && card.value && exp.value && cvc.value)

function currency(v) { return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(v) }
function submit() {
  alert('Payment submitted! (demo)')
}
</script>

<style scoped>
.wrap { display: grid; grid-template-columns: 1.3fr .7fr; gap: 2rem; }
.card { background: var(--card); padding: 1rem; border-radius: var(--radius); box-shadow: 0 10px 24px rgba(0,0,0,.06); }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
label { display: grid; gap: .35rem; font-size: .95rem; }
input { border: 1px solid #e5e7eb; border-radius: 10px; padding: .6rem .7rem; }
.btn { border: 0; background: var(--accent-2); color: #fff; padding: .75rem 1rem; border-radius: 12px; cursor: pointer; }
.btn:disabled { opacity: .6; cursor: not-allowed; }
.summary h2 { margin-top: 0; }
.summary ul { list-style: none; padding: 0; margin: 0; display: grid; gap: .5rem; }
.summary li { display: flex; align-items: center; justify-content: space-between; }
.total { display: flex; align-items: center; justify-content: space-between; margin-top: 1rem; font-size: 1.05rem; }
@media (max-width: 980px) { .wrap { grid-template-columns: 1fr; } .grid { grid-template-columns: 1fr; } }
</style>
