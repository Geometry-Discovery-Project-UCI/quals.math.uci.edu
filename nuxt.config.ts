// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.webp' }],
      titleTemplate: '%s | UC Math Qualifying Exams'
    }
  },
  css: ['katex/dist/katex.min.css'],
  content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: [['rehype-katex', {
        macros: {
          '\\eps': '\\varepsilon'
        }
      }]]
    }
  }
})
