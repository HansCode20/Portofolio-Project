// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  preset: {
    // Gunakan opsi 'daisyui' untuk memuat DaisyUI tanpa mengganti konfigurasi bawaan
    theme: {
      extend: {
       
      },
    },
    plugins: [
      require('daisyui'),
    ],
  },
}
