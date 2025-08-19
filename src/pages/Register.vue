<template>
  <div class="auth-container">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>

    <p>
      Already have an account?
      <router-link to="/login">Login here</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleRegister = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push("/");
  } catch (error) {
    alert(error.message);
  }
};
</script>

<style>
/* reuse same styles as login */
.auth-container {
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}
.auth-container input {
  display: block;
  width: 100%;
  margin: 0.8rem 0;
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.auth-container button {
  width: 100%;
  padding: 0.7rem;
  margin-top: 1rem;
  border: none;
  background: #222;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
}
</style>
