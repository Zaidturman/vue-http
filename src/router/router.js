import { createRouter, createWebHistory } from 'vue-router'
/* import HomeView from '../view/HomeView.vue'
import AboutUs from '../view/AboutUs.vue'
import TheMenu from '../view/TheMenu.vue'
import CustomarsReview from '../view/CustomersReview.vue'
import ContactUs from '../view/ContactUs.vue' */
import CartComp from '../components/CartComp.vue'


const routes = [
   /*{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutUs
  },
  {
    path: '/menu',
    component: TheMenu
  },{
    path: '/CustomarsReview',
    component: CustomarsReview
  },
  {
    path: '/ContactUs',
    component: ContactUs
  }, */
  {
    path: '/cart',
    component: CartComp
  },
 
  

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
