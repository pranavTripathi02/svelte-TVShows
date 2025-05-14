<script lang="ts">
  import Carousel from "../components/Carousel.svelte";
  import Categories from "../components/Categories.svelte";
  import ShowsHorizontal from "../components/ShowsHorizontal.svelte";
  import Loading from "../components/Loading.svelte";
  import Featured from "../components/Featured.svelte";
  let { data } = $props();
  let { featuredShows, topTen, popularTen, categories } = $derived(data);
</script>

<div class="h-full">
  <Featured {featuredShows} />
  <ShowsHorizontal title="Featured Shows" data={featuredShows} />
  <Categories {categories} />
  <ShowsHorizontal title="Popular Shows" data={popularTen} />
  <ShowsHorizontal title="Top Rated Shows" data={topTen} />
</div>

<style>
</style>
