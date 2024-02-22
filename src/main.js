import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './index.css'
import App from './App.vue'
import router from "./router";
const pinia = createPinia()


const app = createApp(App)
app.use(router);
app.use(pinia)

let instance = app.mount('#app');

window.App = instance;
