<script>
  export let member;

  let isActive = false;

  function activate() {
    if(deactivateNode) {
      deactivateNode();
    }
    isActive = true;
    deactivateNode = deactivate;
  }

  function deactivate() {
    isActive = false;
  }

  console.log('It will run multiple times.');
</script>

<script context="module">
  let deactivateNode;

  console.log('It will run one time only.');
</script>

<div on:click="{activate}" class:active="{isActive}">
  <h1>{member.name}</h1>
  <!-- repeat the component if 'member.isParent' is true -->
  {#if member.isParent}
    {#each member.children as child}
      <svelte:self member="{child}" />
    {/each}
  {/if}
</div>

<style>
  div {
    margin-left: 2rem;
  }

  .active {
    color: red;
  }
</style>