<template>
  <AppCard class="bg-white flex flex-col gap-4">
    <div class="flex flex-row bg-gray-100 rounded-md shadow-md text-2xl items-center">
      <div class="flex flex-row p-2 gap-2 w-full">
        <MagnifyingGlassIcon class="w-8" />
        <input
          v-model="keywordInput"
          type="search"
          class="placeholder-gray-500 bg-transparent focus:outline-none w-full"
          placeholder="Search..."
          @keydown.enter="navigateTo(`/search?s=${keywordInput}`)"
        >
      </div>
      <NuxtLink
        :to="`/search?s=${keywordInput}`"
        class="bg-blue-300 p-2 rounded-r-md select-none"
      >
        Search
      </NuxtLink>
    </div>
    <div v-if="route.query.s">
      <div v-if="posts && posts.length > 0" class="flex flex-col items-center gap-4">
        <NuxtLink v-for="post in posts" :key="post.title" :to="post._path" class="w-full">
          <AppCard class="bg-gray-200 hover:bg-gray-100 transition">
            <h1 class="text-lg">
              {{ post.title }}
            </h1>
            <p class="text-gray-500">
              ... {{ post.plainText.substr(120, 360) }}...
            </p>
            <p class="text-gray-700">
              {{ post.withMath }}
            </p>
          </AppCard>
        </NuxtLink>
      </div>
      <div v-else>
        <AppCard class="bg-gray-200">
          No Results Found
        </AppCard>
      </div>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { compareQuarters } from '~/utils'

interface Query {
  s?: string
}

const posts = ref<ParsedContent[] | null>(null)
const keywordInput = ref<string>('')

const route = useRoute()

async function updatePosts (query: Query) {
  const keyword = query.s
  if (keyword && keyword !== '') {
    const regex = keyword.trim().replaceAll(/\s+/g, '|')
    const response = await queryContent('/posts').only(['title', 'plainText', '_path', 'withMath']).where({
      $or: [
        { title: { $regex: `/${regex}/ig` } },
        { plainText: { $regex: `/${regex}/ig` } }
      ]
    }).find() as ParsedContent[]

    response.sort((a, b) => {
      const aYear = a.title?.split(' ')[0] || ''
      const bYear = b.title?.split(' ')[0] || ''

      if (aYear !== bYear) {
        return bYear.localeCompare(aYear)
      }

      const aQuarter = a.title?.split(' ')[1] || ''
      const bQuarter = b.title?.split(' ')[1] || ''

      return compareQuarters(aQuarter, bQuarter)
    })

    posts.value = response
  }
}

updatePosts(route.query)

watch(() => route.query, async (newQuery) => {
  await updatePosts(newQuery)
})

useHead({
  title: 'Search'
})
</script>
