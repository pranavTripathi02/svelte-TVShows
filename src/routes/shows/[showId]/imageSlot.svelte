<script>
  export let imageList;
  const bannerImage = imageList.find((img) => img.type === "banner");
  const imageGallery = imageList.filter((img) => img.type !== "banner");
  // $: console.log(imageList);
</script>

{#if bannerImage}
  <div class="show-banner">
    <img
      class="show-banner-image"
      src={bannerImage.resolutions?.original?.url}
      alt="show-banner"
    />
  </div>
{/if}
<h2 class="title"><a href="/">Photos</a></h2>
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
</div>

<style>
  a {
    text-decoration: none;
    color: var(--text);
  }
  a:hover {
    text-decoration: underline;
    color: var(--accent);
  }
  .show-photo-gallery {
    display: flex;
    justify-content: start;
    overflow: hidden;
    align-items: center;
  }
  .show-gallery-photo {
    margin-right: 1.5rem;
    max-width: 10rem;
    /* align-self: start; */
  }
  .show-banner {
    max-height: 12rem;
    margin: 2rem auto;
  }
  .show-banner-image {
    max-width: 100%;
    object-position: center;
    object-fit: cover;
  }
  @media screen and (max-width: 1024px) {
    .show-banner-image {
      max-height: 14rem;
    }
  }
</style>
