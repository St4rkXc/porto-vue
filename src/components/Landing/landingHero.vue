
/**
 * This Vue component represents the hero section of the landing page.
 * 
 * Props:
 * - title: String (default: "Praktek Kerja Lapangan")
 * - subtitle: String (default: "Atrem Project")
 * 
 * Assets:
 * - heroslim: Image of the hero character.
 * - effectRight: Right side decorative effect image.
 * - effectLeft: Left side decorative effect image.
 * - star: Star SVG used for decorative spinning stars.
 * 
 * External Libraries:
 * - FontAwesomeIcon: Used for displaying FontAwesome icons.
 * 
 * Template Structure:
 * - Header: Main container with flex layout, centered content, and full-screen height.
 * - h1: Main title with hero image.
 * - h2: Subtitle text.
 * - Decorative Stars: Positioned absolutely with animations.
 * - Decorative Effects: Positioned absolutely on the left and right sides.
 * - Social Media Icons: Links to Instagram, GitHub, and LinkedIn profiles.
 * 
 * Animations:
 * - Uses AOS (Animate On Scroll) library for fade and spin animations.
 * - Custom CSS classes for hover effects and animations.
 */
<script setup>
import { defineProps } from "vue";
import heroslim from "@/assets/images/heroslim.png";
import effectRight from "@/assets/decoration/effect-r.png";
import effectLeft from "@/assets/decoration/effect.png";
import star from "@/assets/decoration/star.svg";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
    title: {
        type: String,
        default: "Praktek Kerja Lapangan",
    },
    subtitle: {
        type: String,
        default: "Atrem Project",
    },
});
</script>

<template>
    <header class="relative flex flex-col items-center justify-center w-full min-h-screen">
        <h1 class="text-3xl lg:text-4xl font-bold text-center text-primary leading-tight lg:leading-[100px] flex gap-4" data-aos="fade-down" data-aos-duration="1500" >
            Dhiyo <img :src="heroslim" class="hover:-rotate-6 hover:scale-105 duration-300 hidden md:block" alt="" /> Wikantara
        </h1>
        <h2 class="text-secondary text-2xl lg:text-[48px] text-center font-bold" data-aos="fade" data-aos-duration="1500" data-aos-delay="400">{{ subtitle }}</h2>
        <div class="absolute top-[200px] left-[200px] hidden xl:block" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="600">
            <img :src="star" alt="" class="w-16 animate-spin-slow" />
        </div>
        <div class="absolute bottom-[240px] left-[400px] hidden xl:block" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600">
            <img :src="star" alt="" class="w-8 animate-spin-slow-reverse" />
        </div>
        <div class="absolute bottom-[200px] right-[440px] hidden xl:block" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
            <img :src="star" alt="" class="w-10 opacity-60 animate-spin-slow" />
        </div>
        <div class="absolute top-[200px] right-[240px] hidden xl:block" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600">
            <img :src="star" alt="" class="w-12 opacity-80 animate-spin-slow-reverse" />
        </div>
        <img :src="effectLeft" alt="" class="absolute left-0 h-full" />
        <img :src="effectRight" alt="" class="absolute right-0 h-full" />
        <div class="flex gap-6 mt-8 items-center" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
            <div class="devider-horizon hidden md:block"></div>
            <div class="flex items-center gap-4">
                <a class="fa-brands fa-instagram icon-hero" href="https://www.instagram.com/dhios.ntz/" target="_blank"></a>
                <a class="fa-brands fa-github icon-hero" href="https://github.com/St4rkXc" target="_blank"></a>
                <a class="fa-brands fa-linkedin-in icon-hero" href="https://www.linkedin.com/in/dhiyo-wikantara-3172672ab/" target="_blank"></a>
            </div>
            <div class="devider-horizon hidden md:block"></div>
        </div>
    </header>
</template>
