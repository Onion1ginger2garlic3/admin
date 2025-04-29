import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "@/assets/less/index.less"
import router from "@/router/index.js"
import {createPinia} from "pinia"
import "./permission"

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router).mount('#app')
