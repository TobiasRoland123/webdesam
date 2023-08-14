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
    screens: {
      sm: "850px",
      // => @media (min-width: 640px) { ... }

      md: "950px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
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
