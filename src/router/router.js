import { createRouter, createWebHashHistory } from 'vue-router';

import VLorem from "../pages/page/VLorem.vue";
import VIpsum from "../pages/page/VIpsum.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component : VLorem },
        { path: '/ipsum', component : VIpsum },
    ]
})