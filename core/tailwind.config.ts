import type { Config } from 'tailwindcss';
import theme from './theme/theme';
const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
				fade: 'fade-in .25s',
			},
			keyframes: {
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
			},
    }
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), require('daisyui'), addVariablesForColors],
  daisyui: {
    themes: [{ theme }]
  },
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars
  });
}

export default config;
