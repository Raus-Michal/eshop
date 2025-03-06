<script setup lang="ts">
import { RouterLink, RouterView , useRoute } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

const route = useRoute();
</script>

<template>
  <header>
      <h1>E-shop</h1>
      <nav>
        <RouterLink to="/" :class="{ active: route.path === '/' }">Store</RouterLink>
        <RouterLink to="/cart" :class="{ active: route.path === '/cart' }">Cart</RouterLink>
      </nav>
  </header>

<router-view /> <!-- Zde se vykreslí aktuální stránka podle URL -->



</template>

<style scoped>
.active
{
text-decoration:underline;
}
</style>
