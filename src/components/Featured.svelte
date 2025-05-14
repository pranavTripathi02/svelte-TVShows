<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { TShow } from "../types";
  let { featuredShows }: { featuredShows: TShow[] } = $props();

  // in seconds
  const DURATION = 10;

  const PANELCOUNT = featuredShows.length;

  let currentPanelProgress = $state(0);

  let currItemIdx = $state(0);
  let carousel: HTMLDivElement;
  let translateCarousel = $state(0);

  const nextPanel = () => {
    currItemIdx = (currItemIdx + 1) % PANELCOUNT;
    currentPanelProgress = 0;
    changeCarousel();
  };
  const prevPanel = () => {
    currItemIdx = (currItemIdx - 1 + PANELCOUNT) % PANELCOUNT;
    currentPanelProgress = 0;
    changeCarousel();
  };

  let radius: number;
  const THETA = 360 / PANELCOUNT;
  // console.log( cellWidth, cellHeight );

  function rotateCarousel() {
    let angle = THETA * currItemIdx * -1;
    if (carousel)
      carousel.style!.transform =
        "translateZ(" + -radius + "px) " + "rotateY" + "(" + angle + "deg)";
  }

  function changeCarousel() {
    const cells: NodeListOf<HTMLElement> =
      carousel?.querySelectorAll(".carousel__panel");
    if (cells?.length)
      for (let i = 0; i < cells.length; i++) {
        let cell: HTMLElement = cells[i];
        if (i < PANELCOUNT) {
          // visible cell
          cell.style.opacity = "1";
          let cellAngle = THETA * i;
          cell.style.transform =
            "rotateY" + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
        } else {
          // hidden cell
          cell.style.opacity = "0";
          cell.style.transform = "none";
        }
      }

    rotateCarousel();
  }

  onMount(() => {
    translateCarousel = carousel.scrollWidth / 2 / Math.tan(360 / PANELCOUNT);
    const cellWidth = carousel?.scrollWidth;
    radius = Math.round((cellWidth || 0) / 2 / Math.tan(Math.PI / PANELCOUNT));

    const intervalId = setInterval(() => {
      currentPanelProgress = (currentPanelProgress + 1) % DURATION;
      if (!currentPanelProgress) {
        currItemIdx = ++currItemIdx % PANELCOUNT;
        changeCarousel();
      }
    }, 1000);

    changeCarousel();
    onDestroy(() => {
      clearInterval(intervalId);
    });
  });
</script>

<h1 class="title">Featured</h1>

<div class="relative isolate">
  <!-- Scene -->
  <div
    class="relative mx-auto mt-10 h-[400px] w-full perspective-[1000px] sm:w-3/5 lg:h-[600px] lg:w-1/3 xl:h-[720px] xl:w-1/2"
  >
    <!-- Carousel -->
    <div
      class="absolute h-full w-full transition-transform duration-1000 backface-hidden transform-3d"
      style:tranlateZ={-1 * translateCarousel}
      bind:this={carousel}
    >
      {#each featuredShows as show, idx}
        <!-- Panels -->
        <a
          class="carousel__panel group absolute left-3 isolate h-full w-full duration-1000"
          style:rotateY={idx * (360 / PANELCOUNT)}
          style:filter={idx !== currItemIdx
            ? "blur(2px) brightness(65%)"
            : "none"}
          style:pointer-events={idx !== currItemIdx ? "none" : "auto"}
          style:cursor={idx !== currItemIdx ? "none" : "pointer"}
          style:tranlateZ={translateCarousel}
          href="/shows/{show.id}"
        >
          <img
            alt="show poster"
            class="size-full scale-90 object-contain object-center duration-500 group-hover:brightness-85"
            src={show.image?.original ?? show.image.medium}
          />
          <div
            class="to-none absolute top-0 right-0 bottom-0 left-0 z-10 mt-auto flex flex-col justify-end bg-gradient-to-t from-black/65 from-10% pb-10"
          >
            <div>
              <h4 class="text-xl">
                {show.name}
              </h4>
              {#if show.rating?.average > 0}
                <div class="rating flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-yellow-300"
                    ><path
                      d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                      fill="currentColor"
                    ></path></svg
                  >
                  <p class="rating-val">
                    {show.rating?.average}
                  </p>
                </div>
              {/if}
            </div>
            <p>
              {#each show.genres as genre, idx}
                <span>{genre}{idx !== show.genres?.length - 1 ? ", " : ""}</span
                >
              {/each}
            </p>
          </div>
        </a>
      {/each}
    </div>
  </div>

  <button
    class="bg-text-300/50 absolute top-0 bottom-0 left-0 z-20 my-auto h-fit cursor-pointer rounded-full p-4 sm:left-10 xl:-left-20"
    onclick={() => prevPanel()}
    aria-label="Scroll carousel to previous show"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path></svg
    >
  </button>

  <button
    class="bg-text-300/50 absolute top-0 right-0 bottom-0 z-20 my-auto h-fit cursor-pointer rounded-full p-4 sm:right-10 xl:-right-20"
    onclick={() => nextPanel()}
    aria-label="Scroll carousel to next show"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path></svg
    ></button
  >
</div>

<style>
</style>
