module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        gold: '#FF9A13',
        black: '#000000',
        primaryBlue: '#020B5E',
        secondaryBlue: '#000C7C',
        grayBackground: '#f4f4f4',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
