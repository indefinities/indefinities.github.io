import { createRouter, createWebHashHistory } from 'vue-router';
import {
    indefinitiesHome,
    indefinitiesAbout,
    indefinitiesWorks,
} from './sections/sections-export.js';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: indefinitiesHome,
    },
    {
        path: '/about/',
        name: 'About Me',
        component: indefinitiesAbout,
    },
    {
        path: '/works/',
        name: 'Works',
        component: indefinitiesWorks,
    },
];

const router =  createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
Object.freeze(routes);
export { routes };