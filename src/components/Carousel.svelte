<script>
  export let featuredShows;

  import { onDestroy } from "svelte";
  import { sineInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";

  const DURATION = 10000;
  const queuedItemNum = [1, 2, 3];

  const progress = tweened(0, {
    duration: DURATION,
    easing: sineInOut,
  });

  let itemIdx = 0;
  const intervalId = setInterval(() => {
    if (itemIdx === 9) itemIdx = 0;
    else itemIdx++;
    progress.set(0, { duration: 0 });
    progress.set(1, { duration: DURATION, easing: sineInOut });
  }, DURATION);

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<h1 class="title">Featured</h1>
<div class="grid-container">
  <main class="main-container">
    <a href={featuredShows[itemIdx]?.url}><span class="link" /></a>
    <img
      class="main-image"
      src={featuredShows[itemIdx]?.image?.original}
      alt="show-poster"
    />
    <div class="main-show">
      <div class="show-info">
        <h4 class="show-title">
          {featuredShows[itemIdx]?.name}
        </h4>
        {#if featuredShows[itemIdx]?.rating?.average > 0}
          <div class="rating">
            <i class="rating-stars fa-solid fa-star" />
            <p class="rating-val">
              {featuredShows[itemIdx]?.rating?.average}
            </p>
          </div>
        {/if}
      </div>
      <p>
        {#each featuredShows[itemIdx]?.genres as genre, idx}
          <span
            >{genre}{idx !== featuredShows[itemIdx]?.genres?.length - 1
              ? ", "
              : ""}</span
          >
        {/each}
      </p>
    </div>

    <progress class="progress-bar" value={$progress} />
    <!-- progress bar -->
  </main>
  {#each queuedItemNum as showIdx}
    <div class="queued-container flex">
      <a href={featuredShows[(showIdx + itemIdx) % 10]?.url}>
        <span class="link" />
      </a>
      <img
        class="queued-image"
        src={featuredShows[(showIdx + itemIdx) % 10]?.image?.medium}
        alt="show-poster"
      />
      <div>
        <div class="show-info">
          <h5 class="show-title">
            {featuredShows[(showIdx + itemIdx) % 10]?.name}
          </h5>
          {#if featuredShows[(showIdx + itemIdx) % 10]?.rating?.average}
            <div class="rating">
              <i class="rating-stars fa-solid fa-star" />
              <p>{featuredShows[(showIdx + itemIdx) % 10]?.rating?.average}</p>
            </div>
          {/if}
        </div>
        <p>
          {#each featuredShows[(showIdx + itemIdx) % 10]?.genres as genre, idx}
            <span
              >{genre}{idx !==
              featuredShows[(showIdx + itemIdx) % 10]?.genres?.length - 1
                ? ", "
                : ""}</span
            >
          {/each}
        </p>
      </div>
    </div>
  {/each}
</div>

<style>
  .title {
    color: var(--accent);
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 10rem);
    gap: 2rem;
    margin: 0 2rem;
    position: relative;
  }
  .link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .grid-container > * {
    max-height: 34rem;
  }
  .main-container {
    position: relative;
    grid-column: 1 / 3;
    grid-row: 1 / 4;
    justify-self: center;
    max-width: 25rem;
    min-width: 20rem;
  }
  .main-image {
    width: 100%;
    mask-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.2) 5%,
      rgba(0, 0, 0, 1)
    );
  }
  .main-show {
    position: absolute;
    bottom: 0;
    left: 0.5rem;
    right: 0;
    margin: 0 auto;
  }
  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: transparent;
    border: none;
    width: 100%;
  }
  .progress-bar::-webkit-progress-value,
  .progress-bar::-moz-progress-bar {
    background-color: var(--accent);
    border-radius: 7px;
  }
  .rating {
    display: flex;
    font-size: 0.8rem;
    margin: 0;
  }
  .rating > * {
    margin: 0;
    width: fit-content;
  }
  .rating-stars {
    color: yellow;
    margin: 0 0.5rem 0 0;
    height: fit-content;
  }
  .show-info > * {
    opacity: 0.7;
  }
  .show-title {
    margin: 0.5rem 0;
    opacity: 1;
  }
  /* .progress-bar::-moz-progress-bar { */
  /*   background-color: var(--accent); */
  /*   border-radius: 7px; */
  /* } */
  img {
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .queued-container {
    grid-column: 3 / 4;
    display: flex;
    position: relative;
    /* justify-content: space-between; */
  }
  .queued-image {
    height: 100%;
    max-width: 8rem;
    min-width: 8rem;
    margin: 0 1.5rem;
    opacity: 0.9;
  }

  @media screen and (max-width: 1024px) {
    .queued-container {
      display: none;
    }
    * {
      width: 100%;
      overflow: hidden;
    }
  }
</style>
