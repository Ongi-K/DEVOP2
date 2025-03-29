/*
This PostCSS configuration file integrates Tailwind CSS and Autoprefixer. It ensures that your CSS is processed to include vendor prefixes for cross-browser compatibility and that Tailwind's utility classes are properly generated during the build process.
*/

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
