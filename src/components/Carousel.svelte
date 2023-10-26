<script>
  export let featuredShows;

  import { onDestroy } from "svelte";
  import { sineInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";

  const DURATION = 10000;

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
    <!-- <a href={featuredShows[itemIdx]?.url}><span class="link" /></a> -->
    <img
      class="main-image"
      src={featuredShows[itemIdx]?.image?.original}
      alt="show-poster"
    />
    <div class="main-show">
      <h4>
        {featuredShows[itemIdx]?.name}
        {`${
          featuredShows[itemIdx]?.rating?.average > 0
            ? "(" + featuredShows[itemIdx]?.rating?.average + ")"
            : ""
        }`}
      </h4>
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
  {#each [1, 2, 3] as showIdx}
    <div class="queued-container flex">
      <!-- <a href={featuredShows[(showIdx + itemIdx) % 10]?.url || "/"} -->
      <!--   ><span class="link" /></a -->
      <!-- > -->
      <img
        class="queued-image"
        src={featuredShows[(showIdx + itemIdx) % 10]?.image?.medium}
        alt="show-poster"
      />
      <div>
        <h5>
          {featuredShows[(showIdx + itemIdx) % 10]?.name}
          {featuredShows[(showIdx + itemIdx) % 10]?.rating?.average
            ? `(${featuredShows[(showIdx + itemIdx) % 10]?.rating?.average})`
            : ""}
        </h5>
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
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 10rem);
    gap: 2rem;
    margin: 0 2rem;
    position: relative;
    /* border: 10px solid white; */
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
    /* grid-row: auto; */
    /* grid-column-start: 1; */
    /* grid-column-end: 2 / 3; */
    grid-row: 1 / 4;
    /* border: 10px solid white; */
    /* align-self: self-end; */
    justify-self: center;
    max-width: 20rem;
    min-width: 20rem;
  }
  .main-image {
    width: 100%;
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
  /* .progress-bar::-moz-progress-bar { */
  /*   background-color: var(--accent); */
  /*   border-radius: 7px; */
  /* } */
  img {
    height: 100%;
    margin: 0 0;
    aspect-ratio: initial;
    mask-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.15) 1%,
      rgba(0, 0, 0, 1)
    );
  }
  .queued-container {
    grid-column: 3 / 4;
    display: flex;
    /* justify-content: space-between; */
  }
  .queued-image {
    height: 100%;
    max-width: 8rem;
    min-width: 8rem;
    margin: 0 1.5rem;
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
