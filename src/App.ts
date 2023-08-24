import '@/assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const App = createApp(DefaultLayout);

App.use(createPinia());
App.mount('#app');
