<template>
  <AppCard class="bg-amber-50 w-full">
    <div class="text-red-500">
      <h3 :id="`problem-${number}`" class="my-1 text-problem">
        Problem {{ number }}.
      </h3>
      <hr class="mt-1 mb-2 border-problem border rounded-full">
      <slot name="problem" />
    </div>
    <div class="text-problem">
      <h3 :id="`proof-${number}`" class="my-1 text-problem">
        Proof.
      </h3>
      <hr class="mt-1 mb-2 border-problem border rounded-full">
      <slot name="proof" />
    </div>
    <div v-if="$slots.remark" class="text-problem text-cyan-700">
      <h3 :id="`remark-${number}`" class="my-1 text-problem">
        Remark.
      </h3>
      <hr class="mt-1 mb-2 border-problem border rounded-full">
      <slot name="remark" />
    </div>
  </AppCard>
</template>

<script setup lang="ts">
defineProps<{
  number: number
}>()
</script>
