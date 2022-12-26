import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from "./router.js";


const app = createApp(App);
app.use(AOS.init())
app.use(router)
app.mount('#app')
