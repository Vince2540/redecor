<template>
  <div class="splash-container">
    <h1 class="logo">ReDecor</h1>
    <p class="tagline">Redefine your space ✨</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  // ✅ Check if splash was already shown
  const hasSeenSplash = localStorage.getItem("hasSeenSplash");

  if (hasSeenSplash) {
    // Skip splash screen and go straight to login/home
    if (authStore.user) {
      router.replace({ name: "home" });
    } else {
      router.replace({ name: "login" });
    }
    return;
  }

  // ⏳ Show splash for 2s only once
  setTimeout(() => {
    localStorage.setItem("hasSeenSplash", "true"); // Mark as seen
    if (authStore.user) {
      router.replace({ name: "home" });
    } else {
      router.replace({ name: "login" });
    }
  }, 2000);
});
</script>

<style scoped>
.splash-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #222, #444);
  color: white;
  text-align: center;
}

.logo {
  font-size: 3rem;
  font-weight: bold;
}

.tagline {
  margin-top: 1rem;
  font-size: 1.2rem;
  opacity: 0.85;
}
</style>
