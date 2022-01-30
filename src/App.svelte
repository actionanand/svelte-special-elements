<script>
  import Product from './Product.svelte';
  import CartItem from './CartItem.svelte';
  import FamilyNode from './FamilyNode.svelte';

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

  const familyStructure = [
    {
      isParent: true,
      name: 'Chris',
      children: [
        {
          isParent: true,
          name: 'Bob',
          children: [
            {
              isParent: false,
              name: 'Julie'
            }
          ]
        }
      ]
    },
    {
      isParent: false,
      name: 'Anna'
    }
  ];

  let renderedComp = prodObj;
  let y;
  let currentTitle = 'Svelte Special Elements';

  $: console.log('Scrolling - Y position : ', y);

  function toggleComponent() {
    if(renderedComp.comp === Product) {
      renderedComp = cartObj;
    } else {
      renderedComp = prodObj;
    }
  }

  function changeMyTitle() {
    currentTitle = 'Svelte App\'s title changed!'
  }
</script>

<div class="title-wrap">
  <h1 class="capitalize-it">{appName}</h1>
</div>

<svelte:head>
  <title>{currentTitle}</title>
  <!-- we can manipulate anything inside 'head' tag, we can add script too. we can change for every component -->
</svelte:head>

<svelte:window bind:scrollY="{y}" />
<svelte:body on:mouseenter="{() => console.log(event)}"/>
<div class="scroll-div">
  <button on:click="{toggleComponent}">Toggle</button>
  <button on:click="{changeMyTitle}">Change website title</button>
  <!-- {#if renderedComp}
    <Product id="p1" title="This is test product" />
  {:else}
    <CartItem id="p2" title="This is test cart" />
  {/if} -->
  
  <svelte:component this="{renderedComp.comp}" id="{renderedComp.id}" title="{renderedComp.title}" />
  {#each familyStructure as familyMember (familyMember.name)}
    <div class="family-wrap">
      <FamilyNode member="{familyMember}" />
    </div>
  {/each}
</div>

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

  .scroll-div {
    height: 2500px;
  }

  .family-wrap {
    margin: 1rem 0;
    border-radius: 5px;
    background: wheat;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }
</style>