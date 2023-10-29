<script>
  import CastSlot from "./castSlot.svelte";
  import EpisodesSlot from "./episodesSlot.svelte";
  import ImageSlot from "./imageSlot.svelte";
  // import RelatedSlot from "./relatedSlot.svelte";
  export let data;
  // $: ({ summary, network, showSeasons, showImages, showCast } = data);
  const { summary, network, showSeasons, showImages, showCast } = data;
  // console.log(data);
</script>

<div class="flex-container">
  <div class="show-description">
    <p>{@html summary}</p>
  </div>
  <div class="show-actions">
    {#if network?.name}
      <span class="show-actions-action available"
        >Available on: {network?.name}</span
      >
    {/if}
    <span class="show-actions-action watchlist">Add to watchlist</span>
  </div>
  <EpisodesSlot seasonList={showSeasons} />
  <ImageSlot imageList={showImages} />
  <CastSlot castList={showCast} />
</div>

<style>
  .flex-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .show-description {
    padding: 0 0 0 0.5rem;
    /* text-align: justify; */
    background-color: rgba(var(--secondary), 0.5);
  }

  .show-actions {
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .show-actions > * {
    margin: 0 1rem;
  }
  .show-actions-action {
    padding: 1rem;
    overflow: hidden;
    border-radius: 0.5rem;
  }
  .watchlist {
    background-color: rgba(var(--rgbaccent), 0.8);
    color: var(--background);
  }
  .available {
    background-color: rgba(var(--rgbsecondary), 0.8);
    /* margin: 0 0 0 auto; */
  }
</style>
