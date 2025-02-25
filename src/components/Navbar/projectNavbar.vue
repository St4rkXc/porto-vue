<script setup>
import { RouterLink, useRoute } from "vue-router";
// import { defineProps } from "vue";


const goback = () => {
    window.history.back();
};

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
};
</script>
<template>
    <!-- <nav class="fixed z-40 my-container navbar">
        <div class="navbar-start"></div>
        <div class="border navbar-center backdrop-blur-lg rounded-3xl w-fit bg-base-100/50 border-primary/20">
            <div class="flex p-4 space-x-4">
                <div class="mx-8 space-x-4">
                    <RouterLink to="/" class="nav-link" :class="{ 'active': isActiveLink('/') }">Home</RouterLink>
                    <RouterLink to="/Projects/MiraProject" :class="[isActiveLink('/Projects/MiraProject')? 'opacity-100' : '', 'nav-link']">Mira Course</RouterLink>
                    <RouterLink to="/Projects/UiProject" :class="[isActiveLink('/Projects/UiProject')? 'opacity-100' : '', 'nav-link']">UI</RouterLink>
                    <RouterLink to="/Projects/ProtoProject" :class="[isActiveLink('/Projects/ProtoProject')? 'opacity-100' : '', 'nav-link']">Prototyping</RouterLink>
                    <RouterLink to="/Projects/LmsProject" :class="[isActiveLink('/Projects/LmsProject')? 'opacity-100' : '', 'nav-link']">LMS</RouterLink>
                    <RouterLink to="/Projects/PackageProject" :class="[isActiveLink('/Projects/PackageProject')? 'opacity-100' : '', 'nav-link']">Package</RouterLink>
                </div>
            </div>
        </div>
        <div class="navbar-end"></div>
    </nav> -->
    <nav class="fixed z-40 my-container navbar">
        <div class="navbar-start space-x-4 "> 
            <div class="border backdrop-blur-lg rounded-3xl w-fit bg-base-100/50 border-primary/20 p-4">
                <div class="flex items-center cursor-pointer" @click="goback">
                    <div class="solar-arrow w-8 h-8 md:w-12 md:h-12"></div>
                    <p class="text-text text-lg font-semibold">Go Back</p>
                </div>
            </div>
            <div class="border backdrop-blur-lg rounded-3xl w-fit bg-base-100/50 border-primary/20 p-4">
                <RouterLink class="flex items-center cursor-pointer" to="/">
                    <div class="solar-home w-8 h-8 md:w-12 md:h-12 text-primary"></div>
                </RouterLink>
            </div>
        </div>
        <div class="navbar-center"></div>
        <div class="navbar-end"></div>
    </nav>
</template>
