<script>
  import Carousel from "../components/Carousel.svelte";
  import Categories from "../components/Categories.svelte";
  import ShowsHorizontal from "../components/ShowsHorizontal.svelte";
  import Loading from "../components/Loading.svelte";
  export let data;
  $: ({ loading, featuredShows, topTen, popularTen, categories } = data.shows);
</script>

{#if loading}
  <Loading />
{:else}
  <div>
    <Carousel {featuredShows} />
    <ShowsHorizontal title="Featured Shows" data={featuredShows} />
    <Categories {categories} />
    <ShowsHorizontal title="Popular Shows" data={popularTen} />
    <ShowsHorizontal title="Top Rated Shows" data={topTen} />
  </div>
{/if}

<style>
  :global(.title:before) {
    content: "";
    background-color: var(--accent);
    padding: 1px;
    margin: 5px;
  }
</style>
