<script setup>
// Mover la definición de los elementos a un hook reutilizable en caso de que crezca la lógica
const itemsBar = ref([
  {
    label: "Publicaciones",
    icon: "pi pi-search",
    badge: 3,
    items: [
      {
        label: "Seguidos",
        icon: "pi pi-bolt",
        shortcut: "⌘+S",
      },
      {
        label: "Descubrir",
        icon: "pi pi-server",
        shortcut: "⌘+B",
      },
      {
        separator: true,
      },
      {
        label: "Tendencia",
        icon: "pi pi-pencil",
        shortcut: "⌘+U",
      },
    ],
  },
]);
</script>

<template>
  <Menubar :model="itemsBar">
    <!-- Icono del menú (Drawer) al inicio -->
    <template #start>
      <div class="flex items-center gap-3">
        <MenuDrawer />
        <NuxtLink to="/">
          <h1>Mind & Buzz</h1>
        </NuxtLink>
      </div>
    </template>

    <!-- Item de cada opción del menú -->
    <template #item="{ item, props, hasSubmenu, root }">
      <a
        v-ripple
        class="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md"
        v-bind="props.action"
        role="menuitem"
        aria-label="Menu Item"
      >
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>

        <!-- Mostrar badge si existe -->
        <Badge
          v-if="item.badge"
          :class="{ 'ml-auto': !root, 'ml-2': root }"
          :value="item.badge"
        />

        <!-- Mostrar atajo de teclado si existe -->
        <span
          v-if="item.shortcut"
          class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs px-1"
        >
          {{ item.shortcut }}
        </span>

        <!-- Icono de submenu si lo hay -->
        <i
          v-if="hasSubmenu"
          :class="['pi ml-auto', root ? 'pi-angle-down' : 'pi-angle-right']"
        ></i>
      </a>
    </template>

    <!-- Elementos finales como la barra de búsqueda y el avatar -->
    <template #end>
      <div class="flex items-center gap-4">
        <InputText
          placeholder="Buscar..."
          type="text"
          class="w-32 sm:w-auto text-sm border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-200 rounded-md shadow-sm"
        />
        <Avatar
          image="/img/daggi.jpg"
          shape="circle"
          class="shadow-md border border-gray-200"
          alt="Avatar"
        />
      </div>
    </template>
  </Menubar>
</template>
