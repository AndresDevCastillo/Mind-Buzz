<script setup>
definePageMeta({
  layout: "custom",
});

const text = "¿Qué Quieres Ver Hoy? =)";
const displayText = ref(""); // Texto que se mostrará en el span

onMounted(() => {
  let index = 0;
  const typingEffect = () => {
    if (index < text.length) {
      displayText.value += text[index];
      index++;
      setTimeout(typingEffect, 100); // Tiempo entre las letras (en milisegundos)
    }
  };
  typingEffect(); // Iniciar el efecto de escritura
});
</script>

<template>
  <div class="newPos flex flex-col gap-3 items-center justify-center h-screen">
    <!-- Aquí se aplicará el efecto de escritura -->
    <span class="text-2xl">{{ displayText }}</span>

    <!-- Campo de búsqueda -->
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText
        v-model="value1"
        placeholder="Mindfulness..."
        class="min-w-80"
      />
    </IconField>
    <div class="flex gap-3 items-center justify-center">
      <Chip label="Bienestar" icon="pi pi-hashtag" />
      <Chip label="Autocuidado" icon="pi pi-hashtag" />
      <Chip label="Resiliencia" icon="pi pi-hashtag" />
    </div>
  </div>
</template>

<style scoped>
/* Puedes añadir estilos aquí si necesitas ajustar algo adicional */
</style>
