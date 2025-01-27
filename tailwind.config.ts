import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          100: '#FFE1FF',
          500: '#A594F9',
          900: '#071952',
        }, 
        button: {
          100: '#C4D9FF',
          500: '#A594F9',
          900: '#5C2FC2',
        },
        hover: {
          100: '#FFE1FF',
          500: '#C4D9FF',
          900: '#5C2FC2',
        },
      },
      fontFamily: {
        'logo': ['Righteous', 'sans-serif'],
      },
      keyframes: {
        typing: {
          from: {
            width: '0',
          }
        },
        slide: {
          '100%': {
            top: '-360px',
          }
        },
        cursor: {
          '50%': {
            'border-color': 'transparent',
          }
        }
      },
    },
  },
  plugins: [ ],
} satisfies Config;
