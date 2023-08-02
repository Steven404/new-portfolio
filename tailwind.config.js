/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pageParts/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  screens: {
    'mobile': '480px',
    // => @media (min-width: 480px) { ... }

    'tablet': '768px',
    // => @media (min-width: 768px) { ... }

    'desktop': '1024px',
    // => @media (min-width: 1024px) { ... }
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'source-sans3': ["'Source Sans 3'", 'sans-serif'],
      }
    },
  },
  plugins: [],
};
