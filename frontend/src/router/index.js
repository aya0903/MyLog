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
import EditDiary from '../views/EditDiary.vue'

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
      path: '/emotion-select',
      name: 'emotion-select',
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
    {
      path: '/edit-Diary',
      name: 'edit-Diary',
      component: EditDiary,
    },
  ],
})

export default router
