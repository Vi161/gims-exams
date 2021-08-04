import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('../components/Main.vue');
const Questions = () => import('../components/Questions.vue');
const Answers = () => import('../components/Answers.vue');
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
    {
        name: 'Answers',
        path: '/answers',
        component: Answers,
    },
    {
        path: '*', redirect: '/'
    }

];

export const router = new VueRouter({
  routes,
  mode: 'history',
});

