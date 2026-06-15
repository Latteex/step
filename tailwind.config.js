/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Text
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-disable': 'var(--text-disable)',
        'text-brand': 'var(--text-brand)',
        'text-onblack': 'var(--text-onblack)',
        'text-white': 'var(--text-white)',
        'text-white-tsp': 'var(--text-white-tsp)',
        'theme-text-primary': 'var(--theme-text-primary)',
        'logo-color': 'var(--logo-color)',
        
        // Background
        'background-gray-main': 'var(--background-gray-main)',
        'background-white-main': 'var(--background-white-main)',
        'background-menu-white': 'var(--background-menu-white)',
        'background-tsp-menu-white': 'var(--background-tsp-menu-white)',
        'background-tsp-card-gray': 'var(--background-tsp-card-gray)',
        'background-nav': 'var(--background-nav)',
        'background-card': 'var(--background-card)',
        'background-mask': 'var(--background-mask)',
        'background-card-gray': 'var(--background-card-gray)',
        'background-preview-mask': 'var(--background-preview-mask)',
        
        // Border
        'border-main': 'var(--border-main)',
        'border-white': 'var(--border-white)',
        'border-btn-main': 'var(--border-btn-main)',
        'border-input-active': 'var(--border-input-active)',
        'border-light': 'var(--border-light)',
        'border-dark': 'var(--border-dark)',
        'border-primary': 'var(--border-primary)',
        
        // Icon
        'icon-primary': 'var(--icon-primary)',
        'icon-secondary': 'var(--icon-secondary)',
        'icon-tertiary': 'var(--icon-tertiary)',
        'icon-disable': 'var(--icon-disable)',
        'icon-brand': 'var(--icon-brand)',
        'icon-onblack': 'var(--icon-onblack)',
        'icon-white': 'var(--icon-white)',
        'icon-white-tsp': 'var(--icon-white-tsp)',
        
        // Function
        'function-error': 'var(--function-error)',
        'function-success': 'var(--function-success)',
        'function-warning': 'var(--function-warning)',
        'function-error-tsp': 'var(--function-error-tsp)',
        'function-warning-tsp': 'var(--function-warning-tsp)',
        
        // Fill
        'fill-blue': 'var(--fill-blue)',
        'fill-tsp-white-main': 'var(--fill-tsp-white-main)',
        'fill-tsp-white-dark': 'var(--fill-tsp-white-dark)',
        'fill-tsp-white-light': 'var(--fill-tsp-white-light)',
        'fill-tsp-gray-dark': 'var(--fill-tsp-gray-dark)',
        'fill-tsp-gray-main': 'var(--fill-tsp-gray-main)',
        'fill-input-chat': 'var(--fill-input-chat)',
        'fill-white': 'var(--fill-white)',
        'fill-black': 'var(--fill-black)',
        'fill-gray': 'var(--fill-gray)',
        
        // Button
        'button-primary-black': 'var(--Button-primary-black)',
        'button-primary-white': 'var(--Button-primary-white)',
        'button-primary-brand': 'var(--Button-primary-brand)',
        'button-primary-brand-disabled': 'var(--Button-primary-brand-disabled)',
        'button-secondary-brand': 'var(--Button-secondary-brand)',
        'button-secondary-error-border': 'var(--Button-secondary-error-border)',
        'button-secondary-error-fill': 'var(--Button-secondary-error-fill)',
        'button-secondary-main': 'var(--Button-secondary-main)',
        'button-secondary-gray': 'var(--Button-secondary-gray)',
        
        // Tab
        'tab-fill': 'var(--tab-fill)',
        'tab-active-black': 'var(--tab-active-black)',
        
        // Shadows
        'shadow-L': 'var(--shadow-L)',
        'shadow-M': 'var(--shadow-M)',
        'shadow-S': 'var(--shadow-S)',
        'shadow-XS': 'var(--shadow-XS)',
        'shadows-inner-0': 'var(--shadows-inner-0)',
        'shadows-inner-1': 'var(--shadows-inner-1)',
        'shadows-inner-2': 'var(--shadows-inner-2)',
        'shadows-drop-1': 'var(--shadows-drop-1)',
        'shadows-drop-2': 'var(--shadows-drop-2)',
        'shadows-drop-3': 'var(--shadows-drop-3)',
        'shadows-drop-4': 'var(--shadows-drop-4)',
        'shadows-highlight-1': 'var(--shadows-highlight-1)',
        'shadows-highlight-2': 'var(--shadows-highlight-2)',
        'shadows-danger-1': 'var(--shadows-danger-1)',
        'shadows-danger-2': 'var(--shadows-danger-2)',
        'shadows-card-border': 'var(--shadows-card-border)',
        'shadows-card-border-2': 'var(--shadows-card-border-2)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        system: ['SF Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'xs': '0 0 0 0 var(--shadow-XS)',
        'sm': '0 0 0 0 var(--shadow-S)',
        'md': '0 0 0 0 var(--shadow-M)',
        'lg': '0 0 0 0 var(--shadow-L)',
        'card': '0 0 0 0 var(--shadows-card-border)',
        'drop-1': '0 0 0 0 var(--shadows-drop-1)',
        'drop-2': '0 0 0 0 var(--shadows-drop-2)',
        'drop-3': '0 0 0 0 var(--shadows-drop-3)',
        'drop-4': '0 0 0 0 var(--shadows-drop-4)',
      },
    },
  },
  plugins: [],
}
