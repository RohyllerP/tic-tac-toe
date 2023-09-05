import {createRouter, createWebHistory} from 'vue-router'
import Principal from '@/views/menu.vue';
import Friend from '@/views/play-friend.vue'; 
import Robot from '@/views/play-robot.vue';
import GameFriend from '@/views/game-friend.vue';
import GameLast from '@/views/game-last.vue';
import Error404 from '@/views/404.vue';

// definir rutas
const routes = [
    {
        path: '/', component: Principal
    },
    {
        path: '/friend', component: Friend, name: 'play-friend'
    },
    {
        path: '/robot', component: Robot, name: 'play-robot'
    },
    {
        path: '/game/friend',component: GameFriend, name: 'game-friend'
    },
    {
        path: '/game/last',component: GameLast, name: 'game-last'
    },
    {
        path: '/:pathMatch(.*)*', component: Error404
    }
]
// crear objeto rutas de vue router
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router