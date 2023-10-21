/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // aspectRatio: {
      //   // auto: 'auto',
      //   // square: '1 / 1',
      //   // video: '16 / 9',
      //   '4/6': '4 / 6',
      // },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EA6704",

          secondary: "#AC9275",

          accent: "#5A6D31",

          neutral: "#DEE8D5",

          "base-100": "#ffffff",

          info: "#0891b2",

          success: "#4d7c0f",

          warning: "#854d0e",

          error: "#7f1d1d",
        },
      },
    ],
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
};
