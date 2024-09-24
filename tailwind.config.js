/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        newprimary: '#376489',
        newsecondary: '#F1E1E4', // Tambahkan warna lain sesuai kebutuhan
        textGreyColor: '#738CA5',
        textPrimary: '#C1989F',
        themeBg: '#FAF5F0',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'mognolia': ['Magnolia Script', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },

  },
  plugins: [],
}

