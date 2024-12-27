module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS/TS/React files in the `src` directory
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1920px', // Custom breakpoint
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'], // Add Lato as a font-family option
      },
    },
  },
  plugins: [],
};
