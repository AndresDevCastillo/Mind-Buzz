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


const tweets = ref([
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    username: 'Fujoshi 69 UwU',
    handle: 'juan_perez',
    time: '2h',
    content: '¡Este es mi primer tweet! 🎉',
    retweets: 5,
    likes: 20,
    replies: [
      {
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        username: 'Ana Gómez',
        handle: 'ana_gomez',
        time: '1h',
        content: '¡Felicidades por tu primer tweet! 😊',
        retweets: 2,
        likes: 10,
        replies: [
          {
            avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
            username: 'Carlos Ruiz',
            handle: 'carlos_ruiz',
            time: '30m',
            content: '¡Estoy de acuerdo con Ana! 👍',
            retweets: 1,
            likes: 5,
          },
        ],
      },
      {
        avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
        username: 'Luis Fernández',
        handle: 'luis_fernandez',
        time: '45m',
        content: '¡Bienvenido a Twitter, Juan! 🎉',
        retweets: 3,
        likes: 8,
      },
    ],
  },
]);
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
