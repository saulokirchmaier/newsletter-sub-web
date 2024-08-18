import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('../img/background.png')",
        union: "url('../img/union.png')",
      },
      colors: {
        main: '#E30161',
        'input-bg': '#FFFFFF33',
        'placeholder-input': '#FFFFFF99',
      },
    },
  },
  plugins: [],
}
export default config
