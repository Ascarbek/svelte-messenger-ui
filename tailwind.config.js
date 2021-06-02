const production = !process.env.ROLLUP_WATCH;

module.exports = {
  future: {
    // purgeLayersByDefault: true,
    // removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: false,
    content: ['./public/index.html', './src/**/*.svelte'],
    options: {
      defaultExtractor: content => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
