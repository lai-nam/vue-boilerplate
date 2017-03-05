import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/app/components/dashboard/dashboard'
import ManagePost from '@/app/components/manage-post/post'
import ManageCategory from '@/app/components/manage-category/category'
import ManageUser from '@/app/components/manage-user/user'
import ManageContactForm from '@/app/components/manage-contact-form/contactForm'
import ManageAddressBook from '@/app/components/manage-address-book/addressBook'
import Login from '@/app/components/other/login'
import ForgotPassword from '@/app/components/other/forgotPassword'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: ForgotPassword,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/post',
      name: 'post',
      component: ManagePost,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/category',
      name: 'category',
      meta: {
        requiresAuth: true
      },
      component: ManageCategory
    },
    {
      path: '/user',
      name: 'user',
      meta: {
        requiresAuth: true
      },
      component: ManageUser
    },
    {
      path: '/contact-form',
      name: 'contactForm',
      meta: {
        requiresAuth: true
      },
      component: ManageContactForm
    },
    {
      path: '/address-book',
      name: 'addressBook',
      meta: {
        requiresAuth: true
      },
      component: ManageAddressBook
    },
    {
      path: '/*',
      name: 'dashboard',
      meta: {
        requiresAuth: true
      },
      component: Dashboard
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

Vue.router = router
export default router
