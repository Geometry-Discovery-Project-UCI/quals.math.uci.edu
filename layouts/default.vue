<template>
  <div class="flex flex-col items-center font-cartoonist">
    <AppHeader class="sticky top-0 w-full z-50 opacity-90" />
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right,#4ade80 0%,#a3e635 50%,#facc15 100%)"
      :throttle="0"
    />
    <main class="p-4 w-full bg-gray-100">
      <slot />
    </main>
    <AppFooter class="w-full opacity-90" />
  </div>
</template>
