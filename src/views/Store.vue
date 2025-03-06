<script setup lang="ts">
import Product from '../components/Product.vue';
</script>

<template>

<div class="cen">
<section class="con-all-products">

<button class="number-of-products" type="button" title="Shopping cart">
<span class="p-number">1</span>
<span class="butt-svg"> </span>
</button>


 <Product />
<Product />
 <Product />
  <Product />
   <Product />
    <Product />
     <Product />
      <Product />

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
