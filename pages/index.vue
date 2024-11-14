<script setup>
definePageMeta({
  layout: "custom",
});

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

const images = ref([
  "/img/a.jpeg",
  "/img/b.jpeg",
  "/img/c.jpeg",
  "/img/d.jpeg",
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
      <Card class="w-5/6">
        <template #title>
          <div class="flex">
            <Avatar
              image="/img/daggi.jpg"
              class="mr-2"
              shape="circle"
              alt="User avatar"
            />
            <span class="font-bold">Fujoshi 69 UwU</span>
          </div>
        </template>
        <template #content>
          <Editor editorStyle="height: 140px">
            <template v-slot:toolbar>
              <span class="ql-formats">
                <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                <button
                  v-tooltip.bottom="'Underline'"
                  class="ql-underline"
                ></button>
              </span>
            </template>
          </Editor>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <Button
              label="Cancel"
              severity="secondary"
              outlined
              class="w-full"
            />
            <Button label="Post" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
