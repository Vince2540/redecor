import { defineStore } from "pinia";
import { auth, provider } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  // Track auth state
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });

  async function register(email, password) {
    await createUserWithEmailAndPassword(auth, email, password);
  }

  async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function loginWithGoogle() {
    await signInWithPopup(auth, provider);
  }

  async function logout() {
    await signOut(auth);
  }

  return { user, register, login, loginWithGoogle, logout };
});
