import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Beranda from '../views/Beranda.vue'
import Login from '../views/Login.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'
import Sidebar from '../views/layouts/Sidebar.vue'
import Petugas from '../views/Petugas.vue'
import Data_Siswa from '../views/Data_Siswa.vue'
import Pelanggaran from '../views/Pelanggaran.vue'
import Input_Pelanggaran from '../views/Input_Pelanggaran.vue'
import Poin_Siswa from '../views/Poin_Siswa.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    components: {default: Login}
  },
  {
    path: '/',
    name: 'Beranda',
    components: {default: Beranda, header: Navbar, sidebar: Sidebar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },

  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar, sidebar: Sidebar,  footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },

  {
    path: '/petugas',
    name: 'petugas',
    components: {default: Petugas, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/data_siswa',
    name: 'data_siswa',
    components: {default: Data_Siswa, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    }
  },
  // {
  //   path: '/beranda',
  //   name: 'beranda',
  //   components: {default: Beranda, header: Navbar, footer: Footer},
  //   meta: { 
  //     requiresAuth: true
  //   },
  // },
  {
    path: '/pelanggaran',
    name: 'pelanggaran',
    components: {default: Pelanggaran, header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    },
  },
  {
    path: '/input_pelanggaran',
    name: 'input_pelanggaran',
    components: {default: Input_Pelanggaran,  header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    },
  },
  {
    path: '/poin_siswa',
    name: 'poin_siswa',
    components: {default: Poin_Siswa,  header: Navbar, footer: Footer},
    meta: { 
      requiresAuth: true
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router
