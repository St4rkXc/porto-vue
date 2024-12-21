a<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps({
    projectImg: {
        type: String,
    },
    projectTitle: {
        type: String,
    },
    badges: {
        type: Array,
        default: () => [],
    },
    links:{
        type: String,
        Required: true,
    }
});
</script>

<template>
    <RouterLink class="block p-4 duration-300 text-text hover:text-white hover:bg-primary hover:scale-105 group active:scale-95" :to="links" >
        <img :src="projectImg" alt="" />
        <div class="mt-8 space-y-4">
            <p class="text-2xl font-bold">{{ projectTitle }}</p>
            <div class="flex space-x-2">
                <div v-for="(badge, index) in badges" :key="index" class="duration-200 my-badge group-hover:bg-white group-hover:text-text">
                    {{ badge }}
                </div>
            </div>
        </div>
    </RouterLink>
</template>
