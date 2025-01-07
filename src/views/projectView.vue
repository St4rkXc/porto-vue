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

const project = [
    {
        title: "Foxbat - Package Monitoring System",
        img: Foxbat,
        desc: "Foxbat is a package monitoring system that helps you track your packages in real-time. It is a web-based application that allows you to track your packages from the comfort of your home.",
        badges: ["Figma", "Tailwind", "Blade", "DaisyUI"],
        links: "/Projects/MiraProject",
    },
    {
        title: "Energiya - Green Energy Company",
        img: Energiya,
        desc: " Energiya is a green energy company that provides sustainable energy solutions to its customers. It is a web-based application that allows you to monitor your energy consumption and reduce your carbon footprint.",
        badges: ["Figma", "Illustrator"],
        links: "",
    },
    {
        title: "Carafao - Social Media App",
        img: Carafao,
        desc: "Carafao is a social media app that allows you to connect with your friends and family. It is a mobile application that allows you to share photos, videos, and messages with your loved ones.",
        badges: ["Figma", "Illustrator"],
        links: "",
    },
    {
        title: "Paralax - Crypto Community",
        img: Paralax,
        desc: "Paralax is a crypto community that allows you to connect with other crypto enthusiasts. It is a web-based application that allows you to share your thoughts and ideas with like-minded individuals.",
        badges: ["Figma", "Illustrator"],
        links: "",
    },
    {
        title: "Doclink - Doctor Dashboard",
        img: Doclink,
        desc: "Doclink is a doctor dashboard that allows you to manage your patients and appointments. It is a web-based application that allows you to keep track of your patients' medical history and schedule appointments with ease.",
        badges: ["Figma", "Illustrator"],
        links: "",
    },
    {
        title: "Tuung - Garden Monitoring Sytem",
        img: Tuung,
        desc: "Tuung is a garden monitoring system that helps you keep track of your plants and garden. A Web App application that allows you to monitor your plants' health and receive notifications when they need water or sunlight.",
        badges: ["Figma", "Illustrator"],
        links: "",
    },
    {
        title: "Lumi - Electronic Commerce",
        img: Lumi,
        desc: "Lumi is an e-commerce platform that allows you to sell your products online. It is a web-based application that allows you to create an online store and manage your inventory with ease.",
        badges: ["Figma", "Illustrator"],
        links: "",
    }
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
