<script>
  export let imageList;
  const bannerImage = imageList.find((img) => img.type === "banner");
  const imageGallery = imageList.filter((img) => img.type !== "banner");
</script>

{#if bannerImage}
  <img
    src={bannerImage?.resolutions?.original?.url}
    alt="show-banner"
    class="show-banner"
  />
{/if}
<h2 class="title">Photos</h2>
<div class="show-photo-gallery">
  {#each imageGallery as image}
    <div class="show-gallery-photo">
      <img src={image?.resolutions?.medium?.url} alt="" />
    </div>
  {/each}
</div>

<style>
  .show-photo-gallery {
    display: flex;
    overflow: hidden;
  }
  .show-photo-gallery > * {
    margin: 0.5rem;
  }
  .show-banner {
    width: 100%;
    max-height: 12rem;
    object-fit: cover;
  }
</style>
