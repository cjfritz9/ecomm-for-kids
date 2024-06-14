const lightTheme = require('daisyui/src/theming/themes')['light'];

const theme = {
  ...lightTheme,
  primary: '#1B9CA4',
  'primary-content': '#393939',
  secondary: '#FE3448',
  'secondary-content': '#FFFFFF',
  accent: '#E98476',
  neutral: '#2B3440',
  'neutral-content': '#D7DDE4',
  'base-100': '#FFFFFF',
  'base-200': '#F9F0E5',
  'base-300': '#E5E6E6',
  'base-content': '#393939',

  '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
  '--rounded-btn': '100px', // border radius rounded-btn utility class, used in buttons and similar element
  '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
  '--animation-btn': '0.25s', // duration of animation when you click on button
  '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
  '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
  '--border-btn': '1px', // border width of buttons
  '--tab-border': '1px', // border width of tabs
  '--tab-radius': '0.5rem' // border radius of tabs
};

export default theme;
