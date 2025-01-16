/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Menlo", "Monaco", "Consolas", "Liberation Mono", "monospace"],
      },
      boxShadow: {
        sharp: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
        "sharp-sm": "2px 2px 0px 0px rgba(0, 0, 0, 1)",
        "sharp-lg": "6px 6px 0px 0px rgba(0, 0, 0, 1)",
        "sharp-primary": "4px 4px 0px 0px var(--primary-color)",
        "sharp-success": "4px 4px 0px 0px var(--success-color)",
      },
    },
  },
  plugins: [],
};
