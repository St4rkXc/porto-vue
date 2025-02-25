<script setup>
import landingNavbar from "@/components/Navbar/landingNavbar.vue";
import landingHero from "@/components/Landing/landingHero.vue";
// import LandingAbout2 from "@/components/Landing/LandingAbout2.vue";
import landingSkills from "@/components/Landing/landingSkills.vue";
import LandingExperience from "@/components/Landing/landingExperience.vue";
import landingProjects from "@/components/Landing/landingProjects.vue";
import landingFooter from "@/components/Landing/landingFooter.vue";
import LandingAbout from "@/components/Landing/landingAbout.vue";
</script>
<template>
    <landingNavbar />
    <landingHero title="Dhiyo (Stark) Wikantara" subtitle="UI/UX Engineer & Frontend Developer " />
    <LandingAbout />
    <landingSkills />
    <LandingExperience />
    <landingProjects />
    <landingFooter />
</template>
