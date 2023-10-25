<script>
  export let show;
</script>

<div class="card-container">
  <img
    class="card-image"
    src={show.image.medium || show.image.original}
    alt="show poster"
  />
  <div class="card-info">
    <b class="card-info-title">{show.name}</b>
    <p>
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
  .card-image {
    mask-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.15) 25%,
      rgba(0, 0, 0, 1)
    );
  }
  .card-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    margin: 1rem 0.5rem;
  }

  .card-info-title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    /* max-lines: 1; */
    border: 1px solid red;
    overflow: hidden;
    bottom: 10px;
    color: var(--accent);
  }
</style>
