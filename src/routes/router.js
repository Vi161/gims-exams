import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('../components/Main.vue');
const Questions = () => import('../components/Questions.vue');

Vue.use(VueRouter);

const routes = [
    {
        name: 'Main',
        path: '/',
        component: Main,
    },
    {
        name: 'Questions',
        path: '/questions/:type/:name',
        component: Questions,
    },
];

export const router = new VueRouter({
  routes,
  mode: 'history',
});

