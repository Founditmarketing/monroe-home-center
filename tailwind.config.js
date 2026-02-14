/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                oswald: ['Oswald', 'sans-serif'],
            },
            colors: {
                border: "hsl(var(--border))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
            },
            backgroundImage: {
                'carbon-pattern': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
            },
            animation: {
                'neon-pulse': 'neon-pulse 1.8s infinite ease-in-out',
                'float-hero': 'float-hero 8s infinite ease-in-out',
            },
            keyframes: {
                'neon-pulse': {
                    '0%, 100%': {
                        boxShadow: '0 0 20px rgba(239, 68, 68, 0.4), inset 0 0 10px rgba(239, 68, 68, 0.2)',
                        transform: 'scale(1)'
                    },
                    '50%': {
                        boxShadow: '0 0 45px rgba(239, 68, 68, 0.9), inset 0 0 20px rgba(239, 68, 68, 0.4)',
                        transform: 'scale(1.02)'
                    }
                },
                'float-hero': {
                    '0%, 100%': { transform: 'translateY(0) rotate(0)' },
                    '33%': { transform: 'translateY(-30px) rotate(2deg)' },
                    '66%': { transform: 'translateY(-15px) rotate(-1deg)' }
                }
            }
        },
    },
    plugins: [],
}
