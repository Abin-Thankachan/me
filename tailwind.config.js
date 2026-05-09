/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter), sans-serif",
        serif: "var(--font-cormorant), serif",
        cinzel: "var(--font-cinzel), serif",
      },
      colors: {
        parchment: {
          DEFAULT: "#F5E6D3",
          light: "#FFF4E6",
          dark: "#E3C29F",
        },
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#B8860B",
          light: "#F3E5AB",
        },
        burgundy: {
          DEFAULT: "#800020",
          light: "#9E1B32",
        },
        emerald: {
          DEFAULT: "#013220",
          light: "#024B30",
        },
        matte: {
          black: "#0A0A0A",
          gray: "#1A1A1A",
          light: "#2A2A2A",
        },
      },
      backgroundImage: {
        'renaissance-gradient': 'linear-gradient(to bottom, #0A0A0A, #1A1A1A)',
        'gold-gradient': 'linear-gradient(45deg, #B8860B, #D4AF37, #F3E5AB)',
      },
      keyframes: {
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        'dust-float': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: 0 },
          '20%': { opacity: 0.8 },
          '80%': { opacity: 0.8 },
          '100%': { transform: 'translateY(-100px) translateX(20px)', opacity: 0 },
        },
        wave: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "10%": { transform: "rotate(14deg) scale(1.1)" },
          "20%": { transform: "rotate(-8deg) scale(0.95)" },
          "30%": { transform: "rotate(14deg) scale(1.05)" },
          "40%": { transform: "rotate(-4deg) scale(1)" },
          "50%": { transform: "rotate(10deg) scale(1.05)" },
          "60%": { transform: "rotate(0deg) scale(1)" },
          "100%": { transform: "rotate(0deg) scale(1)" },
        },
        glow: {
          "0%, 100%": { filter: "drop-shadow(0 0 5px rgba(212, 175, 55, 0.5))" },
          "50%": { filter: "drop-shadow(0 0 15px rgba(212, 175, 55, 0.8))" },
        }
      },
      animation: {
        typing: "typing 3s steps(30, end) forwards",
        blink: "blink 0.7s step-end infinite",
        "wave-once": "wave 2s ease-in-out 1",
        float: "float 6s ease-in-out infinite",
        "dust-float": "dust-float 10s linear infinite",
        glow: "glow 3s ease-in-out infinite",
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(212, 175, 55, 0.2)',
        'gold-glow-hover': '0 0 25px rgba(212, 175, 55, 0.4)',
        'inner-gold': 'inset 0 0 20px rgba(212, 175, 55, 0.1)',
      }
    },
  },
  plugins: [],
};