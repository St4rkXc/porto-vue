<script setup>
import { ref } from "vue";
import atrem from "@/assets/images/atrem.png";
import historyImg from "@/assets/images/history.png";
import internImg from "@/assets/images/intenr.png";
import { defineProps } from "vue";

// Reactive references for state management
const activeTab = ref("content1");

// Tab switching logic
function tabs(tabName) {
    activeTab.value = tabName;
}

defineProps({
    title: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <section class="pt-[200px] pb-[100px] my-container" id="company">
        <h2 class="text-center section-title">
            About <br />
            <span class="text-secondary">Dhiyo Wikantara</span>
        </h2>
        <div class="flex mt-16">
            <!-- Bind active classes dynamically -->
            <p
                :class="['flex-1 py-6 text-lg font-semibold text-center border-b-2 cursor-pointer text-text', activeTab === 'content1' ? 'border-b-primary' : 'border-b-primary/30']"
                @click="tabs('content1')"
            >
                Atrem Project
            </p>
            <p
                :class="['flex-1 py-6 text-lg font-semibold text-center border-b-2 cursor-pointer text-text', activeTab === 'content2' ? 'border-b-primary' : 'border-b-primary/30']"
                @click="tabs('content2')"
            >
                Sejarah Atrem Project
            </p>
            <p
                :class="['flex-1 py-6 text-lg font-semibold text-center border-b-2 cursor-pointer text-text', activeTab === 'content3' ? 'border-b-primary' : 'border-b-primary/30']"
                @click="tabs('content3')"
            >
                System Internship
            </p>
        </div>
        <div class="mt-16">
            <!-- Conditional rendering for each tab -->
            <div v-show="activeTab === 'content1'" class="flex gap-8">
                <img :src="atrem" alt="Atrem" />
                <div>
                    <h3 class="text-2xl font-bold text-text">Atrem Project</h3>
                    <p class="text-base font-medium text-text leading-[26px]">
                        Atrem Project merupakan hasil dari inisiatif Merta Yoga, yang memulai pendirian agensi ini setelah lulus dari Sekolah Menengah Kejuruan (SMK). Agensi ini berfokus pada
                        penyediaan solusi untuk mendigitalisasi berbagai usaha. Atrem menawarkan berbagai layanan, termasuk pembuatan sistem manajemen laundry, Learning Management System (LMS), jasa
                        desain profil perusahaan, dan masih banyak lagi.
                    </p>
                </div>
            </div>
            <div v-show="activeTab === 'content2'" class="flex gap-8">
                <img :src="historyImg" alt="History" class="grayscale" />
                <div>
                    <h3 class="text-2xl font-bold text-text">Sejarah Atrem Project</h3>
                    <p class="text-base font-medium text-text leading-[26px]">
                        Semua berawal dari ketertarikan Merta Yoga pada bidang komputer, terutama setelah ia mengetahui bahwa seorang programmer dapat bekerja secara remote. Hal ini mendorongnya untuk
                        memilih SMK 1 Denpasar dengan jurusan Rekayasa Perangkat Lunak (RPL) sebagai langkah awal dalam kariernya. Setelah menyelesaikan pendidikan di SMK, Merta Yoga memutuskan untuk
                        mendirikan Atrem Project sebagai sumber penghasilan sampingan.
                    </p>
                </div>
            </div>
            <div v-show="activeTab === 'content3'" class="flex gap-8">
                <img :src="internImg" alt="Internship" class="grayscale" />
                <div>
                    <h3 class="text-2xl font-bold text-text">System Internship</h3>
                    <p class="text-base font-medium text-text leading-[26px]">
                        Atrem Project merekrut anggota agensi melalui sistem magang, di mana setiap angkatan disebut sebagai "batch." Saya termasuk dalam batch 6. Setiap anggota batch akan diberikan
                        tugas sesuai dengan bidang yang mereka pilih. Jika salah satu anggota batch dinilai kompeten oleh Merta Yoga, mereka akan ditawari kesempatan untuk bergabung dengan Atrem
                        Project sebagai tim yang akan menangani proyek klien.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
