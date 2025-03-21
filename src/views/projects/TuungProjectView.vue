<script setup>
import projectDetail from '@/components/Projects/projectDetail.vue';
import projectNavbar from '@/components/Navbar/projectNavbar.vue';
import Tuung from "@/assets/images/Tuung.png";
</script>

<template>
    <projectNavbar />
    <projectDetail
        projectTitle="Tuung - Garden Management System"
        :projectImg="Tuung"
        projectDesc="Tuung is a garden monitoring system website designed as an integral part of my IoT project, which leverages Arduino technology to create an efficient and user-friendly admin panel for managing garden conditions. This project showcases my ability to integrate hardware and software solutions, utilizing the ESP32 microcontroller and a variety of sensors to monitor environmental factors essential for plant health.<br><br>

The primary goal of Tuung is to provide users with real-time data on their garden's conditions, allowing for informed decision-making regarding plant care and maintenance. The website serves as a central hub where users can access information about soil moisture levels, temperature, humidity, and other critical parameters that affect plant growth. By presenting this data in an intuitive format, Tuung empowers users to take proactive measures in managing their gardens effectively.<br><br>

Throughout the design process, I focused on creating a user-friendly interface that simplifies navigation and enhances the overall user experience. I conducted user research to understand the needs of gardeners and identify key features that would improve usability. This research informed my design decisions, ensuring that the website is tailored to meet the specific requirements of users who may not have extensive technical knowledge.<br><br>

I utilized Figma as my primary design tool to create high-fidelity mockups and interactive prototypes, allowing me to visualize the user interface and gather feedback from potential users. Additionally, I incorporated Spline to create engaging 3D visualizations of the garden monitoring system, enhancing the overall aesthetic and providing users with a clear understanding of how the system operates.<br><br>

Tuung includes essential features designed to facilitate effective garden management, such as real-time monitoring dashboards that display sensor data, alerts for critical conditions, and user-friendly controls for adjusting settings. The website's layout is designed to present this information clearly, ensuring that users can quickly access the data they need to maintain their gardens.<br><br>

Through this project, I have gained valuable experience in integrating IoT technology with web design, deepening my understanding of how to create functional and visually appealing interfaces that enhance user experiences. Tuung not only showcases my technical skills in both hardware and software development but also reflects my commitment to promoting sustainable gardening practices through innovative technology. I look forward to applying the insights gained from this project to future endeavors that challenge my creativity and technical capabilities."
        :badges="['Figma', 'Spline', 'Arduino']"
    />
</template>