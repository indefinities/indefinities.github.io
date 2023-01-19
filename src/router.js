import { createRouter, createWebHashHistory } from 'vue-router';
import {
    indefinitiesHome,
} from './sections/sections-export.js';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: indefinitiesHome,
    },
];

const router =  createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
Object.freeze(routes);
export { routes };