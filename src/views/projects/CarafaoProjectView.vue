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
        projectDesc="Carafao is my first UI project, designed as a social media app inspired by Instagram but infused with calming blue vibes. The primary focus of this project was to enhance my UI design skills, allowing me to experiment with color schemes, layouts, and visual elements without the constraints of extensive UX research. This project provided a unique opportunity to delve into the aesthetics of social media design, emphasizing the importance of creating a visually engaging environment for users.<br><br>

The choice of blue as the dominant color reflects a serene and tranquil atmosphere, aiming to evoke feelings of calmness and relaxation among users. This color palette not only enhances the visual appeal but also aligns with the psychological effects of color in design, making it an essential aspect of the user experience. Throughout the design process, I explored various design elements, such as typography, iconography, and overall aesthetics, to develop a cohesive visual identity for the app that resonates with the target audience.<br><br>

I utilized Figma as my primary design tool for creating the app's interface, which allowed me to produce high-fidelity mockups efficiently. Figma's collaborative features enabled me to iterate on designs quickly and make adjustments based on my evolving vision for the app. Additionally, Adobe Photoshop was employed to enhance visual elements and create custom graphics that align with the app's theme, ensuring that every aspect of the design contributes to a unified look and feel.<br><br>

While Carafao does not incorporate UX research, it serves as a foundational project that showcases my ability to create visually engaging interfaces. This experience has been instrumental in building my confidence as a UI designer and has laid the groundwork for future projects that will incorporate more comprehensive user experience considerations. I learned the importance of balancing aesthetics with functionality, even in projects that prioritize visual design.<br><br>

Through Carafao, I have gained valuable insights into the design process and the significance of aesthetics in user engagement. This project has reinforced my commitment to developing visually appealing and functional user interfaces, setting the stage for my growth as a designer in the competitive landscape of social media applications. I look forward to applying the skills and lessons learned from Carafao to future projects that will further challenge and expand my design capabilities."
        :badges="['Figma', 'Photoshop']"
    />
</template>
