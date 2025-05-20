<script lang="ts">
  import { page } from "$app/stores";
  import Template from "../../Template.svelte";
  import HorizontalCard from "../../../../components/HorizontalCard.svelte";
  import SectionHeader from "../../../../components/SectionHeader.svelte";

  let { data } = $props();
  const { shows } = data;
  const category = $page.params.category;
  const catShows = $derived(
    shows.filter((show) => show.genres.includes(category)),
  );
</script>

<div class="my-12">
  <h2 class="text-lg">Shows by Category</h2>
  <SectionHeader title={category} aria-label="Selected Category" />
</div>
<div class="flex flex-col gap-4">
  {#each catShows as show}
    <HorizontalCard {show} />
  {/each}
</div>

<style>
</style>
