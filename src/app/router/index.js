import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/app/components/dashboard/dashboard'
import ManagePost from '@/app/components/manage-post/post'
import ManageCategory from '@/app/components/manage-category/category'
import ManageUser from '@/app/components/manage-user/user'
import ManageContactForm from '@/app/components/manage-contact-form/contactForm'
import ManageAddressBook from '@/app/components/manage-address-book/addressBook'
import Login from '@/app/components/other/login'

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
      path: '/post',
      name: 'Post',
      component: ManagePost,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/category',
      name: 'Category',
      meta: {
        requiresAuth: true
      },
      component: ManageCategory
    },
    {
      path: '/user',
      name: 'User',
      meta: {
        requiresAuth: true
      },
      component: ManageUser
    },
    {
      path: '/contact-form',
      name: 'ContactForm',
      meta: {
        requiresAuth: true
      },
      component: ManageContactForm
    },
    {
      path: '/address-book',
      name: 'AddressBook',
      meta: {
        requiresAuth: true
      },
      component: ManageAddressBook
    },
    {
      path: '/*',
      name: 'Dashboard',
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
export default router
