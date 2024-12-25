<script setup></script>
<template>
    <section class="my-container py-[100px]" id="learnings">
        <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-y-4">
            <p class="section-title max-w-[639px]" data-aos="fade-right" data-aos-duration="1500">Skills & <br> <span class="text-secondary" >Expertise</span></p>
            <p class="text-lg font-semibold leading-[27px] text-text max-w-[687px]" data-aos="fade-left" data-aos-duration="1500">
                Di Atrem Project, sistem belajarnya berbasis mentorship. Kami diberikan tugas yang harus diselesaikan secara mandiri, dan jika mengalami kesulitan, kami dapat mendiskusikannya.
            </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-16">
            <div data-aos="fade-up" data-aos-duration="1500">
                <div class="space-y-8 border-b skill-card border-primary/20 lg:border-r xl:border-b-0">
                    <div class="w-16 h-16 text-3xl solar-ux"></div>
                    <div class="text-xl font-bold text-center">UX Research & UX Testing</div>
                    <p class="text-[18px] font-medium">Selama di sini, saya diperkenalkan dengan UX Research, yang merupakan tahap pertama dalam pembuatan aplikasi atau website.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                <div class="space-y-8 border-b border-primary/20 skill-card xl:border-b-0 xl:border-r group">
                    <svg width="64" height="64" viewBox="0 0 64 65" fill="white" xmlns="http://www.w3.org/2000/svg" class="fill-primary group-hover:fill-white">
                        <path
                            d="M32 13.46C23.5378 13.46 18.2489 17.6911 16.1333 26.1533C19.3067 21.9222 23.0089 20.3355 27.24 21.3933C29.6533 21.996 31.3787 23.748 33.288 25.6866C36.4027 28.8466 40 32.5 47.8667 32.5C56.3289 32.5 61.6178 28.2688 63.7333 19.8066C60.56 24.0377 56.8578 25.6244 52.6267 24.5666C50.2107 23.964 48.488 22.212 46.5733 20.2733C43.4667 17.1133 39.8667 13.46 32 13.46ZM16.1333 32.5C7.67111 32.5 2.38222 36.7311 0.266663 45.1933C3.44 40.9622 7.14222 39.3755 11.3733 40.4333C13.7867 41.036 15.512 42.788 17.424 44.7266C20.5333 47.8866 24.1333 51.54 32 51.54C40.4622 51.54 45.7511 47.3089 47.8667 38.8466C44.6933 43.0777 40.9911 44.6644 36.76 43.6066C34.344 43.004 32.6213 41.252 30.7067 39.3133C27.6 36.1533 24 32.5 16.1333 32.5Z"
                        />
                    </svg>
                    <div class="text-xl font-bold text-center">Tailwind CSS</div>
                    <p class="text-[18px] font-medium">Tailwind adalah framework CSS yang terkenal. Di sini, saya dibina dan diajarkan cara menggunakan Tailwind dengan benar dan efektif.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
                <div class="space-y-8 border-b skill-card border-b-primary/20 lg:border-b-0 lg:border-r border-primary/20">
                    <div class="w-16 h-16 text-3xl fa-brands fa-vuejs"></div>
                    <div class="text-xl font-bold text-center">Vue.js</div>
                    <p class="text-[18px] font-medium">Di sini, saya diajarkan cara melakukan UX testing yang benar, mulai dari mencari responden hingga cara menanggapi mereka. </p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900">
                <div class="space-y-8 border-b skill-card border-b-primary/20 lg:border-b-0">
                    <div class="w-16 h-16 text-3xl fa-solid fa-robot"></div>
                    <div class="text-xl font-bold text-center">Robotics & Arduino</div>
                    <p class="text-[18px] font-medium"> Di sini, saya mengeksplorasi UI Prototyping, di mana saya membuat animasi dan user flow di Figma untuk meningkatkan kualitas tahap UX Testing. </p>
                </div>
            </div>
        </div>
    </section>
</template>
