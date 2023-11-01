<script>
  // import { showStore } from "../../stores/tvShows";

  import HorizontalCard from "../../components/HorizontalCard.svelte";
  import Loading from "../../components/Loading.svelte";
  import SuggestionsSidebar from "../../components/SuggestionsSidebar.svelte";
  import Template from "./Template.svelte";

  export let data;
  $: ({ shows, loading } = data);
  let details = false;
</script>

{#if loading}
  <Loading />
{:else}
  <Template>
    <div slot="top">
      <h1 class="title">Show Charts</h1>
      <h3>Explore over 200 TV Shows</h3>
    </div>
    <div slot="content">
      {#each shows as show}
        <HorizontalCard {show} {details} />
      {/each}
    </div>
    <div slot="sidebar"><SuggestionsSidebar /></div>
  </Template>
{/if}

<style>
</style>
