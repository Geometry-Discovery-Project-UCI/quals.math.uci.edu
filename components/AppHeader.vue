<template>
  <header
    class="bg-blue-700 shadow-md text-white px-3 py-3 flex flex-row items-center
  justify-center sm:justify-normal gap-3"
  >
    <div class="flex flex-row items-center gap-2">
      <div class="bg-blue-500 p-3 rounded-full shadow-md hidden sm:block">
        <img class="h-auto w-8" src="/logo.webp" alt="Quals Logo">
      </div>
      <NuxtLink to="/">
        <div
          class="bg-blue-500 py-2 px-4
      rounded-md text-sm font-bold hover:scale-105 transition shadow-md
      sm:text-xl"
        >
          UC Mathematics Qualifying Exams Home
        </div>
      </NuxtLink>
    </div>

    <div class="flex-1 flex flex-row items-center justify-end gap-2">
      <NuxtLink to="/about">
        <div class="sm:text-xl hover:text-blue-400">
          About
        </div>
      </NuxtLink>
      <NuxtLink to="/search" class="flex flex-row justify-end">
        <div class="p-2 h-full shadow-md rounded-md bg-blue-500 hover:scale-105 transition">
          <MagnifyingGlassIcon class="w-5 sm:w-6" />
        </div>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
</script>
