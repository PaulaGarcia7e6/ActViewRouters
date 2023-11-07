<template>
    <h1>
        Resultados
    </h1>
    <p>
        {{ busqueda }}
    </p>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const { q: busqueda } = useRoute().query;
</script>