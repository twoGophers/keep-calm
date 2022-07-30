import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/Font.css'

import router from "./router/router"

const app = createApp(App);
app.use(router);
app.mount('#app')
