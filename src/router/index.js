import { createRouter, createWebHistory } from 'vue-router';
import HomeViews from '../views/HomeViews.vue';  
import JobsViews from '../views/JobsViews.vue';  
import NotFoundViews from '../views/NotFound.vue';  
import jobView from '../views/jobView.vue'; 
import addjobView from '../views/addJobview.vue'; 
import EditJob from '../views/EditJobView.vue'; 
import Footer from '../views/test.vue'; 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/jobs/edit/:id',
      name: 'edit-job',
      component: EditJob,
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer,
    },
    {
      path: '/',
      name: 'Home',
      component: HomeViews,
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsViews,
      },
      {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFoundViews,
      },
      {
        path: '/jobs/add',
        name: 'add-job',
        component: addjobView,
      },
      {
        path: '/jobs/:id',
        name: 'job',
        component: jobView,
      },
  ],
});

export default router;
