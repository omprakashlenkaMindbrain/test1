module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)', // e.g., #4F46E5 (indigo-600)
        secondary: 'var(--secondary)', // e.g., #EC4899 (pink-500)
        accent: 'var(--accent, #10B981)', // Added for additional flair (e.g., emerald-500)
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
        spinSlow: 'spin 5s linear infinite', // Already included for slow rotating arrow
        float: 'float 3s ease-in-out infinite', // Added for floating icons
        pulseGlow: 'pulseGlow 2s ease-in-out infinite', // Added for glowing effect
        fadeIn: 'fadeIn 1s ease-out', // Added for fade-in animations
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.4)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      // Added custom utilities for enhanced styling
      boxShadow: {
        'glow': '0 0 15px rgba(79, 70, 229, 0.5)', // Matches primary color
        'glow-secondary': '0 0 15px rgba(236, 72, 153, 0.5)', // Matches secondary color
      },
      backdropBlur: {
        xs: '2px', // For subtle blur effects on floating icons
      },
      transitionProperty: {
        'blur': 'filter', // For smooth blur transitions
        'scale': 'transform', // For smooth scaling
      },
      // Responsive font sizes for better scaling
      fontSize: {
        '2.5xl': '1.75rem', // For subtitle on medium screens
        '6.5xl': '4rem', // For title on large screens
      },
    },
  },
  plugins: [
    // Add plugin for custom utilities if needed
    function ({ addUtilities }) {
      addUtilities({
        '.animate-delay-200': {
          'animation-delay': '200ms',
        },
        '.animate-delay-400': {
          'animation-delay': '400ms',
        },
        '.animate-delay-600': {
          'animation-delay': '600ms',
        },
      });
    },
  ],
};