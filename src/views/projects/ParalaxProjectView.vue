<script setup>
import projectDetail from '@/components/Projects/projectDetail.vue';
import projectNavbar from '@/components/Navbar/projectNavbar.vue';
import Paralax from '@/assets/images/Paralax.png';
</script>

<template>
    <projectNavbar />
    <projectDetail 
        :projectImg=Paralax
        projectTitle="Paralax - Crypto Community"
        :badges="['Tailwind', 'Blade', 'DaisyUI']"
        projectDesc="This project is a frontend project for a Learning Management System. The project is built using Laravel Blade, Tailwind CSS, and DaisyUI. The project is a simple project that has a dashboard, course page, and user profile page."
    />
</template>