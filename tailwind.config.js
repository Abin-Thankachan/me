module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-roboto)",
      },
      colors: {
        nextblue: "#0070F3",
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
      },
      animation: {
        typing: "typing 3s steps(30, end) forwards",
        blink: "blink 0.7s step-end infinite",
        "wave-once": "wave 2s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
