<script>
  // import data from "$lib/data";
  import Carousel from "../components/Carousel.svelte";
  import Categories from "../components/Categories.svelte";
  import ShowsHorizontal from "../components/ShowsHorizontal.svelte";
  import { showStore } from "../stores/tvShows";
  import Loading from "../components/Loading.svelte";
  // export let data;
  $: ({ featuredShows, topTen, popularTen, categories, shows } = $showStore);
  // console.log("len", showStore.categories);
</script>

{#if $showStore?.shows.length > 0}
  <div>
    <Carousel {featuredShows} />
    <ShowsHorizontal title="Featured Shows" data={featuredShows} />
    <Categories {categories} />
    <ShowsHorizontal title="Popular Shows" data={popularTen} />
    <ShowsHorizontal title="Top Rated Shows" data={topTen} />
  </div>
{:else}
  <Loading />
{/if}

<style>
  :global(.title:before) {
    content: "";
    background-color: var(--accent);
    padding: 1px;
    margin: 5px;
  }
</style>
