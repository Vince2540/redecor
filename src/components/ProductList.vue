<template>
  <div class="grid">
    <ProductCard
      v-for="p in products"
      :key="p.id"
      :product="p"
      @add-to-cart="$emit('add-to-cart', p)"
    />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
const props = defineProps({ products: { type: Array, default: () => [] } })
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-block: 1.25rem 2rem;
}
</style>