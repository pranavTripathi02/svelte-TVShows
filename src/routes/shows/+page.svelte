<script lang="ts">
  // import { showStore } from "../../stores/tvShows";

  import HorizontalCard from "../../components/HorizontalCard.svelte";
  import Loading from "../../components/Loading.svelte";
  import SuggestionsSidebar from "../../components/SuggestionsSidebar.svelte";
  import Template from "./Template.svelte";

  let { data } = $props();
  let { shows, loading } = $derived(data);
  let details = false;
</script>

{#if loading}
  <Loading />
{:else}
  <Template>
    {#snippet top()}
        <div >
        <h1 class="title">Show Charts</h1>
        <h3>Explore over 200 TV Shows</h3>
      </div>
      {/snippet}
    {#snippet content()}
        <div >
        {#each shows as show}
          <HorizontalCard {show} {details} />
        {/each}
      </div>
      {/snippet}
    {#snippet sidebar()}
        <div ><SuggestionsSidebar /></div>
      {/snippet}
  </Template>
{/if}

<style>
</style>
