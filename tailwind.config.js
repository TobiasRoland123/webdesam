/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      ubuntu: ["ubuntu", "sans-serif"],
      "Source Sans 3": ["Source Sans 3", "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      colors: {
        col: {
          primary: "#5C7773",
          secondary: "#F9FBF9",
          accent: "#8AC1C6",
          // Add more custom colors as needed
        },
      },
    },
  },
  plugins: [],
};
