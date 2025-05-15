<script lang="ts">
  import type { TShow } from "../types";
  import StarIcon from "../assets/icons/star_icon.svelte";

  let { show }: { show: TShow } = $props();
</script>

<div
  class="bg-background-300 group to-background-500 relative isolate mx-1 box-border flex max-w-24 min-w-24 flex-col overflow-hidden rounded bg-gradient-to-b from-transparent from-80% pb-4 sm:max-w-32 sm:min-w-32 md:max-w-48 md:min-w-48"
  data-sveltekit-preload-data
>
  <a aria-label="Open show details page" href="/shows/{show?.id}">
    <span class="absolute inset-0 z-10 h-full w-full"></span>
  </a>
  <div class="relative h-fit w-full">
    <img
      class="max-h-full w-full bg-black object-contain object-center duration-200 group-hover:brightness-60"
      src={show.image.medium}
      alt="show-poster"
    />
    <span
      class="absolute inset-0 bg-gradient-to-t from-black/30 from-50% to-transparent"
    ></span>
  </div>
  <!-- show info -->
  <div
    class="text-text-200 mx-1 grid h-full grid-rows-[1fr_1rem_1fr] gap-1 pt-2 brightness-90 group-hover:brightness-100 xl:mx-2"
  >
    <div class="row-start-0 my-0 h-full">
      <span class="group-hover:text-text-100 line-clamp-2 h-full text-ellipsis"
        >{show?.name}</span
      >
    </div>
    <!-- show rating -->
    {#if show?.rating?.average > 0}
      <div
        class="text-text-200 row-start-2 flex h-fit items-center gap-1 text-sm"
      >
        <StarIcon
          class="text-yellow-300"
          width="12"
          height="12"
          aria-label="show rating"
        />
        <p>{show?.rating?.average}</p>
      </div>
    {/if}
    <!-- show genres -->
    <p class="text-text-200/80 row-start-3 line-clamp-2 text-wrap">
      {#each show?.genres as genre, idx}
        <span>{genre}{idx !== show?.genres.length - 1 ? ", " : ""}</span>
      {/each}
    </p>
  </div>
</div>

<style>
</style>
