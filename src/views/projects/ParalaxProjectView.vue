<script setup>
import projectDetail from '@/components/Projects/projectDetail.vue';
import projectNavbar from '@/components/Navbar/projectNavbar.vue';
import Paralax from '@/assets/images/Paralax.png';
</script>

<template>
    <projectNavbar />
    <projectDetail 
        :projectImg=Paralax
        projectTitle="Paralax - Crypto Community"
        :badges="['Figma','Illustrator']"
        projectDesc="Parallax is a crypto community website that serves as a hub for users to access live cryptocurrency information effortlessly. This project was designed to enhance my UI design skills and deepen my understanding of UX research, focusing on creating an engaging and informative platform for crypto enthusiasts.<br><br>

The design of Parallax features a dark theme complemented by soft blue and purple accents, which together create a modern and futuristic atmosphere. This color palette not only enhances the visual appeal of the website but also helps reduce eye strain, making it easier for users to consume information over extended periods. The combination of these colors contributes to a sleek and immersive user experience, aligning with the cutting-edge nature of the cryptocurrency market.<br><br>

Throughout the design process, I prioritized user experience by conducting thorough UX research to understand the needs and preferences of the target audience. This research involved gathering insights through user interviews and analyzing competitor websites, which informed my design decisions and helped identify key features that would enhance usability. By focusing on user-centered design principles, I aimed to create a platform that is intuitive and easy to navigate, allowing users to find the information they need quickly.<br><br>

I utilized Figma as my primary design tool, enabling me to create high-fidelity mockups and interactive prototypes that effectively communicate the design vision. Additionally, I employed Adobe Illustrator to create custom graphics and icons that enhance the overall aesthetic of the website, ensuring a cohesive visual identity that resonates with users.<br><br>

Parallax includes essential features designed to facilitate easy access to live crypto information, such as real-time price updates, market trends, and news articles related to the cryptocurrency space. The website's layout is designed to present this information clearly and concisely, allowing users to stay informed without feeling overwhelmed.<br><br>

Through this project, I have not only improved my technical skills in UI design but also gained valuable insights into the importance of UX research in creating effective digital experiences. Parallax showcases my ability to design functional and visually appealing interfaces while reflecting my commitment to enhancing user experiences in the rapidly evolving world of cryptocurrency. I look forward to applying the lessons learned from this project to future endeavors that challenge my creativity and design capabilities."
    />
</template>