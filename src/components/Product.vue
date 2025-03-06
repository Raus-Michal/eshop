<script setup lang="ts">
import imgPath from "@/assets/img.jpg";

</script>


<template>
<ul class="con-product">
        <li>Name product</li>
        <li><img :src="imgPath" width="200" height="200" alt="img-produkct"></li>
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