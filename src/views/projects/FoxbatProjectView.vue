<script setup>
import projectDetail from '@/components/Projects/projectDetail.vue';
import projectNavbar from '@/components/Navbar/projectNavbar.vue';
import Foxbat from '@/assets/images/Foxbat.png';
</script>
<template>
    <projectNavbar />
    <projectDetail 
        :projectImg=Foxbat
        projectTitle="Foxbat - Package Monitoring System"
        :badges="['Figma','Tailwind', 'Blade', 'DaisyUI']"
        projectDesc="Foxbat is a package monitoring system that represents my first full-stack project, developed using Laravel and Blade. This project was designed to provide users with an efficient way to manage and track packages in real-time, focusing on both functionality and user experience. The primary goal of Foxbat was to create a robust platform that simplifies package management while ensuring that users can easily access the information they need.<br><br>

The system features real-time project management capabilities, allowing users to monitor the status of their packages as they move through various stages of shipping. This functionality is crucial for users who require up-to-date information on their shipments, enabling them to make informed decisions and manage their logistics effectively.<br><br>

To enhance the user experience, I adopted a minimalist design approach, which prioritizes clarity and ease of navigation. By reducing visual clutter and focusing on essential information, users can quickly find what they need without unnecessary distractions. This design philosophy not only improves usability but also aligns with modern web design trends that favor simplicity and functionality.<br><br>

I utilized Laravel as the backend framework, which provided a powerful and flexible environment for developing the application. The Blade templating engine allowed me to create dynamic and responsive views, ensuring that the user interface is both engaging and functional. Additionally, I employed Tailwind CSS to implement a clean and modern design, enabling rapid styling and customization of components.<br><br>

Foxbat includes essential features designed to facilitate efficient package monitoring, such as real-time updates on package status, a user-friendly dashboard that displays key information at a glance, and intuitive navigation that guides users through the various functionalities of the system. The platform also allows users to manage their shipping preferences and track multiple packages simultaneously, enhancing overall efficiency.<br><br>

Through this project, I have gained valuable experience in full-stack development and deepened my understanding of the importance of user-centered design principles. Foxbat not only showcases my technical skills in web development but also reflects my commitment to creating functional and aesthetically pleasing interfaces that enhance user experiences. I look forward to applying the insights gained from this project to future endeavors that challenge my skills and expand my capabilities as a developer."
    />
</template>