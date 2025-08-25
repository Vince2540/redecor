import { defineStore } from "pinia";
import { auth, provider } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const loading = ref(true);

  // Track auth state (runs once when store is used)
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
    loading.value = false;
  });

  async function register(email, password) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    user.value = userCredential.user;
  }

  async function login(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    user.value = userCredential.user;
  }

  async function loginWithGoogle() {
    const userCredential = await signInWithPopup(auth, provider);
    user.value = userCredential.user;
  }

  async function resetPassword(email) {
    await sendPasswordResetEmail(auth, email);
  }

  async function logout() {
    await signOut(auth);
    user.value = null;
  }

  return { 
    user, 
    loading, 
    register, 
    login, 
    loginWithGoogle, 
    resetPassword, 
    logout 
  };
});
