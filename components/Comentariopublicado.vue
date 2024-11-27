<template>
  <div class=" w-5/6 max-w mx-auto p-4 bg-white rounded-lg shadow-md my-5">
    <div v-for="(tweet, index) in tweets" :key="index" class="mb-4 border-b pb-4 last:border-none">
      <Hilo :tweet="tweet" />
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  },
});
</script>
