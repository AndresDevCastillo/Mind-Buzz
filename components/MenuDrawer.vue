<script setup lang="ts">
import { ref } from "vue";

// Estado reactivo
const visible = ref(false);

// Datos del menú
const items = ref([
  { separator: true },
  {
    label: "Menú",
    items: [
      {
        label: "Home",
        icon: "pi pi-home",
        route: "/",
      },
      {
        label: "New Post",
        icon: "pi pi-plus",
        route: "/post/new",
      },
      {
        label: "Search",
        route: "/post/search",
        icon: "pi pi-search",
      },
    ],
  },
  {
    label: "Profile",
    items: [
      { label: "Account", icon: "pi pi-user" , route: "/account"},
      { label: "Logout", icon: "pi pi-sign-out", route: "/login" },
    ],
  },
  { separator: true },
]);
</script>

<template>
  <!-- Botón de activación del drawer -->
  <Button icon="pi pi-bars" @click="visible = true" aria-label="Open menu" />

  <!-- Drawer con el menú -->
  <div class="card flex justify-center">
    <Drawer v-model:visible="visible">
      <!-- Contenedor personalizado del Drawer -->
      <template #container="{ closeCallback }">
        <div class="flex flex-col h-full">
          <!-- Menú de navegación -->
          <Menu :model="items" class="w-full">
            <!-- Cabecera del menú -->
            <template #start>
              <span class="inline-flex items-center gap-1 px-2 py-2">
                <span class="text-xl font-semibold">
                  Mind <span class="text-emerald-400">& Buzz</span>
                </span>
              </span>
            </template>

            <!-- Submenú (label de la sección) -->
            <template #submenulabel="{ item }">
              <span class="text-primary font-bold">{{ item.label }}</span>
            </template>

            <!-- Ítem del menú -->
            <template #item="{ item, props }">
              <NuxtLink :to="item?.route"
                ><a
                  v-ripple
                  class="flex items-center p-2 hover:bg-emerald-200 transition-colors duration-200 rounded-md"
                  v-bind="props.action"
                  aria-label="Menu item {{ item.label }}"
                >
                  <!-- Icono del ítem -->
                  <span :class="item.icon" class="mr-2"></span>

                  <!-- Texto del ítem -->
                  <span>{{ item.label }}</span>

                  <!-- Atajo de teclado (si existe) -->
                  <span
                    v-if="item.shortcut"
                    class="ml-auto border border-surface rounded bg-emphasis text-muted text-xs p-1"
                  >
                    {{ item.shortcut }}
                  </span>

                  <!-- Badge (si existe) -->
                  <Badge
                    v-if="item.badge"
                    class="ml-auto"
                    :value="item.badge"
                  /> </a
              ></NuxtLink>
            </template>

            <!-- Pie del menú (información del usuario) -->
            <template #end>
              <button
                v-ripple
                class="relative overflow-hidden w-full flex items-start p-2 pl-4 hover:bg-emerald-200 rounded-none cursor-pointer transition-colors duration-200"
                aria-label="User profile"
              >
                <Avatar
                  image="/img/daggi.jpg"
                  class="mr-2"
                  shape="circle"
                  alt="User avatar"
                />
                <div class="flex flex-col items-start">
                  <span class="font-bold">Fujoshi 69 UwU</span>
                  <span class="text-sm">Anonimo</span>
                </div>
              </button>
            </template>
          </Menu>
        </div>
      </template>
    </Drawer>
  </div>
</template>
