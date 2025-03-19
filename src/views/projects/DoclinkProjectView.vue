<script setup>
import projectNavbar from '@/components/Navbar/projectNavbar.vue';
import projectDetail from '@/components/Projects/projectDetail.vue';
import Doclink from "@/assets/images/Doclink.png";
</script>
<template>
    <projectNavbar />
    <projectDetail 
        :projectImg=Doclink
        projectTitle="Doclink - Doctor Dashboard"
        :badges="['Figma']"
        projectDesc="This project is a frontend project for a Learning Management System. The project is built using Laravel Blade, Tailwind CSS, and DaisyUI. The project is a simple project that has a dashboard, course page, and user profile page."
    />
</template>