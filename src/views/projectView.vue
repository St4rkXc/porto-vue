<script setup>
import projectNavbar from "@/components/Projects/projectNavbar.vue";
import landingFooter from "@/components/Landing/landingFooter.vue";
import projectsSpecific from "@/components/Projects/projectsSpecific.vue";
import miraThumb from "@/assets/images/mira-thumb.png";
</script>

<template>
    <projectNavbar />
    <section class="my-container py-[150px]">
        <div class="max-w-4xl">
            <h1 class="text-text text-3xl font-bold leading-tight">
                See All My Project that <br />
                I've Done
            </h1>
            <p class="text-text text-lg font-medium mt-4">
                Take a deep dive into my journey of creativity and innovation as you explore a comprehensive showcase of the projects I've completed, each reflecting dedication, skill, and a passion
                for excellence.
            </p>
        </div>
        <div class="mt-20">
            <projectsSpecific 
            project-title="Mira Project Study Case"
            :project-img=miraThumb
            project-desc="Mira Project is a project that I made during my internship at Atrem Project. This project is a study case of the Mira Course website. The website is made using Figma and Miro."
            :badges="['Figma', 'Miro']"
            project-links="/Projects/MiraProject"
            />
        </div>
    </section>
    <landingFooter />
</template>
