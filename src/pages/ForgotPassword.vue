<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-bold mb-4 text-center">Reset Password</h2>
      <p class="text-gray-600 text-sm mb-4">
        Enter your email and we'll send you a link to reset your password.
      </p>
      <form @submit.prevent="resetPassword" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          required
          class="w-full p-2 border rounded"
        />
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Send Reset Link
        </button>
      </form>
      <p v-if="message" class="text-green-600 text-sm mt-3">{{ message }}</p>
      <p v-if="error" class="text-red-600 text-sm mt-3">{{ error }}</p>
      <router-link to="/login" class="block mt-4 text-blue-500 text-center">
        Back to Login
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const email = ref("");
const message = ref("");
const error = ref("");

const resetPassword = async () => {
  try {
    await sendPasswordResetEmail(auth, email.value);
    message.value = "✅ Password reset link sent! Check your email.";
    error.value = "";
  } catch (err) {
    error.value = err.message;
    message.value = "";
  }
};
</script>
