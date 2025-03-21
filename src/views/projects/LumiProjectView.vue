<script setup>
import projectNavbar from '@/components/Navbar/projectNavbar.vue';
import projectDetail from '@/components/Projects/projectDetail.vue';
import Lumi from '@/assets/images/Lumi.png';
</script>

<template>
    <projectNavbar />
    <projectDetail 
        :projectImg=Lumi
        projectTitle="Lumi - E-commerce Website"
        :badges="['Figma','Photoshop']"
        projectDesc="Lumi is a gadget store website that represents my second UI project, designed to create an engaging online shopping experience for tech enthusiasts. The primary focus of this project was to develop a visually striking interface that captures the essence of modern technology while effectively showcasing a range of products, including phones, laptops, and various accessories such as earbuds and smartwatches.<br><br>

The design of Lumi features a dark theme complemented by purple and blue color accents, which together create a futuristic and immersive atmosphere. This color palette not only enhances the visual appeal of the website but also aligns with current design trends that favor bold and dynamic aesthetics. The use of dark themes is particularly effective in highlighting product images and creating a sense of depth, making the browsing experience more engaging for users.<br><br>

Throughout the design process, I focused on creating a user-friendly interface that simplifies navigation and enhances the overall shopping experience. Key design elements include intuitive product categories, clear calls to action, and visually appealing layouts that draw attention to featured products and promotions. By prioritizing usability, I aimed to ensure that users can easily find and purchase the gadgets they are interested in without any confusion.<br><br>

I utilized Figma as my primary design tool, which allowed me to create high-fidelity mockups and prototypes efficiently. This tool enabled me to experiment with different layouts and design elements, ensuring that the final product aligns with my vision. Additionally, I employed Adobe Photoshop to enhance product images and create custom graphics that contribute to the overall aesthetic of the website.<br><br>

Lumi includes essential features designed to facilitate a seamless shopping experience, such as a responsive layout that adapts to various devices, a user-friendly product filtering system, and an easy-to-navigate checkout process. These features are crucial for ensuring that users can browse and purchase products effortlessly, ultimately leading to higher customer satisfaction.<br><br>

Through this project, I have further developed my skills in UI design and gained valuable insights into creating visually appealing and functional e-commerce websites. Lumi not only showcases my ability to design engaging interfaces but also reflects my commitment to enhancing user experiences in the online retail space. I look forward to applying the lessons learned from this project to future endeavors that challenge my creativity and technical skills."
    />
</template>