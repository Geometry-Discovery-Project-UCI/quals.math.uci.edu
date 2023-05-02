// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.webp' }],
      titleTemplate: '%s | UC Math Qualifying Exams'
    }
  },
  content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: [
        ['rehype-mathjax', {
          tex: {
            macros: {
              eps: '{\\varepsilon}',
              Q: '{\\mathbb{Q}}',
              R: '{\\mathbb{R}}',
              C: '{\\mathbb{C}}',
              N: '{\\mathbb{N}}'
            }
          }
        }]
      ]
    }
  },
  tailwindcss: {
    viewer: false
  }
})
