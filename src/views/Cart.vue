<script setup lang="ts">
import Thing from '../components/Thing.vue'
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/stores/ProductStore';

const productStore = useProductStore(); // Použití store

const { cart } = storeToRefs(productStore); // Zajistí reaktivní přístup k `cart`

</script>

<template>
<section class="con">
    <div v-if="cart.length > 0" class="con-products">
        <div>
        <Thing />
        </div>

        <div class="con-price">
        <p>Total</p>
        <p class="big">{{ productStore.totalPrice() }} &euro;</p>
        </div>
    </div>
<div v-if="cart.length === 0">
<p>V košíku není žádné zboží.</p>
</div>
</section>
</template>

<style scope>
.con
{
display:flex;
flex-direction:column;
align-items:center;
padding:5rem 1rem 1rem 1rem;
}

.con-products
{
display:flex;
flex-wrap:wrap;
gap:2rem;
align-items:center;
justify-content:center;
}

.con-price
{
display:flex;
flex-direction:column;
align-items:center;
gap:.5rem;
padding:1rem;
border:2px solid black;
}

.con-price p
{
margin:0;
}

.big
{
font-size:2rem;
font-weight:bold;
}

.svg-span
{
display:block;
width:2rem;
min-width:2rem;
max-width:2rem;
height:2rem;
min-height:2rem;
max-height:2rem;
}
</style>