<script>
  // import { showStore } from "../../stores/tvShows";

  import HorizontalCard from "../../components/HorizontalCard.svelte";
  import Loading from "../../components/Loading.svelte";
  import SuggestionsSidebar from "./[showId]/SuggestionsSidebar.svelte";

  export let data;
  $: ({ shows, loading } = data);
  $: console.log(shows, loading);
  $: console.log(data);
  let details = false;
  // const filters = {};
</script>

{#if loading}
  <Loading />
{:else}
  <div class="grid-container">
    <div class="top">
      <h1 class="title">Show Charts</h1>
      <h3>Explore over 200 TV Shows</h3>
    </div>
    <div class="col1">
      {#each shows as show}
        <HorizontalCard {show} {details} />
      {/each}
    </div>
    <div class="col2"><SuggestionsSidebar /></div>
  </div>
{/if}

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
