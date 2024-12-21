<script setup>
import { RouterLink, useRoute } from "vue-router";

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
};
</script>
<template>
    <nav class="fixed z-40 my-container navbar">
        <div class="navbar-start"></div>
        <div class="border navbar-center backdrop-blur-lg rounded-3xl w-fit bg-base-100/50 border-primary/5">
            <div class="flex p-4 space-x-4">
                <div class="mx-8 space-x-4">
                    <RouterLink to="/" class="nav-link" :class="{ 'active': isActiveLink('/') }">Home</RouterLink>
                    <RouterLink to="/Projects/MiraProject" :class="[isActiveLink('/Projects/MiraProject')? 'opacity-100' : '', 'nav-link']">Mira Course</RouterLink>
                    <RouterLink to="/Projects/UiProject" :class="[isActiveLink('/Projects/UiProject')? 'opacity-100' : '', 'nav-link']">UI</RouterLink>
                </div>
            </div>
        </div>
        <div class="navbar-end"></div>
    </nav>
</template>
