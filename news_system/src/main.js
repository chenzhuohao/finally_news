import { createApp } from 'vue';
import './style.css'; // 自定义样式文件
import App from './App.vue';
import router from './router/index.js';
import { createPinia } from 'pinia';
import 'vant/lib/index.css'; // 引入 Vant 样式文件
import Vant from 'vant';
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(Vant);
app.mount('#app');
