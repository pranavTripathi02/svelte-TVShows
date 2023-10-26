<script>
  import ScrollBtns from "./ScrollBtns.svelte";
  import Tab from "./Tab.svelte";

  export let categories;
  // console.log(categories);
</script>

<h2 class="title">Shows by Categories</h2>
<div class="categories-container">
  <div id="categories-carousel" class="categories-carousel">
    {#each categories as category}
      <Tab title={category} />
    {/each}
  </div>
  <ScrollBtns elId="categories-carousel" />
</div>

<style>
  .categories-container {
    display: flex;
    position: relative;
    margin: 0 2rem;
    align-items: center;
  }
  .categories-carousel {
    display: flex;
    overflow: hidden;
  }
  @media screen and (min-width: 1024px) {
    .categories-container {
      margin: 0 5rem;
    }
  }
</style>
