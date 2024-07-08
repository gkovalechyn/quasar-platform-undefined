import { Quasar } from "quasar";
import myApp from "./app";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// Assumes your root component is App.vue
// and placed in same folder as main.js

myApp.use(Quasar, {
	plugins: {} // import Quasar plugins and add here
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
