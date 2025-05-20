<script lang="ts">
  import StarIcon from "../assets/icons/star_icon.svelte";

  let { show } = $props();
</script>

<div
  class="bg-background-300 group to-background-500 hover:bg-position-[0 .5rem] relative isolate box-border flex h-56 overflow-hidden rounded bg-gradient-to-r from-transparent from-40% duration-800 hover:from-80%"
  data-sveltekit-preload-data
>
  <a
    href="/shows/{show?.id}"
    class="absolute inset-0 z-10"
    aria-label="Go to show details"
  ></a>
  <div class="min-h-full w-1/5">
    <img
      class="h-full w-full object-cover object-center duration-300 group-hover:brightness-75"
      src={show?.image?.medium}
      alt="show-poster"
    />
  </div>
  <div class="flex w-full flex-col px-4 py-4">
    <span class="line-clamp-2 text-lg">{show?.name}</span>
    {#if show?.rating?.average > 0}
      <div class="flex items-center gap-1">
        <StarIcon class="text-yellow-300/70" width="18" height="18" />
        <span class="opacity-85">{show?.rating?.average}</span>
      </div>
    {/if}
    <p class="line-clamp-1 opacity-95">
      {#each show?.genres as genre, idx}
        <span>
          {genre}{idx !== show?.genres.length - 1 ? ", " : ""}
        </span>
      {/each}
    </p>
    <div class="line-clamp-4 max-h-full opacity-75">{@html show?.summary}</div>
  </div>
</div>
