<template>
    <h1>Benvingut a la meva pàgina Web</h1>
    <section>
        <h2>Productes</h2>
        <p>Buscador</p>
        <input type="text" v-model="busqueda" />
        <button @click="realizarBusqueda">Buscar</button>
        <article>
            <router-link :to="{ name: 'producte', params: { id: 1, nom: 'Gatitos Bonitos' } }">
                <h3>Gatitos Bonitos</h3>
            </router-link>
        </article>
        <article>
            <router-link :to="{ name: 'producte', params: { id: 2, nom: 'Gatitos que curan tu corazon' } }">
                <h3>Gatitos que curan tu corazon</h3>
            </router-link>
        </article>
        <article>
            <router-link :to="{ name: 'producte', params: { id: 3, nom: 'Perritos graciosos' } }">
                <h3>Perritos graciosos</h3>
            </router-link>
        </article>
    </section>
</template>
<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const busqueda = ref('');

const realizarBusqueda = () => {
    router.push({ name: 'resultats', query: { q: busqueda.value } });
};
</script>