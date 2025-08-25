<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">Welcome Back</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          required
        />
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
      <div class="flex justify-between items-center mt-4 text-sm">
        <router-link to="/register" class="text-indigo-600 hover:underline">
          Create account
        </router-link>
        <router-link to="/forgot-password" class="text-gray-600 hover:underline">
          Forgot password?
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

const email = ref("");
const password = ref("");
const router = useRouter();
const authStore = useAuthStore();

const handleLogin = async () => {
  try {
    await authStore.login(email.value, password.value);
    router.push("/");
  } catch (error) {
    alert(error.message);
  }
};
</script>
