import { createWebHistory, createRouter } from 'vue-router';
import DashboardComponent from '../pages/Dashboard/DashboardComponent.vue';
import RepositoryComponent from '../pages/Repository/RepositoryComponent.vue';

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: DashboardComponent
        },
        {
            path: '/repositorio',
            component: RepositoryComponent
        }
    ]
});

export default router;