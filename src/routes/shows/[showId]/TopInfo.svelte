<script>
  export let data;
  $: ({ name, image, backImages, genres } = data);
</script>

<h1 class="title">{name}</h1>
<!-- <p>{status}{premiered}-{status}</p> -->
<div class="main-images">
  {#if backImages && image}
    <img src={image?.medium} alt="main-image-poster" />
    <img src={backImages[0]?.resolutions?.original?.url} alt="" />
  {/if}
  <!-- <img src={backImages[0]} alt="" /> -->
</div>
<div class="genre-tabs">
  {#each genres as genre}
    <span>{genre}</span>
  {/each}
</div>

<style>
  .main-images {
    display: flex;
    justify-content: start;
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
    font-size: 0.9rem;
    margin: 1rem 0.5rem;
    background-color: var(--secondary);
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
</style>
