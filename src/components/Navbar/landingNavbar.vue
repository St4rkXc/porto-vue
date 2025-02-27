<!--

This Vue component represents a responsive navigation bar for a landing page. 
It includes the following sections:

1. **Navbar Start**: An empty div for potential future content.
2. **Navbar Center**: 
    - For large screens (lg and above), it displays navigation links (Profile, Skills, Experience, Project) in a horizontal layout.
    - For smaller screens, it hides the links and shows a dropdown menu button instead.
3. **Navbar End**: 
    - Contains a dropdown menu for smaller screens with the same navigation links as the large screen layout.

Classes used:
- `fixed z-40 my-container navbar`: Positions the navbar at the top with a high z-index.
- `border navbar-center backdrop-blur-lg rounded-3xl w-fit bg-base-100/50 border-primary/30`: Styles for the navbar center section.
- `hidden lg:block`: Shows the center section only on large screens.
- `block lg:hidden`: Shows the dropdown menu button only on smaller screens.
- `dropdown dropdown-end`: Styles for the dropdown menu.
- `btn btn-ghost`: Styles for the dropdown button.
- `menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-4`: Styles for the dropdown menu content.

SVG Icon:
- Represents a hamburger menu icon for the dropdown button.
-->
<script setup></script>

<template>
    <nav class="fixed z-40 my-container navbar">
        <div class="navbar-start"></div>
        <div class="border navbar-center backdrop-blur-lg rounded-3xl w-fit bg-base-100/50 border-primary/30 hidden lg:block">
            <div class="flex justify-center items-center p-4 space-x-4">
                <div class="mx-8 space-x-4 hidden lg:flex">
                    <a href="#company" class="nav-link">Profile</a>
                    <a href="#learnings" class="nav-link">Skills</a>
                    <a href="#sideq" class="nav-link">Experience</a>
                    <a href="#projects" class="nav-link">Project</a>
                </div>
            </div>
        </div>
        <div class="navbar-end">
            <div class="border navbar-center backdrop-blur-lg rounded-3xl w-fit bg-base-100/50 border-primary/30 block lg:hidden">
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-4">
                        <li><a href="#company" class="nav-link p-4">Profile</a></li>
                        <li><a href="#learnings" class="nav-link p-4">Skills</a></li>
                        <li><a href="#sideq" class="nav-link p-4">Experience</a></li>
                        <li><a href="#projects" class="nav-link p-4">Project</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
