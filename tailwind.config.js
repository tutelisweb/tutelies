/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        tutelis: {
          navy: "#0B1A3A",
          violet: "#3B3FD8",
          teal: "#2EE6B6",
          cloud: "#F5F7FA",
          slate: "#8A94A6",
          ink: "#111827"
        }
      },
      fontFamily: {
        heading: ["Oswald", "Arial Narrow", "sans-serif"],
        body: ["Inter", "Arial", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
};
