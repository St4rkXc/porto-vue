<script setup>
import projectNavbar from '@/components/Navbar/projectNavbar.vue';
import projectDetail from '@/components/Projects/projectDetail.vue';
import Xtrade from '@/assets/images/Xtrade.png';
</script>

<template>
    <projectNavbar />
    <projectDetail 
        :projectImg=Xtrade
        projectTitle="Xtrade - E-commerce Website"
        :badges="['Figma', 'Illustrator']"
        projectDesc="Xtrade is my third UI project, centered around the development of a user-friendly stock trading platform that has been pivotal in sharpening my UI design skills.<br><br>

The primary goal of Xtrade was to create a modern application that appeals to both novice and experienced traders, featuring a sleek dark mode that enhances visual comfort during extended use while aligning with contemporary design trends.<br><br>

The use of green accents throughout the app symbolizes growth and prosperity, fostering a positive emotional connection for users.<br><br>

Understanding the importance of usability in financial applications, I conducted user research to identify key pain points and preferences among potential users, which informed my design decisions to ensure the platform is intuitive and easy to navigate.<br><br>

Key features such as real-time stock tracking, customizable dashboards, and straightforward navigation were prioritized to enhance the overall user experience.<br><br>

I utilized Figma as my primary design tool, allowing for efficient prototyping and collaboration, while Adobe Illustrator was employed to design custom icons that contribute to a cohesive visual identity.<br><br>

To validate my design choices, I developed interactive prototypes that allowed users to experience the app's functionality before final implementation, gathering invaluable feedback that refined the interface.<br><br>

Xtrade includes essential features designed to facilitate a seamless trading experience, such as real-time stock tracking, customizable dashboards for personalized information display, and intuitive navigation for easy access to key features.<br><br>

Through this project, I have not only enhanced my technical skills in UI design but also deepened my understanding of user-centered design principles in the financial sector, reinforcing my commitment to creating interfaces that are visually appealing, functional, and user-friendly, ultimately contributing to a positive user experience."
    />
</template>