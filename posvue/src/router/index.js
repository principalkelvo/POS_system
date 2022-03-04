import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Category from '../views/Category.vue'
import Product from '../views/Product.vue'
import Inventory from '../views/Inventory.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/inventory',
        name: 'Inventory',
        component: Inventory
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
        next({ name: 'Login', query: { to: to.path } });
    } else {
        next()
    }
})

export default router