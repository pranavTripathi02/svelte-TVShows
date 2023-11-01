<script>
  import Tab from "../../../components/Tab.svelte";

  export let data;
  $: ({ name, image, backImages, genres } = data);
</script>

<div class="top">
  <h1 class="title">{name}</h1>
  <!-- <p>{status}{premiered}-{status}</p> -->
  <div class="main-images">
    {#if backImages && image}
      <img src={image?.medium} alt="main-poster" />
      <img src={backImages[0]?.resolutions?.original?.url} alt="" />
      <img src={backImages[1]?.resolutions?.original?.url} alt="" />
    {/if}
    <!-- <img src={backImages[0]} alt="" /> -->
  </div>
  <div class="genre-tabs">
    {#each genres as genre}
      <Tab title={genre} />
    {/each}
  </div>
</div>

<style>
  .top {
    /* border: 1px solid red; */
    background-color: var(--secondary);
    padding: 1rem;
    border-radius: 1rem;
  }
  .main-images {
    display: flex;
    justify-content: start;
    overflow: hidden;
  }
  .main-images > * {
    margin: 0 0.5rem;
    max-width: 25rem;
    object-fit: cover;
  }

  .genre-tabs {
    display: flex;
    margin-left: 2rem;
  }
  .genre-tabs > * {
    font-size: 0.8rem;
    /* margin: 1rem 0.5rem; */
    /* background-color: var(--secondary); */
    /* padding: 0.5rem; */
    /* border-radius: 0.5rem; */
  }
</style>
