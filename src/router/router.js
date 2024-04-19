import Main from "@/pages/Main.vue"
import Lessons from "@/pages/PostPage.vue"
import Lesson from "@/pages/Lesson.vue"
import Store from "@/pages/StorePage.vue"
import { createRouter , createWebHistory } from 'vue-router'
import CompositionPage from "@/pages/CompositionPage.vue"

const routes = [
    {
        path:"/",
        component: Main
    },
    {
        path:"/lessons",
        component: Lessons
    },
    {
        path:"/lesson/:id",
        component: Lesson
    },
    {
        path:"/store",
        component: Store
    },
    {
        path:"/compositions",
        component: CompositionPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router