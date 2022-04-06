import { createStore } from 'vuex'

export default createStore({
    state: {
        /* Dark mode */
        isDarkModeActive: false,

        //loading
        isLoading: true,

        // authentication 
        isAuthenticated: false,
        token: ''
    },
    getters: {},
    mutations: {
        /* Dark Mode */
        darkModeToggle(state, payload = null) {
            const htmlClassName = 'is-dark-mode-active'

            state.isDarkModeActive = !state.isDarkModeActive

            if (state.isDarkModeActive) {
                document.documentElement.classList.add(htmlClassName)
            } else {
                document.documentElement.classList.remove(htmlClassName)
            }
        },

        // to know if we had logged in
        initializeStore(state) {
            // if yes
            if (localStorage.getItem('token')) {
                state.token = localStorage.getItem('token')
                state.isAuthenticated = true
            } //if not logged in
            else {
                state.token = ''
                state.isAuthenticated = false
            }
        },

        // change of loading status
        setIsLoading(state, status) {
            state.isLoading = status
        },
        // function to set token
        setToken(state, token) {
            state.token = token
            state.isAuthenticated = true
        },
        // function to sign out
        removeToken(state) {
            state.token = ''
            state.isAuthenticated = false
        }

    },
    actions: {},
    modules: {}
})