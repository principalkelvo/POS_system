import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'boxicons'

axios.defaults.baseURL= 'http://127.0.0.1:8000'
createApp(App).use(store).use(router,axios).mount('#app')

let arrow = document.querySelectorAll('.arrow');
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener('click', (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu")
      })
    }