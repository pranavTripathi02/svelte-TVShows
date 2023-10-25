<script>
  export let show;
</script>

<div class="card-container">
  <a href={show.url}> <span class="link" /></a>
  <img
    class="card-image"
    src={show.image.medium || show.image.original || ""}
    alt="show poster"
  />
  <div class="card-info">
    <b class="card-info-title clamp-2">{show.name}</b>
    <p class="clamp-2">
      {#each show.genres as genre, idx}
        <span>
          {genre}{idx !== show.genres.length - 1 ? ", " : ""}
        </span>
      {/each}
    </p>
  </div>
</div>

<style>
  .card-container {
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid white;
    margin: 1rem;
    /* min-height: 12rem; */
    height: 100%;
    min-width: 10rem;
    max-width: 10rem;
    overflow: hidden;
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
    mask-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.15) 35%,
      rgba(0, 0, 0, 1)
    );
  }
  .card-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    /* bottom: 0; */
    top: 55%;
    margin: 0 0.5rem;
  }

  .clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .card-info-title {
    /* max-lines: 1; */
    overflow: hidden;
    bottom: 10px;
  }
  .card-container:hover > .card-info > .card-info-title {
    color: var(--accent);
  }
</style>
