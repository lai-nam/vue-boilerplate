import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/app/components/dashboard/dashboard'
import ManagePost from '@/app/components/manage-post/post'
import ManageCategory from '@/app/components/manage-category/category'
import ManageUser from '@/app/components/manage-user/user'
import ManageContactForm from '@/app/components/manage-contact-form/contactForm'
import ManageAddressBook from '@/app/components/manage-address-book/addressBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/post',
      name: 'Post',
      component: ManagePost
    },
    {
      path: '/category',
      name: 'Category',
      component: ManageCategory
    },
    {
      path: '/user',
      name: 'User',
      component: ManageUser
    },
    {
      path: '/contact-form',
      name: 'ContactForm',
      component: ManageContactForm
    },
    {
      path: '/address-book',
      name: 'AddressBook',
      component: ManageAddressBook
    },

    {
      path: '/*',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
