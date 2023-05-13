<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <AppCard
      v-for="entry in postMap"
      :key="entry[0]"
      class="bg-white"
    >
      <h2 class="capitalize font-bold text-3xl">
        {{ entry[0].replaceAll('-', ' ') }}
      </h2>
      <ul>
        <li v-for="(item, index) in entry[1].sort(sortPosts)" :key="`${entry[0]}-${item.title}`">
          <span class="w-6 inline-block">{{ index + 1 }}.</span>
          <NuxtLink
            :to="item.path"
            class="capitalize hover:text-blue-400 transition text-xl"
            :class="{
              'text-red-400': item.draft
            }"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
import { compareQuarters } from '~/utils'

const posts = await queryContent('/posts').only(['_path', '_dir', 'draft']).find()

// Map<type, [{title, path}]>
interface Post {
  title: string
  path: string
  draft: boolean
}

const postMap = new Map<string, Post[]>()

for (const post of posts) {
  if (!postMap.has(post._dir)) {
    postMap.set(post._dir, [])
  }

  postMap.get(post._dir)?.push({
    title: post._path.split('/').at(-1).replaceAll('-', ' '),
    path: post._path,
    draft: post.draft
  })
}

function sortPosts (a: Post, b: Post) {
  const aPath = a.path.split('/').at(-1) as string
  const bPath = b.path.split('/').at(-1) as string

  const [aYear, aQuarter] = aPath.split('-')
  const [bYear, bQuarter] = bPath.split('-')

  if (aYear !== bYear) {
    return parseInt(bYear) - parseInt(aYear)
  }

  return compareQuarters(aQuarter, bQuarter)
}

useHead({
  title: 'Home'
})
</script>
