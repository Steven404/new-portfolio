/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './pageParts/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  screens: {
    mobile: '480px',
    // => @media (min-width: 480px) { ... }

    tablet: '768px',
    // => @media (min-width: 768px) { ... }

    desktop: '1024px',
    // => @media (min-width: 1024px) { ... }
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'clean-office': "url('/img/bg-04.jpg')",
        'white-mountains': "url('/img/bg-05.jpg')",
        'white-desk': "url('/img/bg-06.jpg')",
        'clean-desk': "url('/img/bg-07.jpg')",
        mac: "url('/img/bg-08.jpg')",
        'under-construction': "url('/under_construction.svg')",
      },
      colors: {
        'custom-black': '#181818',
        'custom-blue': '#176B87',
        'custom-teal': '#64CCC5',
        'custom-mint': '#DAFFFB',
      },
      fontFamily: {
        'source-sans3': ["'Source Sans 3'", 'sans-serif'],
        barlow: ["'Barlow'", 'sans-serif'],
      },
    },
    backdropBlur: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      xl: '16px',
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      'min-lg': { min: '1023px' },

      betterhover: { raw: '(hover: hover)' },
    },
  },
  plugins: [],
}
