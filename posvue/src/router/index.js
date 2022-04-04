import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import HomeView from '../views/HomeView.vue'
import Category from '../views/Category.vue'
import Product from '../views/Product.vue'
import Inventory from '../views/Inventory.vue'
import Branches from '../views/Branches.vue'
import Customer from '../views/Customer.vue'

import Employees from '../views/Employees.vue'
import EditEmployee from '../views/EditEmployee.vue'
// import Leave from '../views/Leave.vue'
import ExEmployees from '../views/ExEmployees.vue'

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
        path: '/forgotPassword',
        name: 'Password',
        component: Password
    },

    {
        path: '/success',
        name: 'Success',
        component: Success,
        meta: {
            requireLogin: true
        }
    },

    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            requireLogin: true
        }
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
        component: Category,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/product',
        name: 'Product',
        component: Product,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/inventory',
        name: 'Inventory',
        component: Inventory,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/branches',
        name: 'Branches',
        component: Branches,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/customer',
        name: 'Customer',
        component: Customer,
        meta: {
            requireLogin: true
        }
    },


    {
        path: '/employees',
        name: 'Employees',
        component: Employees,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/employees/:id/edit',
        name: 'EditEmployee',
        component: EditEmployee,
        meta: {
            requireLogin: true
        }
    },
    // {
    //     path: '/leave',
    //     name: 'Leave',
    //     component: Leave,
    //     meta: {
    //         requireLogin: true
    //     }
    // },
    {
        path: '/ex-employees',
        name: 'ExEmployees',
        component: ExEmployees,
        meta: {
            requireLogin: true
        }
    },


    {
        path: '/orders',
        name: 'Orders',
        component: Orders,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/transactions',
        name: 'Transactions',
        component: Transactions,
        meta: {
            requireLogin: true
        }
    },


    {
        path: '/reports',
        name: 'Reports',
        component: Reports,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/accountsreports',
        name: 'AccountsReports',
        component: AccountsReports,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/staffsreports',
        name: 'StaffsReports',
        component: StaffsReports,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/customerreports',
        name: 'CustomerReports',
        component: CustomerReports,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/branchesreports',
        name: 'BranchesReports',
        component: BranchesReports,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/hrreports',
        name: 'HRReports',
        component: HRReports,
        meta: {
            requireLogin: true
        }
    },

    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        meta: {
            requireLogin: true
        }
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