<script setup>
const responsiveOptions = ref([
  {
    breakpoint: "1400px",
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

const carruselStore = useCarruselStore();

const { getCarrusel } = carruselStore;

imagenesCarrusel = getCarrusel();
</script>

<template>
  <Carousel
    :value="imagenesCarrusel"
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
              :src="slotProps.data.url"
              class="w-full aspect-square rounded"
            />
          </div>
        </div>
      </div>
    </template>
  </Carousel>
</template>
