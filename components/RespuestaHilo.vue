<template>
    <div class="mb-4">
      <div class="flex items-start">
        <!-- Avatar -->
        <img
          :src="reply.avatar"
          alt="Avatar"
          class="w-10 h-10 rounded-full mr-4"
        />
        <div class="flex-1">
          <!-- Username and handle -->
          <div class="flex items-center justify-between">
            <div>
              <span class="font-bold">{{ reply.username }}</span>
              <span class="text-gray-500">@{{ reply.handle }}</span>
            </div>
            <span class="text-gray-500 text-sm">{{ reply.time }}</span>
          </div>
          <!-- Reply content -->
          <p class="mt-2 text-gray-800">
            {{ reply.content }}
          </p>
          <!-- Like and retweet icons -->
          <div class="flex items-center mt-3 text-gray-500 space-x-4">
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
              <span>{{ reply.retweets }}</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"></path></svg>
              <span>{{ reply.likes }}</span>
            </div>
          </div>
          <!-- Respuestas anidadas (si las hay) -->
          <div v-if="reply.replies" class="ml-12 mt-4">
            <!-- <RespuestaHilo for="(nestedReply, index) in reply.replies" :key="index" :reply="nestedReply" />  -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    reply: {
      type: Object,
      required: true,
    },
  });
  </script>
  