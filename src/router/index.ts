import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import OverviewView from '../views/OverviewView.vue'
import { useAuthStore } from '@/store/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('../views/CategoryView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'overview',
          component: OverviewView,
        },
        {
          path: 'resources',
          name: 'resources',
          component: () => import('../views/MyResourcesView.vue'),
        },
        {
          path: 'usage',
          name: 'usage',
          component: () => import('../views/UsageAndBillingView.vue'),
        },
        {
          path: 'marketplace',
          name: 'marketplace',
          component: () => import('../views/PurchaseView.vue'),
        },
        {
          path: 'support',
          name: 'support',
          component: () => import('../views/SupportView.vue'),
        },
        {
          path: 'admin',
          name: 'admin',
          component: () => import('../views/AdminSettingsView.vue'),
        },
      ],
    },
  ],
})

// Global navigation guard for authentication
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
