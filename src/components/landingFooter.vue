<script>
import footerIng from "@/assets/images/CTA.png";
</script>

<template>
    <footer class="mt-[200px] flex flex-col items-center justify-center h-[800px] my-footer">
        <p class="text-3xl xl:text-4xl 2xl:text-[128px] font-bold text-white leading-tight xl:leading-[120px] text-center"
            >Thank You, <br />
            For Scrolling</p
        >
        <div class="flex gap-6 mt-8 items-center">
            <div class="devider-horizon bg-white/50 hidden md:block"></div>
            <div class="flex items-center gap-4">
                <a class="fa-brands fa-instagram icon-foot" href="https://www.instagram.com/dhios.ntz/" target="_blank"></a>
                <a class="fa-brands fa-github icon-foot" href="https://github.com/St4rkXc" target="_blank"></a>
                <a class="fa-brands fa-linkedin-in icon-foot" href="https://www.linkedin.com/in/dhiyo-wikantara-3172672ab/" target="_blank"></a>
            </div>
            <div class="devider-horizon bg-white/50 hidden md:block"></div>
        </div>
    </footer>
</template>

<style scoped>
.my-footer {
    background-image: url("@/assets/images/CTA.png");
    background-size: cover;
    background-position: center;
}
</style>
