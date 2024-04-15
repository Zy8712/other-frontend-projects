/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chirp-theme-logo-blue' : '#3180f5',
        'chirp-theme-twitter-light-blue' : '#00ACEE',
        'chirp-theme-turquiose' : '#1f7898',
        'chirp-theme-beige' : '#fbf8f3',
        'chirp-theme-soft-blue' : '#d7f5f5',
        'chirp-theme-medium-orange' : '#ffad23',
        'chirp-theme-paragraph-grey' : '#676767',
        'chirp-theme-heading-black' : '#111111',
      },
      fontFamily: {
        'theme-inter': ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

