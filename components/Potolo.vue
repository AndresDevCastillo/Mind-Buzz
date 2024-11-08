<script setup>
const potolos = await  usePotolos()
</script>

<template>
    <div class="potolo">
        <h1>Potolo</h1>
        <pre>
            {{ potolos }}
        </pre>
    </div>
</template>