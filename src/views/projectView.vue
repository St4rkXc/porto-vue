<script setup>
import projectNavbar from "@/components/Navbar/projectNavbar.vue";
import landingFooter from "@/components/Landing/landingFooter.vue";
import projectsSpecific from "@/components/Projects/projectsSpecific.vue";
import miraThumb from "@/assets/images/mira-thumb.png";
import prototypeThumb from "@/assets/images/proto-thumb.png";

const project = [
    {
        title: "Mira Project Study Case",
        img: miraThumb,
        desc: "Mira Project is a project that I1 made during my internship at Atrem Project. This project is a study case of the Mira Course website. The website is made using Figma and Miro.",
        badges: ["Figma", "Miro"],
        links: "/Projects/MiraProject",
    },
    {
        title: "Secondary Project",
        img: prototypeThumb,
        desc: "my 24 proto project",
        badges: ["Figma", "Illustrator"],
        links: "",
    },
];
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
                v-for="(item, index) in project"
                :key="index"
                :projectTitle="item.title"
                :projectImg="item.img"
                :projectDesc="item.desc"
                :badges="item.badges"
                :projectLinks="item.links"
            />
        </div>
    </section>
    <landingFooter titlen="My Projects <br /> End Here" />
</template>
