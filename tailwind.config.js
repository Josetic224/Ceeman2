/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 300ms ease-out",
      },

      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        grotesque: ['"Darker Grotesque"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        gilroy: ["Gilroy-Bold", "sans-serif"],
      },
      underlineOffset: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
      },
      boxShadow: {
        custom:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "custom-colored":
          "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".underline-offset-1": {
          "text-underline-offset": "1px",
        },
        ".underline-offset-2": {
          "text-underline-offset": "2px",
        },
        ".underline-offset-3": {
          "text-underline-offset": "3px",
        },
        ".underline-offset-4": {
          "text-underline-offset": "4px",
        },
        ".underline-offset-5": {
          "text-underline-offset": "5px",
        },
        ".underline-offset-6": {
          "text-underline-offset": "6px",
        },
      });
    },
  ],
};
