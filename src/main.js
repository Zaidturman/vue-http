import { createApp } from 'vue';
import router from './router/router'




import BaseCard from './UI/BaseCard.vue';
import BaseButton from './UI/BaseButton.vue';
import App from './App.vue';

const app = createApp(App);
app.use(router)
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
