/* eslint-disable no-undef */
/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "arial": ["Arial"]
      }
    }
  },
  plugins: [
    require("tailwind-scrollbar")
  ]
};
/* eslint-enable no-undef */
