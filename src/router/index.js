import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import projectView from "@/views/projectView.vue";

// * Project View
import miraProjectView from "@/views/projects/miraProjectView.vue";
import uiProjectView from "@/views/projects/uiProjectView.vue";
import lmsProjectView from "@/views/projects/lmsProjectView.vue";
import packageProjectView from "@/views/projects/packageProjectView.vue";
import protoProjectView from "@/views/projects/FoxbatProjectView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/Projects",
            name: "Projects",
            component: projectView,
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
        {
            path: "/Projects/LmsProject",
            name: "LmsProject",
            component: lmsProjectView,
        },
        {
            path: "/Projects/PackageProject",
            name: "PackageProject",
            component: packageProjectView,
        },
        {
            path: "/Projects/Foxbat",
            name: "ProtoProject",
            component: protoProjectView,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition){
            return savedPosition
        }
        else{
            return {top: 0}
        }
    }
});


export default router;
