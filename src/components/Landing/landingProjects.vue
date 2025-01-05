<script setup>
import { RouterLink } from 'vue-router';
import projectsCompo from '@/components/Projects/projectsCompo.vue';
import lmsProject from '@/assets/images/lms-thumb2.png';
import Foxbat from '@/assets/images/Foxbat.png';
import Energiya from '@/assets/images/Energiya.png';
import Paralax from '@/assets/images/Paralax.png';

</script>
<template>
    <section class="py-[100px] my-container" id="projects">
        <p class="text-center section-title" data-aos="fade" data-aos-duration="1500" 
            >My Projects & <br />
            <span class="text-secondary animate-pulse-slow">Works</span></p
        >
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mt-16 gap-4">
            <div data-aos="fade-up" data-aos-duration="1500">
                <projectsCompo
                    :projectImg=Foxbat
                    projectTitle="Foxbat - Package Monitoring System"
                    :badges="['Figma', 'Illustrator']"
                    links="/Projects/Foxbat"
                />
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                <projectsCompo
                    :projectImg=Energiya
                    projectTitle="28 UI Projects"
                    :badges="['Figma', 'illustrator']"
                    links="/Projects/UiProject"
                />
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                <projectsCompo
                    :projectImg=Paralax
                    projectTitle="Mira Project Study Case"
                    :badges="['Figma', 'Miro']"
                    links="/Projects/MiraProject"
                />
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900">
                <projectsCompo
                    :projectImg=lmsProject
                    projectTitle="LMS Project (Frontend)"
                    :badges="['Tailwind', 'Blade', 'DaisyUI']"
                    links="/Projects/LmsProject"
                />
            </div>
            <!-- <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1200">
                <projectsCompo
                    :projectImg=packageProject
                    projectTitle="Package Tracking System"
                    :badges="['Tailwind', 'Blade', 'DaisyUI']"
                    links="/Projects/PackageProject"
                />
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1500">
                <projectsCompo
                    :projectImg=protoProject
                    projectTitle="Laundry Management System"
                    :badges="['Figma', 'Miro']"
                />
            </div> -->
        </div>
        <div class="mt-16 flex items-center justify-center">
            <RouterLink to="/Projects" class="my-button-primary" data-aos="fade-up" data-aos-duration="1500">
                View All Projects
            </RouterLink>
        </div>
    </section>
</template>
