/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {
        slide: {
          "100%": {
            top: "-360px",
          },
        },

        typing: {
          "40%, 60%": {
            left: "100%",
          },
          "100%": {
            left: "0%",
          },
        },
        blink: {
          "50%": {
            opacity: "0",
          },
        },
      },

      animation: {
        slide_anim: "slide 12s steps(12) infinite",
        typing_anim: "typing 4s infinite",
      },
    },
  },
  plugins: [],
}
