import Landing from '@/views/landing';
import Events from '@/views/events';
import Login from '@/views/login';

export default [
   
    {
        path: '/landing',
        name: 'landing',
        component: Landing
    },
    {
        path: '/events',
        name: 'events',
        component: Events
    },
    {
        path: '/',
        name: 'login',
        component: Login
    },
    
];
