import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router"; // ✅ correct
import "./style.css"; // ✅ global styles (Tailwind / custom styles)

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
