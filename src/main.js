import { createApp } from 'vue';
import './assets/style.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import App from './App.vue';
import router from './router/index';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.use(Toast);
