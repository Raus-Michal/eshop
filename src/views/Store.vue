<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>

<div class="cen">
<section class="con-all-products">

<button class="number-of-products" type="button" title="Shopping cart">
<span class="p-number">1</span>
<span class="butt-svg"> </span>
</button>





    <ul class="con-product">
        <li>Name product</li>
        <li><img src="../../img.jpg" width="200" height="200" alt="img-produkct"></li>
        <div class="con-buy">
            <li>10 &#36;</li>
            <li class="con-butt">
                <button type="button" title="buy a product">Buy</button>
            </li>
            <li class="con-num-pro" style="display:none;"> <!-- (ZDE BUDE místo toho V-IF) -->
                <button type="button" title="buy a product"><span class="goUp">-</span></button>
                <p>1</p>
                <button type="button" title="buy a product"><span class="goUp">+</span></button>
            </li>
        </div>
    </ul>

</section>
</div>
 
</template>

<style>

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
gap:1rem;
margin:.5rem 0;
}

.con-buy li
{
font-size:2rem;
font-weight:bold;
margin:0;
}

.con-butt,.con-num-pro /* deklarace zabrání poskakováná layoutu karty produktu, při kliku na button BUY */
{
height:2rem;
max-height:2rem;
overflow:visible; /* pro jistotu, kdyby obsah přetekl přes kontejner */
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
grid-template-columns:2rem 2rem 2rem;
justify-content:end;
}

.con-num-pro p
{
font-size:1.5rem;
text-align:center;
font-weight:bold;
cursor:default;
}

.goUp /* posun textu pro centraci v buttonu */
{
display:inline-block;
transform:translateY(-0.2rem);
}

</style>
