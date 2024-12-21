<script setup>
import projectsCompo from '@/components/projectsCompo.vue';
import protoProject from '@/assets/images/proto-thumb.png';
import uiProject from '@/assets/images/ui-thumb.png';
import miraProject from '@/assets/images/mira-thumb.png';
import lmsProject from '@/assets/images/lms-thumb2.png';
import packageProject from '@/assets/images/package-thumn.png';
</script>
<template>
    <section class="py-[100px] my-container" id="projects">
        <p class="text-center section-title"
            >My Projects & <br />
            <span class="text-secondary">Works</span></p
        >
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-16">
            <projectsCompo 
                :projectImg=protoProject
                projectTitle="16 UI Prototyping Project"
                :badges="['Figma', 'Illustrator']"
                links="/Projects/ProtoProject"
            />
            <projectsCompo 
                :projectImg=uiProject
                projectTitle="28 UI Projects"
                :badges="['Figma', 'illustrator']"
                links="/Projects/UiProject"
            />
            <projectsCompo 
                :projectImg=miraProject
                projectTitle="Mira Project Study Case"
                :badges="['Figma', 'Miro']"
                links="/Projects/MiraProject"
            />
            <projectsCompo 
                :projectImg=lmsProject
                projectTitle="LMS Project (Frontend)"
                :badges="['Tailwind', 'Blade', 'DaisyUI']"
                links="/Projects/LmsProject"
            />
            <projectsCompo 
                :projectImg=packageProject
                projectTitle="Package Tracking System"
                :badges="['Tailwind', 'Blade', 'DaisyUI']"
                links="/Projects/PackageProject"
            />
            <projectsCompo 
                :projectImg=protoProject
                projectTitle="Laundry Management System"
                :badges="['Figma', 'Miro']"
            />
        </div>
    </section>
</template>
