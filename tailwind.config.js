/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bosch:{
          grau1: '#D0D4D8',
          grau2: '#B2B9C0',
          grau3: '#71767C',
          grau4: '#383B3E',
          rot1: '#FF2124',
          rot2: '#D50005',
          rot3: '#A80003',
          blau1: '#0096E8',
          blau2: '#006EAD',
          blau3: '#005587',
          grun1: '#5EBD82',
          grun2: '#219557',
          grun3: '#007A42'
        }
      }
    },
  },
  plugins: [],
}