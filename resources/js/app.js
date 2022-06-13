import './bootstrap';

import { createApp } from "vue";
import { createPinia } from 'pinia';
import router from "./router";
import App from "./App.vue";

// UI 
import AppHeader from './components/UI/AppHeader';
import AppTable from './components/UI/AppTable';
import TablePopup from './components/UI/TablePopup';
import IconBase from './components/svg/IconBase';
import Pagination from './components/UI/Pagination';

// Packages
import Toast, {POSITION} from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);

// UI init
app.component('app-header', AppHeader);
app.component('app-table', AppTable);
app.component('table-popup', TablePopup);
app.component('icon-base', IconBase);
app.component('pagination', Pagination);

// Packages init
const options = {
    timeout: 4000,
    position: POSITION.TOP_RIGHT
};

app.use(Toast, options);

app.mount("#app");

require("./bootstrap");
