<script lang="ts">
  import type { PageProps } from "./$types";
  import EpisodesSlot from "./episodesSlot.svelte";
  import ImageSlot from "./imageSlot.svelte";
  import CastSlot from "./castSlot.svelte";
  import LoadingIcon from "../../../assets/icons/loading_icon.svelte";

  let { data }: PageProps = $props();

  let showSummary = $state(false);
</script>

{#if data.name}
  {@const {
    name,
    genres,
    image,
    network,
    premiered,
    status,
    summary,
    _embedded,
    ended,
  } = data}
  <div class="top">
    <h1 class="text-4xl">{name}</h1>
    <span class="text-text-200/80"
      >{premiered}<span class="text-text-200/50">—</span
      >{status.toLowerCase() == "ended" ? ended : "Ongoing"}</span
    >
    <div class="genre-tabs mt-2 flex flex-wrap gap-2">
      {#each genres as genre}
        <a
          href={`categories/${genre}`}
          class="border-text-500 bg-background-300/50 hover:bg-background-200 hover:border-accent-300/50 my-0 flex min-h-[40px] min-w-[40px] items-center overflow-clip rounded-full border px-4 py-2 leading-4 text-nowrap capitalize duration-200 lg:min-h-max"
          >{genre}</a
        >
      {/each}
    </div>
    <div class="main-images my-12">
      {#if _embedded?.images.length!!}
        {@const backImages = _embedded?.images.filter(
          (item) => item.type === "background",
        )}

        {#if image}
          <img src={image?.medium} alt="main-poster" />
        {/if}
        {#each backImages as showImg}
          <img
            src={showImg.resolutions?.original?.url ||
              showImg.resolutions.medium.url}
            alt="show posters"
          />
        {/each}
        <!-- <img src={backImages[0]} alt="" /> -->
      {/if}
    </div>
    <div class="my-10">
      {#if network?.name}
        <a class="show-actions-action available text-lg" href="/"
          >Available on: <span class=" text-accent-300 p-2"
            >{network?.name}</span
          ></a
        >
      {/if}
      <span class="hidden">Add to watchlist</span>
    </div>
  </div>
  <div class="flex-container">
    <!-- Summary -->
    {#if summary!!}
      <div class="bg-background-300/50 mt-6 h-full rounded-lg px-4 py-2">
        <span class="block text-lg font-medium opacity-60">Summary</span>
        <button
          class="group text-left"
          onclick={() => {
            showSummary = !showSummary;
          }}
        >
          <p class:line-clamp-3={!showSummary}>
            {@html summary}
          </p>
          <span
            class="text-text-100/50 mt-3.5 text-left font-medium group-hover:underline"
          >
            See {showSummary ? "less" : "more"}
          </span>
        </button>
      </div>
    {/if}
    <!-- <EpisodesSlot seasonList={_embedded?.seasons} /> -->
    <ImageSlot imageList={_embedded?.images} />
    <CastSlot castList={_embedded?.cast} />
  </div>
  <!-- <div class="flex-container"> -->
  <!--   <h3>More</h3> -->
  <!--   <h5>Explore by genre</h5> -->
  <!--   <h5>Explore by people</h5> -->
  <!--   <h5>Explore by networks</h5> -->
  <!--   <h5>Explore your watchlist</h5> -->
  <!-- </div> -->
{:else}
  <div class="h-full w-full text-center">
    <LoadingIcon class="m-auto animate-spin" width="48" height="48" />
  </div>
{/if}
