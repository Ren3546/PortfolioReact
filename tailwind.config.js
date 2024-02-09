/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.jsx",
],
  theme: {
    extend: {
      colors: {
        "blue-500":"#007991",
        "gray-800":"#222E50",
        "gray-500":"#439A86",
        "gray-200":"#E9D985",
        "blue-700":"#BCD8C1",
        "blue-600":"#BCD8C1",
      }
    },
  },
  plugins: [],
}

