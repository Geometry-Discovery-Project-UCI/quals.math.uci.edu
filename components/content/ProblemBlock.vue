<template>
  <AppCard class="bg-amber-50 w-full problem-block">
    <div class="text-red-500">
      <h3 :id="`problem-${number}`" class="my-1 text-problem problem-heading">
        Problem {{ number }}.
      </h3>
      <hr class="mt-1 mb-2 border-problem border rounded-full">
      <slot name="problem" />
    </div>
    <div v-if="$slots.proof || $slots.solution || $slots.solutions" class="text-problem">
      <h3 :id="`${$slots.proof ? 'proof' : 'solution'}-${number}`" class="my-1 text-problem problem-heading">
        {{ $slots.proof ? 'Proof.' : 'Solution.' }}
      </h3>
      <hr class="mt-1 mb-2 border-problem border rounded-full">
      <slot v-if="$slots.proof" name="proof" />
      <slot v-else-if="$slots.solution" name="solution" />
      <slot v-else name="solutions" />
    </div>
    <div v-if="$slots.remark" class=" text-cyan-700">
      <h3 :id="`remark-${number}`" class="my-1 text-problem problem-heading">
        Remark.
      </h3>
      <hr class="mt-1 mb-2 border-problem border rounded-full">
      <slot name="remark" />
    </div>
  </AppCard>
</template>

<script setup lang="ts">
defineProps<{
  number: number | string
}>()
</script>
