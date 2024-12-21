import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import miraProjectView from "@/views/projects/miraProjectView.vue";
import uiProjectView from "@/views/projects/uiProjectView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/Projects/MiraProject",
            name: "MiraProject",
            component: miraProjectView,
        },
        {
            path: "/Projects/UiProject",
            name: "UiProject",
            component: uiProjectView,
        },
    ],
});

export default router;
