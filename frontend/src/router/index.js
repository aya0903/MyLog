import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CompleteView from '../views/Complete.vue'
import Register from '../views/Register.vue'
import PostDiary from '../views/PostDiary.vue'
import EmotionSelect from '../views/EmotionSelect.vue'
import CategorySelect from '../views/CategorySelect.vue'
import DiaryDetail from '../views/DiaryDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/complete',
      name: 'complete',
      component: CompleteView,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/post-diary',
      name: 'post-diary',
      component: PostDiary,
    },
    {
      path: '/select-emotion',
      name: 'select-emotion',
      component: EmotionSelect,
    },
    {
      path: '/category-select',
      name: 'category-select',
      component: CategorySelect,
    },
    {
      path: '/diary-detail',
      name: 'diary-detail',
      component: DiaryDetail,
    },
  ],
})

export default router
