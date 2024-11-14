import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";

const MyPreset = definePreset(
  Aura /*  {
  semantic: {
    primary: {
      50: "{cyan.50}",
      100: "{cyan.100}",
      200: "{cyan.200}",
      300: "{cyan.300}",
      400: "{cyan.400}",
      500: "{cyan.500}",
      600: "{cyan.600}",
      700: "{cyan.700}",
      800: "{cyan.800}",
      900: "{cyan.900}",
      950: "{cyan.950}",
    },
  }, 
} */
);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["primeicons/primeicons.css"],
  primevue: {
    usePrimeVue: true,
    options: {
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: "light",
        },
      },
    },
  },
});