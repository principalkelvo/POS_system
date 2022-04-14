import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import HomeView from '../views/HomeView.vue'

//branches
import Branches from '../views/branches/Branches.vue'
import Branch from '../views/branches/Branch.vue'
import BranchTransfers from '../views/branches/BranchTransfers.vue'
import EditBranch from '../views/branches/EditBranch.vue'

//customer
import Customers from '../views/customers/Customers.vue'
import Customer from '../views/customers/Customer.vue' //view each customer
import EditCustomer from '../views/customers/EditCustomer.vue'

//employees
import Employees from '../views/employees/Employees.vue'
import Employee from '../views/employees/Employee.vue' //view each employee
import EditEmployee from '../views/employees/EditEmployee.vue'
import Leave from '../views/employees/Leave.vue'
import ExEmployees from '../views/employees/ExEmployees.vue'

//inventory
import Category from '../views/inventory/Category.vue'
import Categories from '../views/inventory/Categories.vue'
import Product from '../views/inventory/Product.vue'
import Products from '../views/inventory/Products.vue'
import Inventory from '../views/inventory/Inventory.vue'

//reports
import Reports from '../views/reports/Reports.vue'
import Report from '../views/reports/Report.vue' //view each report
import AccountsReports from '../views/reports/AccountsReports.vue'
import StaffsReports from '../views/reports/StaffsReports.vue'
import CustomerReports from '../views/reports/CustomerReports.vue'
import BranchesReports from '../views/reports/BranchesReports.vue'
import HRReports from '../views/reports/HRReports.vue'

//orders and transactions
import Orders from '../views/transaction/Orders.vue'
import Order from '../views/transaction/Order.vue'
import Transactions from '../views/transaction/Transactions.vue'
import Transaction from '../views/transaction/Transaction.vue'

//main company settings
import Settings from '../views/Settings.vue'

//authentication
import SignUp from '../views/auth/SignUp.vue'
import Login from '../views/auth/Login.vue'
import Password from '../views/auth/Password.vue'
import Success from '../views/auth/Success.vue'

const routes = [

    //auth
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

    //dashboard
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

    //branches
    {
        path: '/branches',
        name: 'Branches',
        component: Branches,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/branches/:id',
        name: 'Branch',
        component: Branch,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/branches/:id/edit',
        name: 'EditBranch',
        component: EditBranch,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/branchTransfer',
        name: 'BranchTransfers',
        component: BranchTransfers,
        meta: {
            requireLogin: true
        }
    },

    //customers
    {
        path: '/customers',
        name: 'Customers',
        component: Customers,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/customers/:id/edit',
        name: 'EditCustomer',
        component: EditCustomer,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/customers/:id',
        name: 'Customer',
        component: Customer,
        meta: {
            requireLogin: true
        }
    },

    //employees
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
    {
        path: '/employees/:id',
        name: 'Employee',
        component: Employee,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/leave',
        name: 'Leave',
        component: Leave,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/ex_employees',
        name: 'ExEmployees',
        component: ExEmployees,
        meta: {
            requireLogin: true
        }
    },

    //inventory
    {
        path: '/categories/:id',
        name: 'Category',
        component: Category,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/products/:id',
        name: 'Product',
        component: Product,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/products',
        name: 'Products',
        component: Products,
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

    //reports
    {
        path: '/reports',
        name: 'Reports',
        component: Reports,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/reports:id',
        name: 'Report',
        component: Report,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/accounts_reports',
        name: 'AccountsReports',
        component: AccountsReports,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/staffs_reports',
        name: 'StaffsReports',
        component: StaffsReports,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/customer_reports',
        name: 'CustomerReports',
        component: CustomerReports,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/branches_reports',
        name: 'BranchesReports',
        component: BranchesReports,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/hr_reports',
        name: 'HRReports',
        component: HRReports,
        meta: {
            requireLogin: true
        }
    },


    //orders and transactions
    {
        path: '/orders',
        name: 'Orders',
        component: Orders,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/orders:id',
        name: 'Order',
        component: Order,
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
        path: '/transactions:id',
        name: 'Transaction',
        component: Transaction,
        meta: {
            requireLogin: true
        }
    },

    //main settings
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