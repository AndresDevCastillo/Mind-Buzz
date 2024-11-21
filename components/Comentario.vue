<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px">
            <template v-slot:toolbar>
                <span class="ql-formats">
                    <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                    <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                    <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                </span>
            </template>
        </Editor>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref('<div>Hello World!</div><div>PrimeVue <b>Editor</b> Rocks</div><div><br></div>');
</script>

