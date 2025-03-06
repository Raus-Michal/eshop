<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
<section class="con">
    <div class="con-products">
        <div>
            <div class="product">
                <button type="button" title="Odebrat položku z košíku">
                  <span class="svg-span">
                  <svg width="400" height="400" viewBox="0 0 400 400" stroke-width="50" stroke-linejoin="round" stroke="black" stroke-linecap="round" fill="none">
                  <line x1="50" y1="50" x2="350" y2="350" />
                  <line x1="350" y1="50" x2="50" y2="350" />
                  </svg>
                  </span>
                </button>
                <p>Name produkt Name produkt</p>
                <p>1x</p>
                <p>10 &#36;</p>
            </div>
        </div>

        <div class="con-price">
        <p>Total</p>
        <p class="big">10 &#36;</p>
        </div>
    </div>
</section>
</template>

<style>
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


.product
{
display:grid;
grid-template-columns:3rem minmax(5rem, 500px) auto auto auto;
gap:1rem;
align-items:center;
border:2px solid black;
padding:.5rem 1rem;
margin-bottom:1rem;
max-width:30rem;
}

.product p
{
margin-bottom:0;
}


.product button
{
color:black;
background-color:transparent;
border:none;
padding:.5rem;
border-radius:50%;
font-size:1rem;
font-weight:bold;
}

.product input,.product input:focus
{
width:5ch;
text-align:center;
border:none;
font-size:1rem;
outline:none;
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