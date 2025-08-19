import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] // { id, name, price, image, qty }
  }),
  getters: {
    count: (state) => state.items.reduce((sum, it) => sum + it.qty, 0),
    total: (state) => state.items.reduce((sum, it) => sum + it.price * it.qty, 0)
  },
  actions: {
    add(product, qty = 1) {
      const existing = this.items.find(i => i.id === product.id)
      if (existing) existing.qty += qty
      else this.items.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty })
    },
    remove(id) {
      this.items = this.items.filter(i => i.id !== id)
    },
    setQty(id, qty) {
      const item = this.items.find(i => i.id === id)
      if (!item) return
      item.qty = Math.max(1, qty)
    },
    clear() { this.items = [] }
  }
})