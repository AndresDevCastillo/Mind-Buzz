import { defineStore } from "pinia";

interface Carrusel {
  url: string;
}

export const useCarruselStore = defineStore({
  id: "carruselStore",
  state: () => ({
    carruseles: [] as Carrusel[],
    carrusel: {} as Carrusel,
  }),
  persist: true,
  getters: {
    getCarrusels: (state) => state.carruseles,
    getCarrusel: (state) => state.carrusel,
  },

  actions: {
    async fetchImages() {
      const carrusel = await $fetch("/api/carrusel");
      console.log(carrusel);
      this.carruseles = carrusel;
    },
  },
});
