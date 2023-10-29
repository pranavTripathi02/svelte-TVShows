<script>
  export let show;
  export let details;
  console.log(show, details);
</script>

<div class="card-container" data-sveltekit-preload-data>
  <a href="/shows/{show?.id}"> <span class="link" /></a>
  <img class="card-image" src={show?.image?.medium} alt="show-poster" />
  <div class="card-info">
    <p class="card-info-title clamp-2">{show?.name}</p>
    {#if show?.rating?.average > 0}
      <div class="card-info-rating">
        <i class="card-info-rating-stars fa-solid fa-star" />
        <p>{show?.rating?.average}</p>
      </div>
    {/if}
    <p class="card-info-genres clamp-1">
      {#each show?.genres as genre, idx}
        <span>
          {genre}{idx !== show?.genres.length - 1 ? ", " : ""}
        </span>
      {/each}
    </p>
    <div class="card-desc clamp-3">{@html show?.summary}</div>
  </div>
</div>

<style>
  .card-container {
    display: flex;
    background: var(--secondary);
    position: relative;
    margin: 0.5rem;
    padding: 0.5rem;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid rgba(var(--rgbtext), 0.1);
    box-sizing: border-box;
  }
  .link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .card-image {
    height: 12rem;
    object-position: center;
    object-fit: cover;
    mask-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.8),
      rgba(0, 0, 0, 1)
    );
  }
  .card-info {
    display: flex;
    flex-direction: column;
    bottom: 0;
    margin: 0 0.5rem 0 0.5rem;
  }
  .card-info > * {
    opacity: 0.7;
  }
  .card-info-title {
    opacity: 1;
  }
  .card-info-rating {
    display: flex;
    font-size: 0.8rem;
  }
  .card-info-rating > * {
    margin: 0.1rem 0.5rem 0 0;
  }
  .card-info-rating-stars {
    color: yellow;
  }
  .card-info-genres {
    color: var(--primary);
  }

  /* .clamp-1 { */
  /*   overflow: hidden; */
  /*   display: -webkit-box; */
  /*   -webkit-box-orient: vertical; */
  /*   -webkit-line-clamp: 1; */
  /* } */
  .clamp-3 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .card-info-title {
    /* max-lines: 1; */
    /* overflow: hidden; */
    /* bottom: 10px; */
  }
  .card-container:hover > .card-info > .card-info-title {
    color: var(--accent);
    text-decoration: underline;
  }
  @media screen and (max-width: 724px) {
    .card-container {
      margin: 0.4rem;
    }
    .card-image {
      height: 10rem;
    }
    .card-desc {
      display: none;
    }
  }
</style>
