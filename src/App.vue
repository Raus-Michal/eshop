<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Store</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
      </nav>
  </header>

<router-view /> <!-- Zde se vykreslí aktuální stránka podle URL -->

</template>

<style scoped>

</style>
