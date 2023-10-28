module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'ShortStack',
      secondary: 'Poppins',
      tertiary: 'Passionone',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#9d57b9 ',
        accent: '#330F66',

      },
      backgroundImage: {
       
      },
    },
  },
  plugins: [],
};
