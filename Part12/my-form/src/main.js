import { createApp } from 'vue';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import APP from './App.vue';

const app = createApp(APP);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount("#app");
