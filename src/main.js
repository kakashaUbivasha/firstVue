import './main.css'
import Paginate from "vuejs-paginate-next";
import router from "./router/router.js";
import { createApp } from 'vue'
import App from './App.vue'
import store from "@/vuex/store";
const app = createApp(App)
app.use(router)
app.use(store)
app.component("Paginate", Paginate);
app.mount('#app')
