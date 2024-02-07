import { createApp } from 'vue'
import './style.css'
import HomePage from "./views/HomePage.vue"
import Layout from "./layout/Layout.vue"
import NotFound from "./views/NotFound.vue"
import LogPage from "./views/LogPage.vue"
import   {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'


const router = createRouter({
    history : createWebHashHistory(),
    routes : [
        {
            path : "/",
            name : "Layout",
            component : Layout,
            children : [
                {
                    path : "/",
                    component : HomePage
                },
                {
                    path : "/log",
                    component : LogPage
                }
            ]
        },
        {
            path : "/:pathMatch(.*)*",
            name : "NotFound",
            component : NotFound
        }
    ]
})


createApp(App).use(router).mount('#app')
