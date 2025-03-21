<script setup>
import projectNavbar from "@/components/Navbar/projectNavbar.vue";
import landingFooter from "@/components/Landing/landingFooter.vue";
import projectsSpecific from "@/components/Projects/projectsSpecific.vue";
import Carafao from "@/assets/images/Carafao.png";
import Foxbat from "@/assets/images/Foxbat.png";
import Energiya from "@/assets/images/Energiya.png";
import Paralax from "@/assets/images/Paralax.png";
import Doclink from "@/assets/images/Doclink.png";
import Tuung from "@/assets/images/Tuung.png";
import Lumi from "@/assets/images/Lumi.png";
import Xtrade from "@/assets/images/Xtrade.png";

const project = [
    {
        title: "Foxbat - Package Monitoring System",
        img: Foxbat,
        desc: "Foxbat is a package monitoring system and my first full-stack project, developed using Laravel and Blade, featuring real-time project management and shipping with a minimalist design to enhance user information accessibility.",
        badges: ["Figma", "Tailwind", "Blade", "DaisyUI"],
        links: "/Projects/FoxbatProject",
    },
    {
        title: "Energiya - Green Energy Company",
        img: Energiya,
        desc: " Energiya is a landing page website project for a green energy company, featuring a design system and UX research focused on minimalist design to enhance user experience and facilitate easy access to information.",
        badges: ["Figma", "Illustrator"],
        links: "/Projects/EnergiyaProject",
    },
    {
        title: "Carafao - Social Media App",
        img: Carafao,
        desc: "Carafao is my first UI project, a social media app inspired by Instagram that features calming blue vibes, focusing on enhancing my UI design skills through a visually appealing interface.",
        badges: ["Figma", "Photoshop"],
        links: "/Projects/CarafaoProject",
    },
    {
        title: "Paralax - Crypto Community",
        img: Paralax,
        desc: "Parallax is a crypto community website designed to provide users with easy access to live cryptocurrency information, featuring a dark theme with soft blue and purple accents to create a futuristic aesthetic, while enhancing my UI design and UX research skills.",
        badges: ["Figma", "Illustrator"],
        links: "/Projects/ParalaxProject",
    },
    {
        title: "Doclink - Doctor Dashboard",
        img: Doclink,
        desc: "Doctor Dashboard is a web application designed to help doctors manage patient appointments efficiently, focusing on user experience to simplify access to patient details and appointment management.",
        badges: ["Figma"],
        links: "/Projects/DoclinkProject",
    },
    {
        title: "Tuung - Garden Monitoring Sytem",
        img: Tuung,
        desc: "Tuung is a garden monitoring system website that serves as an admin panel for my IoT project, utilizing Arduino and ESP32 along with various sensors to create an efficient garden management solution.",
        badges: ["Figma", "Spline", 'Arduino'],
        links: "/Projects/TuungProject",
    },
    {
        title: "Lumi - Electronic Commerce",
        img: Lumi,
        desc: "Lumi is a gadget store website, my second UI project, featuring a dark theme with purple and blue vibes to create a futuristic aesthetic, designed to sell gadgets such as phones, laptops, and accessories like earbuds and smartwatches.",
        badges: ["Figma", "Photoshop"],
        links: "/Projects/LumiProject",
    },
    {
        title: "Xtrade - Stock Trading Platform",
        img: Xtrade,
        desc: "Xtrade is a modern stock trading platform designed with a sleek dark mode and green accents, enhancing user experience while sharpening my UI design skills.",
        badges: ["Figma", "Illustrator"],
        links: "/Projects/XtradeProject",
    },
];
</script>

<template>
    <projectNavbar :mainlinks="'/'" />
    <section class="my-container py-[150px]">
        <div class="max-w-4xl">
            <h1 class="text-text text-3xl font-bold leading-tight">
                See All My Project that <br />
                I've Done
            </h1>
            <p class="text-text text-lg fonthe-medium mt-4">
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
