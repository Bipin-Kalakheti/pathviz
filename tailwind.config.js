import { BiBorderRadius } from "react-icons/bi";
import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        visited: {
          "0%": {
            transform: "scale(0.3)",
            backgroundColor: "#9333eabf",
            BiBorderRadius: "100%",
          },
          "50%": {
            backgroundColor: "#4f46e5bf",
          },
          "75%": {
            transform: "scale(1.2)",
            backgroundColor: "#3b82f6bf",
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "22d3ee",
          },
        },
        path: {
          "0%": {
            transform: "scale(0.3)",
            backgroundColor: "#e11d48bf",
            BiBorderRadius: "100%",
          },
          "50%": {
            backgroundColor: "#ea580cbf",
          },
          "75%": {
            transform: "scale(1.2)",
            backgroundColor: "#fb923cbf",
          },
          "90%": {
            transform: "scale(0.8)",
            backgroundColor: "#fde68abf",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        wall: {
          "0%": { transform: "scale(0.7)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        visited: "visited 0.5s cubic-bezier(0,0,0.2,1) ",
        path: "path 1.5s cubic-bezier(0,0,0.2,1) ",
        wall: "wall 0.3s cubic-bezier(0.4,0,0.2,1) ",
      },
    },
  },
  plugins: [],
};
