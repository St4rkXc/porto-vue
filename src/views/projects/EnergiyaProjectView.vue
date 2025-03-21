<script setup>
import projectDetail from '@/components/Projects/projectDetail.vue';
import projectNavbar from '@/components/Navbar/projectNavbar.vue';
import Energiya from '@/assets/images/Energiya.png';
</script>
<template>
    <projectNavbar />
    <projectDetail 
        :projectImg=Energiya
        projectTitle="Energya - Green Energy Company"
        :badges="['Figma','Illustrator']"
        projectDesc="Energiya is a landing page website project developed for a green energy company, emphasizing a design system and thorough UX research to create an effective online presence. The primary goal of this project was to design a minimalist interface that allows users to easily access information about the company's services and values, ultimately improving the overall user experience.<br><br>

The design philosophy behind Energiya centers on simplicity and clarity, ensuring that users can navigate the site effortlessly and find the information they need without distraction. By adopting a minimalist approach, I aimed to reduce visual clutter and focus on essential content, making it easier for users to understand the benefits of green energy and the services offered by the company.<br><br>

To inform my design decisions, I conducted extensive UX research, which included user interviews and usability testing. This research provided valuable insights into user preferences and behaviors, allowing me to tailor the design to meet their needs effectively. Key findings from the research highlighted the importance of straightforward navigation, clear calls to action, and visually appealing layouts that convey the company's commitment to sustainability.<br><br>

I utilized Figma as my primary design tool, which enabled me to create a cohesive design system that includes typography, color palettes, and component libraries. This design system not only ensures consistency across the website but also streamlines the development process, making it easier for my team to implement the designs accurately.<br><br>

The Energiya landing page features essential elements designed to enhance user experience, such as a clean layout that highlights key information about green energy solutions, an intuitive navigation menu that guides users to relevant sections, and engaging visuals that reinforce the company's mission. Additionally, the site includes informative sections about the benefits of renewable energy, testimonials from satisfied customers, and a clear call to action encouraging users to learn more or get involved.<br><br>

Through this project, I have deepened my understanding of the importance of user-centered design principles, particularly in the context of promoting sustainability and green initiatives. Energiya not only showcases my ability to create functional and aesthetically pleasing interfaces but also reflects my commitment to enhancing user experiences through thoughtful design. I look forward to applying the insights gained from this project to future endeavors that prioritize usability and effective communication in design."
    />
</template>