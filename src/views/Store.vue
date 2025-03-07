<script setup lang="ts">
import Product from '../components/Product.vue';
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/stores/ProductStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter(); // načtení obsahu routeru do proměnné

const goToCart=()=>
{
// funkce zajistí pomocí routeru přesměrování na košík
router.push('/cart'); // Přesměrování na košík
};


const productStore = useProductStore(); // Použití store

const { products } = storeToRefs(productStore); // destrukce objektu productStore
const { cart } = storeToRefs(productStore); // Zajistí reaktivní přístup k `cart`

onMounted(()=>
{
productStore.loadProducts(); // Správné volání akce až po načtení
console.log("Produkty načteny v Store: " + products);
});

</script>

<template>

<div class="cen">
<section class="con-all-products">

<button @click="goToCart()" v-if="cart.length > 0" class="number-of-products" type="button" title="Shopping cart">
<span class="p-number">{{ cart.length }}</span>
<span class="butt-svg"> </span>
</button>


 <Product :products="products"  />

</section>
</div>
 
</template>

<style scope>

.cen
{
width:100%;
}


.con-all-products
{
position:relative;
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:1rem;
padding:5rem 1rem;
max-width:1000px;
margin:auto;
}

.number-of-products
{
position:fixed;
bottom:0;
right:0;
z-index:2;
border:none;
border-radius:30px 0 0 0;
width:5rem;
height:5rem;
color:white;
background-color:black;
}

.butt-svg
{
display:block;
width:3rem;
min-width:3rem;
max-width:3rem;
height:3rem;
min-height:3rem;
max-height:3rem;
background-color:blue;
}

.p-number
{
display:block;
background-color:white;
color:black;
font-size:1rem;
line-height:1rem;
font-weight:bold;
padding:.5rem;
width:2rem;
min-width:2rem;
max-width:2rem;
height:2rem;
min-height:2rem;
max-height:2rem;
border-radius:50%;
transform:translate(2rem, 1rem);
}


</style>
