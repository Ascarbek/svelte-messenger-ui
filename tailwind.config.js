const production = process.env.NODE_ENV === 'production'

module.exports = {
  future: {
    // purgeLayersByDefault: true,
    // removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: production,
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
