<script lang="ts">
  import ScrollBtns from "./ScrollBtns.svelte";
  import SectionHeader from "./SectionHeader.svelte";

  let { categories }: { categories: string[] } = $props();
</script>

<SectionHeader title="Shows by Category" />
<div class="relative mx-8 mt-8 flex h-full items-center xl:mx-16">
  <div
    id="categories-carousel"
    class="flex flex-wrap justify-evenly gap-4 [scrollbar-width:none]"
  >
    {#each categories as category}
      <a
        class="border-text-500 bg-background-300/80 hover:bg-background-200 hover:border-accent-300/50 shadow-accent-500 my-0 flex items-center rounded-2xl border px-4 py-2 leading-4 text-nowrap capitalize duration-200 hover:shadow-[0_0_100px]"
        href="/shows/categories/{category}"
        aria-label={`show ${category} shows`}
        >{category}
      </a>
    {/each}
  </div>
  <ScrollBtns elId="categories-carousel" />
</div>
