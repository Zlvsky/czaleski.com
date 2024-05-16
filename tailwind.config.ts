import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      fontSize: {
        '20': ['1.25rem', '1.875rem'],
        '40': ['2.5rem', '3.75rem']
      },
      colors: {
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        dark: '#1c1d1f',
        gray2: '#606060',
        grayE8: '#E8E8E8',
        gray7B: '#7B7B7B',
        dark26: '#262626',
        dark48: '#484848',
        grayText1: '#555',
        grayText2: '#a8a8a8',
        textHover: '#21201c',
        green: '#2CA56B'
      },
      boxShadow: {
        project:
          '0px 8px 16px 0px rgba(3, 7, 18, 0.08), 0px 0px 0px 1px rgba(3, 7, 18, 0.08)'
      }
    }
  },
  plugins: []
}
export default config
