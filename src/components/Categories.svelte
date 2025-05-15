<script lang="ts">
  import ScrollBtns from "./ScrollBtns.svelte";
  import SectionHeader from "./SectionHeader.svelte";

  let { categories }: { categories: string[] } = $props();
</script>

<SectionHeader title="Shows by Category" />
<div class="relative mx-8 mt-8 flex h-full items-center xl:mx-16">
  <div
    id="categories-carousel"
    class="flex gap-4 overflow-x-hidden [scrollbar-width:none]"
  >
    {#each categories as category}
      <a
        class="border-text-500 bg-background-300/80 hover:bg-background-200 my-0 flex items-center rounded-2xl border px-4 py-2 leading-4 text-nowrap capitalize opacity-80 duration-200 hover:opacity-100"
        href="/shows/categories/{category}"
        aria-label={`show ${category} shows`}
        >{category}
      </a>
    {/each}
  </div>
  <ScrollBtns elId="categories-carousel" />
</div>

<style>
  .tab-container {
    border: 1px solid rgba(var(--rgbtext), 0.1);
    min-width: fit-content;
    border-radius: 0.5rem;
    height: 1rem;
    padding: 1rem 1.5rem;
    margin: 1rem;
    cursor: pointer;
    position: relative;
    text-transform: capitalize;
  }
  .link {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .tab-container:hover {
    text-decoration: underline;
    border: 1px solid rgba(var(--rgbaccent), 0.2);
    color: var(--accent);
  }
  @media screen and (max-width: 724px) {
    .tab-container {
      height: 1rem;
      padding: 0.5rem 1rem;
      margin: 0.5rem;
    }
  }
</style>
