module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        420: "27rem",
        535: "535px",
      },
      fontSize: {
        "13px": [
          "13px",
          {
            lineHeight: "18px",
          },
        ],
      },
      colors: {
        darkbg: "#100D12",
        graytext: "#84878E",
        graybg: "#282722",
        yellow: "#FFEC62",
        link: "#1D4E86",
        darkblue: "#1D4E86",
        lightgray: "#FCFCFC",
        success: "#27AE60",
        buttonbg: "#8344ff",
      },
      screens: {
        "3xl": "2200px",
      },
    },
    fontFamily: {
      inter: ["inter", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    ``,
  ],
};
