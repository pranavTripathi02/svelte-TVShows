<script>
  import { page } from "$app/stores";
  import Template from "../../Template.svelte";
  import HorizontalCard from "../../../../components/HorizontalCard.svelte";

  export let data;
  $: ({ shows } = data);
  // $: console.log(shows);
  const category = $page.params.category;
  $: catShows = shows.filter((show) => show.genres.includes(category));
  $: console.log(category, catShows);
</script>

<Template>
  <div slot="top">
    <h1 class="title">Show Charts</h1>
    <h2>{category}</h2>
  </div>
  <div slot="content">
    {#each catShows as show}
      <HorizontalCard {show} details={false} />
    {/each}
  </div>
</Template>

<style>
</style>
