<script setup>
import { defineProps } from 'vue';
import effectRight from '@/assets/decoration/effect-r.png';
import effectLeft from '@/assets/decoration/effect.png';
import star from '@/assets/decoration/star.svg';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
    title:{
        type: String,
        default: 'Praktek Kerja Lapangan'
    },
    subtitle:{
        type: String,
        default: 'Atrem Project'
    }
})
</script>

<template >
    <header class="relative flex flex-col items-center justify-center w-full min-h-screen" data-aos="fade-down" data-aos-duration="1500">
            <h1 class="text-3xl lg:text-4xl font-bold text-center text-primary leading-tight lg:leading-[100px]">
                {{ title }} <br />
            </h1>
            <h2 class="text-secondary text-2xl lg:text-[48px] text-center font-bold">{{ subtitle }}</h2>
            <img :src="star" alt="" class="absolute top-[200px] w-16 left-[200px] hidden xl:block" />
            <img :src="star" alt="" class="absolute bottom-[240px] w-8 left-[400px] hidden xl:block" />
            <img :src="star" alt="" class="absolute bottom-[200px] right-[440px] w-10 opacity-60 hidden xl:block" />
            <img :src="star" alt="" class="absolute top-[200px] right-[240px] w-12 opacity-80 hidden xl:block" />
            <img :src="effectLeft" alt="" class="absolute left-0 h-full" />
            <img :src="effectRight" alt="" class="absolute right-0 h-full" />
            <div class="flex gap-6 mt-8 items-center">
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