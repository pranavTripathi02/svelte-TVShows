<script>
  import Card from "./Card.svelte";
  import ScrollBtns from "./ScrollBtns.svelte";

  export let data;
  export let title;
</script>

<section class:hidden={data.length < 1}>
  <h2 class="title">{title}</h2>
  <div class="shows-container">
    <div id={`${title}-carousel`} class="shows-carousel">
      {#each data as show}
        <Card {show} />
      {/each}
    </div>
    <ScrollBtns elId={`${title}-carousel`} />
  </div>
</section>

<style>
  .hidden {
    display: none;
  }
  .shows-container {
    display: flex;
    position: relative;
    align-items: center;
    margin: 0 2rem;
  }
  .shows-carousel {
    overflow: hidden;
    display: flex;
  }
  .title:before {
    content: "";
    background-color: var(--accent);
    padding: 1px;
    margin: 5px;
  }
</style>
