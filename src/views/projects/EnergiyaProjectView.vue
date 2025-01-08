<script setup>
import projectDetail from '@/components/Projects/projectDetail.vue';
import projectNavbar from '@/components/Navbar/projectNavbar.vue';
import lmsImg from '@/assets/images/lms-thumb2.png';
</script>
<template>
    <projectNavbar />
    <projectDetail 
        :projectImg=lmsImg
        projectTitle="LMS Project (Frontend)"
        :badges="['Tailwind', 'Blade', 'DaisyUI']"
        projectDesc="This project is a frontend project for a Learning Management System. The project is built using Laravel Blade, Tailwind CSS, and DaisyUI. The project is a simple project that has a dashboard, course page, and user profile page."
    />
</template>