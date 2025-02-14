<script setup>
import projectDetail from "@/components/Projects/projectDetail.vue";
import Carafao from '@/assets/images/Carafao.png';
import projectNavbar from "@/components/Navbar/projectNavbar.vue";
</script>

<template>
    <projectNavbar />
    <projectDetail
        projectTitle="Carafao - Social Media App"
        :projectImg="Carafao"
        projectDesc="Mira Course adalah sebuah aplikasi e-learning yang dirancang untuk menyediakan berbagai kursus tentang teknologi, dengan fokus pada pengalaman pengguna yang intuitif dan menarik.
                    Proses pengembangan dimulai dengan menentukan tema yang relevan, diikuti dengan identifikasi masalah yang ingin diselesaikan melalui analisis mendalam terhadap kebutuhan pengguna.
                    Data yang terkumpul kemudian disusun menggunakan affinity board untuk mengidentifikasi pola dan tren, yang selanjutnya digunakan untuk membuat User Persona dan User Flow. Dengan
                    pendekatan ini, setiap elemen dalam aplikasi dirancang untuk memenuhi kebutuhan pengguna secara efektif. <br> <br> Setelah tahap perancangan awal, proyek berlanjut ke pembuatan wireframe yang berfungsi sebagai kerangka dasar desain. Setelah wireframe selesai, elemen desain visual ditambahkan
                    untuk menciptakan tampilan yang menarik dan sesuai dengan identitas merek. Prototipe interaktif kemudian dibuat untuk memungkinkan pengguna berinteraksi dengan desain, diikuti
                    dengan tahap pengujian untuk mendapatkan umpan balik yang berharga. Proses iteratif ini memastikan bahwa Mira Course tidak hanya memenuhi kebutuhan pengguna, tetapi juga memberikan
                    pengalaman belajar yang menyenangkan dan efektif dalam dunia teknologi."
        :badges="['Figma', 'Miro']"
    />
</template>
