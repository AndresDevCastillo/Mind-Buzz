<script setup>
definePageMeta({
  layout: "custom",
});

const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const images = ref([
  "/img/a.jpeg",
  "/img/b.jpeg",
  "/img/c.jpeg",
  "/img/d.jpeg",
]);


const tweetsStore = useTweetsStore()

tweetsStore.getTweetsApi();

const tweets = ref(tweetsStore.getTweets);

provide('updateTweets', () => {
  tweets.value = tweetsStore.getTweets;
  console.log(tweets.value)
})

</script>
<template>
  <div class="index">
    <div class="containerCarrusel flex justify-center">
      <Carousel
        :value="images"
        :numVisible="4"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
        class="w-5/6"
      >
        <template #item="slotProps">
          <div
            class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4"
          >
            <div class="mb-4">
              <div class="relative mx-auto">
                <img
                  :src="slotProps.data"
                  class="w-full aspect-square rounded"
                />
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
    <div class="flex justify-center">
     <Cajacomentario class="w-5/6"/>
    </div>
    <div class="flex justify-center">
     <Comentariopublicado :tweets="tweets" class="w-5/6"/>
    </div>
  </div>
</template>
