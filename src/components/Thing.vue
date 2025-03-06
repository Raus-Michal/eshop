<script setup lang="ts">

</script>

<template>
<ul class="product">
            <li>
                <button type="button" title="Odebrat položku z košíku">
                  <span class="svg-span">
                  <svg width="400" height="400" viewBox="0 0 400 400" stroke-width="50" stroke-linejoin="round" stroke="black" stroke-linecap="round" fill="none">
                  <line x1="50" y1="50" x2="350" y2="350" />
                  <line x1="350" y1="50" x2="50" y2="350" />
                  </svg>
                  </span>
                </button>
            </li>
                <li>Name produkt Name produkt</li>
                <li>1x</li>
                <li>10 &#36;</li>
</ul>
</template>

<style scope>

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
margin:0;
margin-bottom:1rem;
padding:0;
list-style-type:none;
}

.product li
{
margin-bottom:0;
}


.product li button
{
color:black;
background-color:transparent;
border:none;
padding:.5rem;
border-radius:50%;
font-size:1rem;
font-weight:bold;
}

</style>