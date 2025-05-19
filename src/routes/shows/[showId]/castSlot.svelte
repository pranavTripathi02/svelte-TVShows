<script lang="ts">
  import SectionHeader from "../../../components/SectionHeader.svelte";

  let { castList } = $props();
</script>

<section class="title mt-12 text-2xl">
  <SectionHeader title="Top Cast" />
  <div
    class="bg-background-300/50 mx-auto my-4 grid w-full grid-cols-2 place-content-center justify-items-center gap-8 overflow-hidden rounded-lg
   px-4 py-4 sm:grid-cols-3 xl:grid-cols-4"
  >
    {#each castList as cast}
      <a
        href="#"
        aria-label={`Open page for ${cast.person.name}`}
        class="group flex flex-col items-center"
      >
        <div>
          <img
            src={cast.person?.image?.medium}
            alt=""
            class="aspect-square size-full h-24 w-24 rounded-full object-cover object-center duration-300 group-hover:opacity-80 lg:h-32 lg:w-32"
          />
        </div>
        <div class="mt-2 text-center text-lg group-hover:underline">
          {cast.person.name}
        </div>
        <div class="text-base">
          <span class="opacity-70">as</span>
          <span class="text-accent-400 group-hover:text-accent-300"
            >{cast.character.name}</span
          >
        </div>
      </a>
    {/each}
  </div>
</section>
