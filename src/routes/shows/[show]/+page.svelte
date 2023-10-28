<script>
  import Loading from "../../../components/Loading.svelte";

  export let data;
  // $: console.log(data);
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
    showImages,
    showCast,
    showSeasons,
  } = data?.showInfo);
</script>

{#if data.loading}
  <Loading />
{:else}
  <h1>{name}</h1>
  <p>{status}{premiered}-{status}</p>
  <div class="main-images">
    <img src={image?.medium} alt="main-image1" />
    <img src={showImages[0]?.resolutions?.medium?.url} alt="main-image3" />
    <div class="main-images-next">
      trail
      <img src={showImages[0]?.resolutions?.medium?.url} alt="main-image3" />
      <!-- <img src={showImages[0]?.resolutions?.medium?.url} alt="main-image3" /> -->
      <!-- <img src={showImages[0]?.resolutions?.medium?.url} alt="main-image3" /> -->
    </div>
  </div>
  <div class="genre-tabs">
    {#each genres as genre}
      <span>{genre}, </span>
    {/each}
  </div>
  <div class="show-description">
    <p>{@html summary}</p>
    <button>{network?.name}</button>
  </div>
  <div class="episodes-list">
    <div class="episode-info">
      <img class="episode-info-photo" src="" alt="" />
      <div class="episode-info-desc"></div>
    </div>
    <p>see more</p>
  </div>
  <div class="show-photo-gallery">
    {#each showImages as image}
      <div class="show-gallery-photo">
        <img src={image?.resolutions?.medium?.url} alt="" />
      </div>
    {/each}
  </div>
  <div class="cast-list">
    {#each showCast as cast}
      <div class="cast-info">
        <img src={cast.person?.image?.medium} alt="" class="cast-info-photo" />
        <div class="cast-info-name">{cast.person.name}</div>
      </div>
    {/each}
  </div>
{/if}

<style>
  .main-images {
    display: flex;
  }
  .main-images-next {
    display: flex;
    flex-direction: column;
  }

  .genre-tabs {
    display: flex;
  }

  .show-description {
    display: flex;
  }

  .episodes-list {
    display: flex;
    flex-direction: column;
  }
  .episode-info {
    display: flex;
  }

  .show-photo-gallery {
    display: flex;
  }

  .cast-list {
    display: flex;
    flex-wrap: wrap;
  }
  .cast-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
  }
  .cast-info-photo {
    margin: 1rem;
    border-radius: 50%;
    height: 8rem;
    width: 8rem;
    object-fit: cover;
    object-position: top;
  }
</style>
