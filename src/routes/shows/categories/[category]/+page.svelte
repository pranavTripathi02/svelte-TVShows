<script>
  import { page } from "$app/stores";
  import HorizontalCard from "../../../../components/HorizontalCard.svelte";
  import SuggestionsSidebar from "../../[showId]/SuggestionsSidebar.svelte";

  export let data;
  $: ({ shows } = data);
  // $: console.log(shows);
  const category = $page.params.category;
  $: catShows = shows.filter((show) => show.genres.includes(category));
  // $: console.log(category, catShows);
</script>

<div class="grid-container">
  <div class="top">
    <h1 class="title">Show Charts</h1>
    <h2>{category}</h2>
  </div>
  <div class="col1">
    {#each catShows as show}
      <HorizontalCard {show} details={false} />
    {/each}
  </div>
  <div class="col2">
    <SuggestionsSidebar />
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-areas:
      "top   top"
      "col1   col2";
    grid-template-columns: 3fr 1fr;
    grid-gap: 1rem;
  }
  .top {
    grid-area: top;
  }
  .col1 {
    grid-area: col1;
    width: 100%;
  }
  .col2 {
    grid-area: col2;
  }
  @media screen and (max-width: 1024px) {
    .grid-container {
      grid-template-areas:
        "top"
        "col1";
      grid-template-columns: auto;
    }
    .col2 {
      display: none;
    }
  }
</style>
