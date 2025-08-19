<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 flex items-center justify-center bg-blue-600 text-white text-4xl font-bold z-50"
    >
      ReDecor ✨
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

const show = ref(true);

onMounted(() => {
  setTimeout(() => {
    show.value = false;
  }, 2000); // hide splash after 2 seconds
});
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
