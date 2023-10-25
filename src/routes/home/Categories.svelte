<script>
  import ScrollBtns from "../../components/ScrollBtns.svelte";
  import Tab from "../../components/Tab.svelte";

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
    /* overflow: visible; */
    /* overflow-x: scroll; */
    /* overflow-y: initial; */
    margin: 0 2rem;
    /* justify-content: space-between; */
    /* border: 1px solid red; */
    align-items: center;
    /* align-content: center; */
  }
  /* .categories-container:-webkit-scrollbar { */
  /*   display: none; */
  /* } */
  .categories-carousel {
    display: flex;
    overflow: scroll;
  }
  @media screen and (min-width: 1024px) {
    .categories-container {
      margin: 0 5rem;
    }
    .categories-carousel {
      display: flex;
      overflow: hidden;
    }
  }
  /* -moz-scrollbars-none; */
</style>
