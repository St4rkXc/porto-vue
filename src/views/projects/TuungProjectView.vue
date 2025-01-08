<script setup>
import projectDetail from '@/components/Projects/projectDetail.vue';
import projectNavbar from '@/components/Navbar/projectNavbar.vue';
import uiImg from '@/assets/images/uifix.png';
</script>

<template>
    <projectNavbar />
    <projectDetail
        projectTitle="UI Project Study Case"
        :projectImg="uiImg"
        projectDesc="UI Project adalah sebuah proyek yang bertujuan untuk memperbaiki tampilan dan pengalaman pengguna pada sebuah aplikasi web yang sudah ada. Proses pengembangan dimulai dengan melakukan analisis terhadap aplikasi yang sudah ada, diikuti dengan identifikasi masalah yang ingin diselesaikan. Data yang terkumpul kemudian disusun menggunakan affinity board untuk mengidentifikasi pola dan tren, yang selanjutnya digunakan untuk membuat User Persona dan User Flow. Dengan pendekatan ini, setiap elemen dalam aplikasi dirancang untuk memenuhi kebutuhan pengguna secara efektif. <br> <br> Setelah tahap perancangan awal, proyek berlanjut ke pembuatan wireframe yang berfungsi sebagai kerangka dasar desain. Setelah wireframe selesai, elemen desain visual ditambahkan untuk menciptakan tampilan yang menarik dan sesuai dengan identitas merek. Prototipe interaktif kemudian dibuat untuk memungkinkan pengguna berinteraksi dengan desain, diikuti dengan tahap pengujian untuk mendapatkan umpan balik yang berharga. Proses iteratif ini memastikan bahwa UI Project tidak hanya memenuhi kebutuhan pengguna, tetapi juga memberikan pengalaman belajar yang menyenangkan dan efektif dalam dunia teknologi."
        :badges="['Figma', 'Miro']"
    />
</template>