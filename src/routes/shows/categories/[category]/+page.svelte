<script lang="ts">
  import { run } from 'svelte/legacy';

  import { page } from "$app/stores";
  import Template from "../../Template.svelte";
  import HorizontalCard from "../../../../components/HorizontalCard.svelte";

  let { data } = $props();
  let { shows } = $derived(data);
  // $: console.log(shows);
  const category = $page.params.category;
  let catShows = $derived(shows.filter((show) => show.genres.includes(category)));
  run(() => {
    console.log(category, catShows);
  });
</script>

<Template>
  {#snippet top()}
    <div >
      <h1 class="title">Show Charts</h1>
      <h2>{category}</h2>
    </div>
  {/snippet}
  {#snippet content()}
    <div >
      {#each catShows as show}
        <HorizontalCard {show} details={false} />
      {/each}
    </div>
  {/snippet}
</Template>

<style>
</style>
