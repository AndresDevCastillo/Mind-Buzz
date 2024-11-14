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
  persist: {
    storage: persistedState.localStorage,
  },
  getters: {
    getCarrusel: (state) => state.carruseles,
    getCarrusel: (state) => state.carrusel,
  },

  actions: {
    async fetchImages() {
      const carrusel = await $fetch("/api/carrusel");
      this.carruseles = carrusel;
    },
  },
});
