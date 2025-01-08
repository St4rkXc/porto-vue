<script setup>
import projectNavbar from '@/components/Navbar/projectNavbar.vue';
import projectDetail from '@/components/Projects/projectDetail.vue';
import packageImg from '@/assets/images/packagae-fix.png';
</script>
<template>
    <projectNavbar />
    <projectDetail 
        :projectImg=packageImg
        projectTitle="Package Tracking System"
        :badges="['Tailwind', 'Blade', 'DaisyUI']"
        projectDesc="This project is a frontend project for a Learning Management System. The project is built using Laravel Blade, Tailwind CSS, and DaisyUI. The project is a simple project that has a dashboard, course page, and user profile page."
    />
</template>