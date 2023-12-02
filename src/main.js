import { createApp } from 'vue';
import App from './App.vue';
import './app.css';
import '/resource/Font/font.css';

import router from "./router.js";

const app = createApp(App)

app.use(router);
app.mount('#app');
