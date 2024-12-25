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
    <div class="px-3 py-5 border-t border-b border-t-primary border-b-primary">
        <RouterLink :to="projectLinks" class="flex justify-between items-center">
            <div class="space-y-3 w-[40%]">
                <p class="text-2xl text-primary font-bold">{{ projectTitle }}</p>
                <p class="text-lg text-primary/80 font-semibold"
                    >{{ projectDesc }}</p
                >
                <div class="flex space-x-3">
                    <div v-for="(badge, index) in badges" :key="index" class="duration-200 my-badge group-hover:bg-white group-hover:text-text">
                        {{ badge }}
                    </div>
                </div>
            </div>
            <img :src=" projectImg "  class="w-1/3" />
        </RouterLink>
    </div>
</template>
