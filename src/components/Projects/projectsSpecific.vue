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
    <div class="px-12 py-5 border-t border-b border-t-primary border-b-primary group duration-300 hover:bg-primary hover:scale-105">
        <RouterLink :to="projectLinks" class="flex justify-between items-center text-primary group-hover:text-white ">
            <div class="space-y-3 w-[40%]">
                <p class="text-2xl  font-bold">{{ projectTitle }}</p>
                <p class="text-lg font-semibold"
                    >{{ projectDesc }}</p
                >
                <div class="flex space-x-3">
                    <div v-for="(badge, index) in badges" :key="index" class=" my-badge group-hover:bg-white group-hover:text-text">
                        {{ badge }}
                    </div>
                </div>
            </div>
            <img :src=" projectImg "  class="w-1/3" />
        </RouterLink>
    </div>
</template>
