import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  plugins: [
    require('@tailwindcss/typography')
  ],
  theme: {
    fontFamily: {
      cartoonist: ['SF_Cartoonist_Hand']
    },
    extend: {
      colors: {
        problem: '#1a3b6e'
      }
    }
  },
  safelist: [{
    pattern: /(text)-(\w*)/
  }]
}
