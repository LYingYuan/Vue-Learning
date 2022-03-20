import { createApp } from "vue";

import APP from "./APP.vue";
import FriendContact from './components/FriendContact.vue'

const app = createApp(APP);

app.component("friend-contact", FriendContact);

app.mount("#app");
