<script>
  export let imageList;
  const bannerImage = imageList.find((img) => img.type === "banner");
  const imageGallery = imageList.filter((img) => img.type !== "banner");
  $: console.log(imageList);
</script>

{#if bannerImage}
  <div class="show-banner">
    <img src={bannerImage.resolutions?.original?.url} alt="show-banner" />
  </div>
{/if}
<h2 class="title">Photos</h2>
<div class="show-photo-gallery">
  {#each imageGallery as image, idx}
    {#if idx < 3}
      <img
        class="show-gallery-photo"
        src={image?.resolutions?.medium?.url}
        alt=""
      />
    {/if}
  {/each}
  <a href="/">See all photos</a>
</div>

<style>
  img {
  }
  .show-photo-gallery {
    display: flex;
    overflow: hidden;
    align-items: center;
  }
  .show-gallery-photo {
    /* border: 1px solid red; */
    margin: 1.5rem;
    max-width: 10rem;
  }
  .show-banner {
    object-position: center;
    object-fit: cover;
    max-height: 12rem;
    margin: 2rem 0;
  }
</style>
