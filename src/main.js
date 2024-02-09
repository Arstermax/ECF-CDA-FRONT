import { createApp } from 'vue'
import './style.css'
import HomePage from "./views/HomePage.vue"
import Layout from "./layout/Layout.vue"
import NotFound from "./views/NotFound.vue"
import LogPage from "./views/LogPage.vue"
import   {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'


const router = createRouter({
    history : createWebHistory(),
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
                },
                {
                    path : "/profil",
                    component : LogPage
                },
                {
                    path : "/projet",
                    component : LogPage
                },
                {
                    path : "/projet/:id_projet",
                    component : LogPage
                },
                {
                    path : "/projet/:id_projet/tache/:id_tache",
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
