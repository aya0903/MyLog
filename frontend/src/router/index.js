import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import CompleteView from '../views/CompleteView.vue'
import RegisterView from '../views/RegisterView.vue'
import PostDiary from '../views/PostDiary.vue'
import EmotionSelect from '../views/EmotionSelect.vue'
import CategorySelect from '../views/CategorySelect.vue'
import DiaryDetail from '../views/DiaryDetail.vue'
import EditDiary from '../views/EditDiary.vue'
import LogView from '../views/LogView.vue'
import CalendarView from '../views/CalendarView.vue'
import MyPageView from '../views/MyPageView.vue'
import EditRegister from '../views/EditRegister.vue'
import EditEmail from '../views/EditEmail.vue'
import EditPassword from '../views/EditPassword.vue'
import UrlLinks from '@/views/UrlLinks.vue'

EditRegister
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/complete',
      name: 'complete',
      component: CompleteView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/post-diary',
      name: 'post-diary',
      component: PostDiary,
    },
    {
      path: '/emotion',
      name: 'emotion',
      component: EmotionSelect,
    },
    {
      path: '/category',
      name: 'category',
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
    {
      path: '/log',
      name: 'log',
      component: LogView,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView,
    },
    {
      path: '/my-Page',
      name: 'my-Page',
      component: MyPageView,
    },
    {
      path: '/edit-register',
      name: 'edit-register',
      component: EditRegister,
    },
    {
      path: '/edit-email',
      name: 'edit-email',
      component: EditEmail,
    },
    {
      path: '/edit-password',
      name: 'edit-password',
      component: EditPassword,
    },
    {
      path: '/url-links',
      name: 'url-links',
      component: UrlLinks,
    },
  ],
})
export default router
