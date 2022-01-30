<script>
  export let title;
  export let id;

  function onAddToCart() {
    title = `${title}. Products were added to the cart.`;
  }
</script>

<h2 class="prod-wrap">{title}</h2>
<button on:click|once="{onAddToCart}">Add to cart</button>

<style>
  button {
    cursor: pointer;
  }

  .prod-wrap {
    margin: 1rem 0;
    border-radius: 5px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }
</style>