<script lang="ts">

  import { onDestroy } from "svelte";
  import { sineInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  let { featuredShows } = $props();

  const DURATION = 10000;
  const queuedItemNum = [1, 2, 3];

  const progress = tweened(0, {
    duration: DURATION,
    easing: sineInOut,
  });

  let itemIdx = $state(0);
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
    <a href={featuredShows[itemIdx]?.url}><span class="link"></span></a>
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
            <i class="rating-stars fa-solid fa-star"></i>
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

    <progress class="progress-bar" value={$progress}></progress>
    <!-- progress bar -->
  </main>
  <div class="queued-container flex">
    {#each queuedItemNum as showIdx}
      <div class="queued-show flex">
        <a href={featuredShows[(showIdx + itemIdx) % 10]?.url}>
          <span class="link"></span>
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
                <i class="rating-stars fa-solid fa-star"></i>
                <p>
                  {featuredShows[(showIdx + itemIdx) % 10]?.rating?.average}
                </p>
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
</div>

<style>
  .grid-container {
    display: grid;
    gap: 2rem;
    margin: 0 2rem;
    position: relative;
    grid-template-areas:
      "main-container queued-container"
      "main-container queued-container"
      "main-container queued-container";
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 10rem 10rem 10rem;
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
  .main-container {
    position: relative;
    grid-area: main-container;
    justify-self: center;
    max-width: 25rem;
    min-width: 20rem;
  }
  .main-image {
    height: 34rem;
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
  img {
    height: 100%;
    object-fit: cover;
    object-position: center;
    background-size: 100%;
    background-color: black;
  }
  .queued-container {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
    grid-area: queued-container;
  }
  .queued-show {
    display: flex;
    position: relative;
  }
  .queued-image {
    min-height: 11rem;
    max-width: 8rem;
    min-width: 8rem;
    margin: 0 1.5rem;
    opacity: 0.9;
  }

  @media screen and (max-width: 1024px) {
    .grid-container {
      margin: 0 0;
      grid-template-areas:
        "main-container"
        "main-container"
        "main-container";
      grid-template-columns: 1fr;
    }
    .queued-container {
      display: none;
    }
    .main-container {
      min-width: 15rem;
    }
    * {
      width: 100%;
      overflow: hidden;
    }
  }
</style>
