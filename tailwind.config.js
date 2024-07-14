module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // This enables dark mode
  theme: {
    extend: {
      boxShadow: {
        'neu-raised':
          '5px 5px 10px rgba(0, 0, 0, 0.1) inset, -5px -5px 10px white inset',
        'neu-pressed': '5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px white',
        'neu-raised-dark':
          '5px 5px 10px rgba(0, 0, 0, 0.5) inset, -5px -5px 10px rgba(255, 255, 255, 0.05) inset',
        'neu-pressed-dark':
          '5px 5px 10px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(255, 255, 255, 0.05)',
        'theme-light': '2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px white',
        'theme-light-hover':
          '2px 2px 4px rgba(0, 0, 0, 0.1) inset, -2px -2px 4px white inset',
        'theme-dark':
          '2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(255, 255, 255, 0.05)',
        'theme-dark-hover':
          '2px 2px 4px rgba(0, 0, 0, 0.1) inset, -2px -2px 4px rgba(255, 255, 255, 0.05) inset'
      }
    }
  },
  plugins: []
}
