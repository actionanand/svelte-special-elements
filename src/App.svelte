<script>
  import Product from './Product.svelte';
  import CartItem from './CartItem.svelte';

  export let appName;

  const prodObj = {
    comp: Product,
    title:'This is test product',
    id: 'p1'
  };

  const cartObj = {
    comp: CartItem,
    title:'This is test cart',
    id: 'p2'
  };

  let renderedComp = prodObj;

  function toggleComponent() {
    if(renderedComp.comp === Product) {
      renderedComp = cartObj;
    } else {
      renderedComp = prodObj;
    }
  }
</script>

<div class="title-wrap">
  <h1 class="capitalize-it">{appName}</h1>
</div>

<button on:click="{toggleComponent}">Toggle</button>
<!-- {#if renderedComp}
  <Product id="p1" title="This is test product" />
{:else}
  <CartItem id="p2" title="This is test cart" />
{/if} -->

<svelte:component this="{renderedComp.comp}" id="{renderedComp.id}" title="{renderedComp.title}" />

<style>
  .title-wrap {
    display: flex;
    justify-content: center;
  }
  .capitalize-it {
    text-transform: capitalize;
  }

  button {
    cursor: pointer;
  }
</style>