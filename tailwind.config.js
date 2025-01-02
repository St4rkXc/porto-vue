/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#25252B",
                secondary: "#636376",
                text: "#25252B",
                success: "#75AD42",
                succesbg: "#DDEBD0",
                processbg: "#FFF4CC",
                process: "#E5B300",
            },
            animation:{
                'spin-slow': 'spin 3s linear infinite',
                'spin-slow-reverse': 'spin 3s linear infinite reverse',
                'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
        fontSize: {
            xs: "14px",
            base: "16px",
            lg: "20px",
            xl: "24px",
            "2xl": "32px",
            "3xl": "64px",
            "4xl": "96px",
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#25252B",
                    secondary: "#636376",
                    "base-100": "#EFEFEF" /* background image */,
                },
            },
            "dark",
        ],
    },
    plugins: [require("daisyui")],
};
