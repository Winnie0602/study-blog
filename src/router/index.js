import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Description from '../views/Description.vue'
import Create from '../views/Create.vue'
import Edit from '../views/Edit.vue'
import Tags from '../views/Tags.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/description/:id',
    name: 'Description',
    component: Description,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit,
    props: true
  },
  {
    path: '/tags/:tag',
    name: 'Tags',
    component: Tags,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
