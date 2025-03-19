<script setup lang="ts">
import { useProductStore } from '@/stores/ProductStore';

const productStore = useProductStore(); // Přímý přístup ke store

// Funkce pro přidání produktu do košíku
const addToCart = (product: { id: number; name: string; price: number; picture: string }) => {
  productStore.addToCart(product); // Volání akce přímo ze store
};

// Funkce pro odebrání produktu z košíku
const removeFromCart = (productId: number) => {
  productStore.removeFromCart(productId); // Volání akce přímo ze store
};
</script>

<template>
  <!-- Iterace přes produkty přímo z productStore.products -->
  <div v-for="product in productStore.products" :key="product.id">
    <ul class="con-product">
      <li>{{ product.name }}</li>
      <li>
        <img :src="product.picture" width="200" height="200" alt="img-product" />
      </li>
      <div class="con-buy">
        <li>{{ product.price }} &euro;</li>
        <li class="con-butt" v-if="productStore.getQuantity(product.id) === 0">
          <button @click="addToCart(product)" type="button" title="Buy a product">Buy</button>
        </li>
        <li class="con-num-pro" v-if="productStore.getQuantity(product.id) > 0">
          <button @click="removeFromCart(product.id)" type="button" title="Remove from cart">
            <span class="goUp">-</span>
          </button>
          <p>{{ productStore.getQuantity(product.id) }}</p>
          <button @click="addToCart(product)" type="button" title="Add to cart">
            <span class="goUp">+</span>
          </button>
        </li>
      </div>
    </ul>
  </div>
</template>

<style scope>

.con-product
{
padding:.5rem;
border:1px solid black;
width:fit-content;
max-width:calc(200px + (2 * 0.5rem));
list-style:none;
margin:0;
}

.con-product li
{
text-align:center;
}

.con-product li:first-child
{
margin-bottom:.5rem;
}

.con-product li img
{
width:100%;
max-width:200px;
height:auto;
margin-bottom:.5rem;
aspect-ratio:1/1;
}

.con-buy
{
display:grid;
grid-template-columns:auto 1fr;
align-items:center;
gap:.5rem;
margin:.5rem 0;
}

.con-buy li
{
font-size:2rem;
font-weight:bold;
margin:0;
}

.con-butt button,.con-num-pro button
{
color:white;
background-color:black;
border:none;
padding:.5rem;
border-radius:2rem;
font-size:1rem;
font-weight:bold;
width:100%;
}

.con-num-pro button
{
width:2rem;
max-width:2rem;
height:2rem;
max-width:2rem;
border-radius:50%;
font-size:2rem;
line-height:2rem;
padding:0;
}

.con-num-pro
{
display:grid;
grid-template-columns:2rem 2.5rem 2rem;
justify-content:end;
}

.con-num-pro p
{
font-size:1.5rem;
text-align:center;
font-weight:bold;
cursor:default;
margin:0;
}

.goUp /* posun textu pro centraci v buttonu */
{
display:inline-block;
transform:translateY(-0.2rem);
}
</style>