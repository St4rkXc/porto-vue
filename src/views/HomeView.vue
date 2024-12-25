<script setup>
import landingNavbar from "@/components/Navbar/landingNavbar.vue";
import landingHero from "@/components/Landing/landingHero.vue";
import landingAbout from "@/components/Landing/landingAbout.vue";
import landingSkills from "@/components/Landing/landingSkills.vue";
import LandingExperience from "@/components/Landing/landingExperience.vue";
import landingProjects from "@/components/Landing/landingProjects.vue";
import landingFooter from "@/components/Landing/landingFooter.vue";

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
