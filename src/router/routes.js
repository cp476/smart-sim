import Landing from '@/views/landing';
import Events from '@/views/events';
import About from '@/views/about';
import Login from '@/views/login';
import Register from '@/views/register';

export default [
   
    {
        path: '/',
        name: 'landing',
        component: Landing
    },
    {
        path: '/events',
        name: 'events',
        component: Events
    },

    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
];
