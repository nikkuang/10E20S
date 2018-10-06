import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../views/Home';
import Register from '../views/Register';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ],
});

export default router;
