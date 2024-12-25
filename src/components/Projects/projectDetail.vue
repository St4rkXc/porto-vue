<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import landingFooter from "@/components/Landing/landingFooter.vue";

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
    <div class="py-[100px] my-container">
        <img :src="projectImg" alt="Project Image" />
        <div class="mt-12 px-28">
            <div class="flex justify-between">
                <div>
                    <p class="text-3xl font-bold text-text">{{ projectTitle }}</p>
                    <div class="flex space-x-3">
                        <div v-for="(badge, index) in badges" :key="index" class="duration-200 my-badge group-hover:bg-white group-hover:text-text">
                            {{ badge }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-10">
                <a v-if="projectLinks" :href="projectLinks" target="_blank" class="block text-2xl font-bold text-text"> Project Link </a>
                <p v-else class="text-2xl font-bold text-gray-500"> No link available </p>
            </div>
            <div class="mt-10 text-lg font-medium text-justify text-text" v-html="projectDesc">
            </div>
        </div>
    </div>
    <landingFooter />
</template>
