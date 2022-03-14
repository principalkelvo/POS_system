import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Category from '../views/Category.vue'
import Product from '../views/Product.vue'
import Inventory from '../views/Inventory.vue'
import Branches from '../views/Branches.vue'
import Customer from '../views/Customer.vue'

import Employees from '../views/Employees.vue'
import Leave from '../views/Leave.vue'
import Exemployees from '../views/Exemployees.vue'

import Orders from '../views/Orders.vue'
import Transactions from '../views/Transactions.vue'

import Reports from '../views/Reports.vue'
import AccountsReports from '../views/AccountsReports.vue'
import StaffsReports from '../views/StaffsReports.vue'
import CustomerReports from '../views/CustomerReports.vue'
import BranchesReports from '../views/BranchesReports.vue'
import HRReports from '../views/HRReports.vue'

import Settings from '../views/Settings.vue'

import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Password from '../views/Password.vue'
import Success from '../views/Success.vue'

const routes = [

    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },

    {
        path: '/forgotpassword',
        name: 'Password',
        component: Password
    },

    {
        path: '/success',
        name: 'Success',
        component: Success
    },

    {
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
    {
        path: '/branches',
        name: 'Branches',
        component: Branches
    },
    {
        path: '/customer',
        name: 'Customer',
        component: Customer
    },


    {
        path: '/employees',
        name: 'Employees',
        component: Employees
    },
    {
        path: '/leave',
        name: 'Leave',
        component: Leave
    },
    {
        path: '/ex-employees',
        name: 'Exemployees',
        component: Exemployees
    },


    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    },
    {
        path: '/transactions',
        name: 'Transactions',
        component: Transactions
    },


    {
        path: '/reports',
        name: 'Reports',
        component: Reports
    },
    {
        path: '/accountsreports',
        name: 'AccountsReports',
        component: AccountsReports
    },
    {
        path: '/staffsreports',
        name: 'StaffsReports',
        component: StaffsReports
    },
    {
        path: '/customerreports',
        name: 'CustomerReports',
        component: CustomerReports
    },
    {
        path: '/branchesreports',
        name: 'BranchesReports',
        component: BranchesReports
    },
    {
        path: '/hrreports',
        name: 'HRReports',
        component: HRReports
    },

    {
        path: '/settings',
        name: 'Settings',
        component: Settings
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