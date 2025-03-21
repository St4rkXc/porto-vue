import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import projectView from "@/views/projectView.vue";

// * Project View
import CarafaoProjectView from "@/views/projects/CarafaoProjectView.vue";
import TuungProjectView from "@/views/projects/TuungProjectView.vue";
import EnergiyaProjectView from "@/views/projects/EnergiyaProjectView.vue";
import DoclinkProjectView from "@/views/projects/DoclinkProjectView.vue";
import FoxbatProjectView from "@/views/projects/FoxbatProjectView.vue";
import ParalaxProjectViewVue from "@/views/projects/ParalaxProjectView.vue";
import LumiProjectViewVue from "@/views/projects/LumiProjectView.vue";
import XtradeProjectViewVue from "@/views/projects/XtradeProjectView.vue";
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
            path: "/Projects/CarafaoProject",
            name: "CarafaoProject",
            component: CarafaoProjectView,
        },
        {
            path: "/Projects/TuungProject",
            name: "TuungProject",
            component: TuungProjectView,
        },
        {
            path: "/Projects/EnergiyaProject",
            name: "EnergiyaProject",
            component: EnergiyaProjectView,
        },
        {
            path: "/Projects/DoclinkProject",
            name: "DoclinkProject",
            component: DoclinkProjectView,
        },
        {
            path: "/Projects/FoxbatProject",
            name: "FoxbatProject",
            component: FoxbatProjectView,
        },
        {
            path:"/Projects/ParalaxProject",
            name:"ParalaxProject",
            component: ParalaxProjectViewVue,
        },
        {
            path : "/Projects/LumiProject",
            name : "LumiProject",
            component : LumiProjectViewVue,
        },
        {
            path: "/Projects/XtradeProject",
            name: "XtradeProject",
            component: XtradeProjectViewVue,
        }
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
