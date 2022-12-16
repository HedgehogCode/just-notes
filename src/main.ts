import { createApp } from "vue";
import App from "./App.vue";
import vue3GoogleLogin from "vue3-google-login";

import "./assets/main.css";

createApp(App)
  .use(vue3GoogleLogin, {
    clientId:
      "900725878557-3v2b2bsq5446d83baab5bbqd80ii1jac.apps.googleusercontent.com",
  })
  .mount("#app");
