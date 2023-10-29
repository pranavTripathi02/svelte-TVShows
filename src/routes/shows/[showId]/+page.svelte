<script>
  import Loading from "../../../components/Loading.svelte";
  import CastSlot from "./castSlot.svelte";
  import EpisodesSlot from "./episodesSlot.svelte";
  import ImageSlot from "./imageSlot.svelte";
  import RelatedSlot from "./relatedSlot.svelte";

  export let data;
  $: ({
    name,
    averageRuntime,
    genres,
    image,
    network,
    premiered,
    status,
    summary,
    rating,
  } = data?.showInfo);
  $: ({ showImages, showCast, showSeasons } = data);
  $: backImages = showImages.filter((item) => item.type === "background");
</script>

{#if data.loading}
  <Loading />
{:else}
  <h1 class="title">{name}</h1>
  <!-- <p>{status}{premiered}-{status}</p> -->
  <div class="main-images">
    <img src={image?.medium} alt="main-image-poster" />
    <img src={backImages[0]?.resolutions?.original?.url} alt="" />
    <!-- <img src={backImages[0]} alt="" /> -->
  </div>
  <div class="genre-tabs">
    {#each genres as genre}
      <span>{genre}</span>
    {/each}
  </div>
  <div class="show-description">
    <p>{@html summary}</p>
  </div>
  {#if network?.name}
    <span class="available">Available on: {network?.name}</span>
  {/if}
  <EpisodesSlot seasonList={showSeasons} />
  <ImageSlot imageList={showImages} />
  <CastSlot castList={showCast} />
  <!-- <RelatedSlot related={shows}/> -->
{/if}

<style>
  * {
    overflow: hidden;
  }
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

  .show-description {
    padding: 0 0 0 0.5rem;
    text-align: justify;
    background-color: rgba(var(--secondary), 0.5);
  }
  .available {
    padding: 1rem;
    overflow: hidden;
    background-color: rgba(var(--rgbaccent), 0.8);
    border-radius: 0.5rem;
    color: var(--background);
    /* margin: 0 0 0 auto; */
  }
</style>
