<script>
  // import data from "$lib/data";
  import Carousel from "./home/Carousel.svelte";
  import Categories from "./home/Categories.svelte";
  import ShowsHorizontal from "../components/ShowsHorizontal.svelte";
  export let data;
  const { featuredShows, topTen, popularTen, categories, shows } = data;
</script>

<div>
  <Carousel {featuredShows} />
  <Categories {categories} />
  <ShowsHorizontal title="Popular Shows" data={popularTen} />
  <ShowsHorizontal title="Top Rated Shows" data={topTen} />
</div>

<style>
  :global(.title:before) {
    content: "";
    background-color: var(--accent);
    padding: 1px;
    margin: 5px;
  }
</style>
