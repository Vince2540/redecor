<template>
  <article class="card">
    <RouterLink :to="`/product/${product.id}`" class="media">
      <img :src="product.image" :alt="product.name" loading="lazy" />
    </RouterLink>
    <div class="content">
      <h3 class="title">{{ product.name }}</h3>
      <p class="price">{{ currency(product.price) }}</p>
      <button class="btn" @click="$emit('add-to-cart', product)">Add to Cart</button>
    </div>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({ product: { type: Object, required: true } })

function currency(v) {
  return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(v)
}
</script>

<style scoped>
.card {
  background: var(--card);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  transition: transform .18s ease, box-shadow .18s ease;
}
.card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(0,0,0,0.12); }
.media { display: block; aspect-ratio: 4/3; overflow: hidden; }
.media img { width: 100%; height: 100%; object-fit: cover; display: block; }
.content { padding: 0.9rem 1rem 1.1rem; display: grid; gap: 0.5rem; }
.title { margin: 0; font-size: 1.05rem; line-height: 1.4; }
.price { margin: 0; color: var(--accent); font-weight: 700; }
.btn {
  margin-top: 0.25rem;
  border: 0;
  background: var(--accent-2);
  color: #fff;
  padding: 0.6rem 0.9rem;
  border-radius: 10px;
  cursor: pointer;
}
.btn:hover { background: var(--accent); }
</style>
