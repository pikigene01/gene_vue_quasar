// import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import iconSet from 'quasar/icon-set/fontawesome-v6'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

createApp(App)
  .use(Quasar, { quasarUserOptions, iconSet: iconSet })
  .mount("#app");
