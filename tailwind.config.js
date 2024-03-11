/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "default": "#F2932F",
        "default-gray": "#737373",
        "dark": "#030637",
        "blog": "#5a5a5a",
        "note": "#041442",
        "note-bg": "#FDF5FA"
      },
      dropShadow: {
        "default": "2px 0 3px #737373",
      },
      letterSpacing: {
        "long": "1.5rem",
      },
      screens: {
        "md-lg": "912px",
        "min-sm": "600px",
        "min-end": "500px"
      },
      boxShadow: {
        "default-shadow": "0 0 20px 10px #F8F8F8"
      }
      
      
    },
  },
  plugins: [],
};
