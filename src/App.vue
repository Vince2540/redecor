<template>
  <div id="app">
    <!-- Splash Screen -->
    <SplashScreen />

    <!-- Header -->
    <header class="app-header">
      <h1 class="logo">ReDecor</h1>
      <nav :class="{ open: navOpen }">
        <a href="#">Home</a>
        <a href="#">Cart</a>
        <a href="#">About</a>
      </nav>
      <button class="menu-toggle" @click="toggleNav">
        ☰
      </button>
    </header>

    <!-- Main -->
    <main>
      <h2 class="page-title">Our Products</h2>
      <div class="product-grid">
        <div class="product-card" v-for="n in 6" :key="n">
          <img src="https://via.placeholder.com/200" alt="Product" />
          <h3>Product {{ n }}</h3>
          <p>$ {{ (n * 10).toFixed(2) }}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <p>© 2025 ReDecor. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SplashScreen from "./components/SplashScreen.vue"; // 👈 new component

const navOpen = ref(false);

function toggleNav() {
  navOpen.value = !navOpen.value;
}
</script>

<style>
/* Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f8f8f8;
  color: #333;
  line-height: 1.6;
}

/* Header */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  color: #fff;
  padding: 1rem 2rem;
  position: relative;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.app-header nav {
  display: flex;
  gap: 1rem;
}

.app-header nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

.app-header nav a:hover {
  text-decoration: underline;
}

/* Menu button (hidden on desktop) */
.menu-toggle {
  display: none;
  font-size: 1.8rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
}

/* Responsive Nav (Mobile) */
@media (max-width: 768px) {
  .app-header nav {
    display: none;
    flex-direction: column;
    background: #333;
    position: absolute;
    top: 100%;
    right: 0;
    width: 180px;
    padding: 1rem;
    border-radius: 0 0 10px 10px;
  }

  .app-header nav.open {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }
}

/* Main */
main {
  padding: 2rem;
}

.page-title {
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 2rem;
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.product-card img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.product-card h3 {
  margin-bottom: 0.5rem;
}

.product-card p {
  margin-bottom: 1rem;
  font-weight: bold;
  color: #444;
}

.product-card button {
  padding: 0.5rem 1rem;
  border: none;
  background: #222;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.product-card button:hover {
  background: #444;
}

/* Footer */
.app-footer {
  text-align: center;
  padding: 1rem;
  background: #222;
  color: #fff;
  margin-top: 2rem;
}
</style>
