<script setup>
import landingNavbar from "@/components/landingNavbar.vue";
import landingHero from "@/components/landingHero.vue";
import landingAbout from "@/components/landingAbout.vue";
import landingSkills from "@/components/landingSkills.vue";
import LandingExperience from "@/components/landingExperience.vue";
import landingProjects from "@/components/landingProjects.vue";
import landingFooter from "@/components/landingFooter.vue";

</script>
<template>
    <landingNavbar />
	<landingHero title="Dhiyo (Stark) Wikantara" subtitle="UI/UX Engineer & Frontend Developer " />
	<landingAbout />
	<landingSkills />
	<LandingExperience />
	<landingProjects />
	<landingFooter />
</template>
