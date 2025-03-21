<script setup>
import projectNavbar from '@/components/Navbar/projectNavbar.vue';
import projectDetail from '@/components/Projects/projectDetail.vue';
import Doclink from "@/assets/images/Doclink.png";
</script>
<template>
    <projectNavbar />
    <projectDetail 
        :projectImg=Doclink
        projectTitle="Doclink - Doctor Dashboard"
        :badges="['Figma']"
        projectDesc="Doctor Dashboard is a web application that allows doctors to manage patient appointments seamlessly, designed collaboratively with my development team. The primary objective of this project was to create an intuitive interface that enhances the user experience, enabling doctors to efficiently manage their schedules and access patient details with ease.<br><br>

Understanding the challenges faced by healthcare professionals in managing appointments, I focused on designing a user-friendly interface that streamlines the appointment management process. The design prioritizes clarity and accessibility, ensuring that doctors can quickly view their schedules, make adjustments, and access important patient information without unnecessary complexity.<br><br>

Throughout the design process, I conducted user research to gather insights from healthcare professionals, which informed my design decisions. This research helped identify key features that would enhance usability, such as a calendar view for appointments, quick access to patient profiles, and notifications for upcoming appointments. By incorporating these elements, I aimed to create a dashboard that not only meets the functional needs of doctors but also improves their overall workflow.<br><br>

I utilized Figma as my primary design tool, allowing for rapid prototyping and collaboration with my development team. This enabled us to iterate on the design based on feedback and ensure that the final product aligns with user expectations. The design also includes responsive elements, ensuring that the dashboard is accessible on various devices, which is crucial for doctors who may need to manage appointments on the go.<br><br>

The Doctor Dashboard includes essential features designed to facilitate efficient appointment management, such as an appointment calendar that provides a visual representation of scheduled appointments, allowing doctors to see their availability at a glance. It also offers quick access to detailed patient profiles, including medical history and previous appointments, to enhance the quality of care. Additionally, the dashboard features alerts for upcoming appointments and reminders to help doctors stay organized and prepared.<br><br>

Through this project, I have deepened my understanding of user-centered design principles, particularly in the healthcare sector. The Doctor Dashboard not only showcases my ability to create functional and aesthetically pleasing interfaces but also highlights my commitment to improving user experiences in critical applications. I look forward to applying the insights gained from this project to future endeavors that prioritize usability and efficiency in design."
    />
</template>