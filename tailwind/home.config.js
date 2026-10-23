// Reemplaza al CDN de Tailwind en index.html. Regenerar tras cambiar clases (ver tailwind/README.md).
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        ink: '#111214',
        night: '#171718',
        wine: '#7d2733',
        brass: '#c89b55',
        paper: '#f6f0e7',
        sage: '#7d8a6f'
      },
      boxShadow: {
        album: '0 28px 70px rgba(17, 18, 20, 0.24)',
        glow: '0 20px 60px rgba(200, 155, 85, 0.22)'
      }
    }
  }
};
