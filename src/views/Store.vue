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
    <section v-if="productStore.loading==false" class="con-all-products">
        <button @click="goToCart()" v-if="cart.length > 0" class="number-of-products" type="button" title="Shopping cart">
            <span class="p-number">{{ cart.length }}</span>
            <span class="butt-svg">
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 2.75949C1 2.34004 1.3467 2 1.77437 2H2.53267C3.96462 2 5.17248 3.0458 5.35009 4.4394L5.55544 6.05063H20.1928C21.2974 6.05063 22.1435 7.01422 21.9796 8.08567L20.8726 15.3245C20.6641 16.6877 19.4701 17.6962 18.0646 17.6962H8.19891C6.79344 17.6962 5.59946 16.6877 5.39098 15.3245L4.10604 6.92279L4.10345 6.90433L3.81331 4.6278C3.73258 3.99435 3.18355 3.51899 2.53267 3.51899H1.77437C1.3467 3.51899 1 3.17895 1 2.75949ZM5.77103 7.56962L6.92258 15.0992C7.01734 15.7188 7.56006 16.1772 8.19891 16.1772H18.0646C18.7035 16.1772 19.2462 15.7188 19.341 15.0992L20.448 7.86034C20.4714 7.70727 20.3506 7.56962 20.1928 7.56962H5.77103Z" fill="white"/>
                    <path d="M19.3267 20.9873C19.3267 21.5466 18.8644 22 18.2942 22C17.724 22 17.2617 21.5466 17.2617 20.9873C17.2617 20.4281 17.724 19.9747 18.2942 19.9747C18.8644 19.9747 19.3267 20.4281 19.3267 20.9873Z" fill="white"/>
                    <path d="M9.0018 20.9873C9.0018 21.5466 8.53954 22 7.96931 22C7.39908 22 6.93682 21.5466 6.93682 20.9873C6.93682 20.4281 7.39908 19.9747 7.96931 19.9747C8.53954 19.9747 9.0018 20.4281 9.0018 20.9873Z" fill="white"/>
                </svg>
            </span>
        </button>
        <Product />
    </section>

    <div v-else>
        <p>Produkty se načítají ...</p>
    </div>
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
padding:.5rem;
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
