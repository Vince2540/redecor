<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">Reset Password</h2>
      <form @submit.prevent="handleReset" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          required
        />
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Send Reset Link
        </button>
      </form>
      <div class="mt-4 text-sm text-center">
        Remembered your password?
        <router-link to="/login" class="text-indigo-600 hover:underline">
          Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";

const email = ref("");
const authStore = useAuthStore();

const handleReset = async () => {
  try {
    await authStore.resetPassword(email.value);
    alert("Password reset email sent!");
  } catch (error) {
    alert(error.message);
  }
};
</script>
