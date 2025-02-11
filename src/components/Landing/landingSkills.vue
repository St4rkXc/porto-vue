<script setup>
import star from "@/assets/decoration/star.svg";
</script>
<template>
    <section class="my-container py-[100px]" id="learnings">
        <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-y-4 relative">
            <img :src="star" alt="" class="absolute -top-12 right-0 w-12 animate-spin-slow h-12 opacity-60" />
            <img :src="star" alt="" class="absolute -top-10 -left-20 w-16 animate-spin-slow h-16 opacity-80" />
            <p class="section-title max-w-[639px]" data-aos="fade-right" data-aos-duration="1500"
                >Skills & <br />
                <span class="text-secondary animate-pulse-slow">Expertise</span>
            </p>
            <p class="text-[18px] font-medium leading-[27px] text-text max-w-[687px]" data-aos="fade-left" data-aos-duration="1500">
                Throughout my internship, academic journey, and self-directed practice, I have acquired a diverse set of skills and expertise. Below are some of the key areas where I have developed
                proficiency.
            </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-16">
            <div data-aos="fade-up" data-aos-duration="1500">
                <div class="space-y-4 border-b skill-card border-primary/20 lg:border-r xl:border-b-0">
                    <div class="w-16 h-16 text-3xl solar-ux"></div>
                    <div class="text-center flex justify-center items-center flex-col">
                        <div class="text-xl font-bold text-center">User Experience Design</div>
                        <p class="text-lg font-semibold  opacity-80">UX Testing & UX Research</p>
                    </div>
                    <p class="text-[18px] font-medium">
                        I specialize in UX testing, from recruiting respondents to analyzing feedback. I also create animations and user flows in Figma to improve the UX testing process.
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                <div class="space-y-4 border-b border-primary/20 skill-card xl:border-b-0 xl:border-r group">
                    <svg width="64" height="64" viewBox="0 0 64 65" fill="white" xmlns="http://www.w3.org/2000/svg" class="fill-primary group-hover:fill-white">
                        <path
                            d="M32 13.46C23.5378 13.46 18.2489 17.6911 16.1333 26.1533C19.3067 21.9222 23.0089 20.3355 27.24 21.3933C29.6533 21.996 31.3787 23.748 33.288 25.6866C36.4027 28.8466 40 32.5 47.8667 32.5C56.3289 32.5 61.6178 28.2688 63.7333 19.8066C60.56 24.0377 56.8578 25.6244 52.6267 24.5666C50.2107 23.964 48.488 22.212 46.5733 20.2733C43.4667 17.1133 39.8667 13.46 32 13.46ZM16.1333 32.5C7.67111 32.5 2.38222 36.7311 0.266663 45.1933C3.44 40.9622 7.14222 39.3755 11.3733 40.4333C13.7867 41.036 15.512 42.788 17.424 44.7266C20.5333 47.8866 24.1333 51.54 32 51.54C40.4622 51.54 45.7511 47.3089 47.8667 38.8466C44.6933 43.0777 40.9911 44.6644 36.76 43.6066C34.344 43.004 32.6213 41.252 30.7067 39.3133C27.6 36.1533 24 32.5 16.1333 32.5Z"
                        />
                    </svg>
                    <div class="text-center flex justify-center items-center flex-col">
                        <div class="text-xl font-bold text-center">Tailwind Envirovement</div>
                        <p class="text-lg font-semibold  opacity-80">Tailwind & DaisyUI</p>
                    </div>
                    <p class="text-[18px] font-medium"
                        >I design responsive, modern interfaces using Tailwind CSS and DaisyUI, streamlining development with pre-styled components for seamless user experiences.</p
                    >
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                <div class="space-y-4 border-b skill-card border-b-primary/20 lg:border-b-0 lg:border-r border-primary/20">
                    <div class="w-16 h-16 text-3xl fa-brands fa-vuejs"></div>
                    <div class="text-center flex justify-center items-center flex-col">
                        <div class="text-xl font-bold text-center">Vue Based App</div>
                        <p class="text-lg font-semibold  opacity-80">VueJS & PrimeVue</p>
                    </div>
                    <p class="text-[18px] font-medium"
                        >I build dynamic, user-friendly applications using Vue.js and PrimeVue, leveraging their powerful components and tools for efficient development and polished interfaces.
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900">
                <div class="space-y-4 border-b skill-card border-b-primary/20 lg:border-b-0">
                    <div class="w-16 h-16 text-3xl fa-solid fa-robot"></div>
                    <div class="text-center flex justify-center items-center flex-col">
                        <div class="text-xl font-bold text-center">Robotics Development</div>
                        <p class="text-lg font-semibold  opacity-80">Arduino & Python</p>
                    </div>
                    <p class="text-[18px] font-medium"> I develop robotics projects using Arduino, integrating hardware and software to create innovative and functional prototypes. </p>
                </div>
            </div>
        </div>
    </section>
</template>
