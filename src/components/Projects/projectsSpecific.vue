<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";


defineProps({
    projectTitle: {
        type: String,
        required: true,
    },
    projectImg: {
        type: String,
        required: true,
    },
    projectDesc: {
        type: String,
        required: true,
    },
    badges: {
        type: Array,
        default: () => [],
    },
    projectLinks: {
        type: String,
        default: "",
    },
});
</script>
<template>
    <div class=" px-4 lg:px-12 py-8 lg:py-5 border-t border-b border-t-primary border-b-primary group duration-300 hover:bg-primary hover:scale-105">
        <RouterLink :to="projectLinks" class="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center text-primary group-hover:text-white ">
            <div class="space-y-3 lg:space-y-4 mt-4 w-full lg:w-1/2 lg:mt-0 ">
                <p class="text-2xl font-bold">{{ projectTitle }}</p>
                <p class="text-lg font-medium "
                    >{{ projectDesc }}</p
                >
                <div class="flex space-x-3 ">
                    <div v-for="(badge, index) in badges" :key="index" class=" my-badge group-hover:bg-white group-hover:text-text">
                        {{ badge }}
                    </div>
                </div>
            </div>
            <img :src=" projectImg "  class="w-96 h-80 object-cover" />
        </RouterLink>
    </div>
</template>
