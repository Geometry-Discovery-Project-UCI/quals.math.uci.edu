<template>
  <footer class="bg-blue-700 flex flex-row items-center gap-4 text-white p-4 shadow-md text-base">
    <div>Other Links:</div>
    <div class="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
      <div v-for="item in links" :key="item.title" class="flex items-center justify-center flex-wrap">
        <NuxtLink :to="item.url" class="hover:text-blue-400 transition">
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [{
  title: 'Geometry Discovery Project',
  url: 'https://gdp.math.uci.edu'
},
{
  title: 'UC Irvine MATH CEO',
  url: 'https://sites.ps.uci.edu/mathceo/'
},
{
  title: 'Math Pre-requisite Review Materials',
  url: 'https://www.math.uci.edu/~prerequisite-videos/'
}
]
</script>
