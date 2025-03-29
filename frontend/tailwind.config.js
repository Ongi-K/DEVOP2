/*
This Tailwind CSS configuration file defines which files Tailwind should scan for class names and allows you to extend the default theme or add plugins. It centralizes all styling customizations and ensures that your Vue components have access to the utility-first classes provided by Tailwind.
*/

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
