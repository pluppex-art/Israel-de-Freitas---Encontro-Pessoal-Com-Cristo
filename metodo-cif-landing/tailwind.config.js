/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './{components,context,hooks,lib}/**/*.{ts,tsx}', './App.tsx'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      colors: {
        asphalt: '#1B2430',
        graphite: '#2E3A46',
        amber: '#D98E29',
        dawn: '#F4EFE6',
        offWhite: '#FBF9F5',
      },
    },
  },
  plugins: [],
};
