<script>
  export let title;
  export let id;

  function onRemoveFromCart() {
    title = `${title}. Products were removed from the cart.`;
  }
</script>

<h1>{title}</h1>
<button on:click|once="{onRemoveFromCart}">Remove from cart</button>

<style>
  button {
    cursor: pointer;
  }
</style>