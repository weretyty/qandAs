/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0d1117",
        card: "#24292f",
        card2: "#1f2328",
        card3: "#222831",
        text_color: "#fff",
        text_color2: "#f5f5f5",
        num_text_color: "#e6edf3",
        text_green: "#3fb950",
        text_blue: "#0550ae",
        text_purple: "#6639ba",
        text_cyan: "#0c959f",
        text_transparent: "#8b949e",
        
      },
    },
  },
  plugins: [],
};
